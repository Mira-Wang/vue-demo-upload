<template>
  <div class="container">
    <div @click.stop="getBannerList()">获取banner列表</div>
  </div>
</template>

<script>
import { home } from "@/api/home";
export default {
  mixins: [],
  created() {
    this.getHome();
  },
  computed: {},
  data() {
    return {};
  },
  watch: {},
  methods: {
    getHome() {
      home({})
        .then((res) => {
          // 登录成功
          console.log("首页", res.data);
          this.$store.commit('saveBannerList', res.data.bannerList);    
        })
        .catch(() => {
          // 登录失败
        });
    },
    getBannerList(){
      const getBanner = this.$store.getters.getBannerList
      console.log('getBanner',getBanner)
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: red;
}
</style>