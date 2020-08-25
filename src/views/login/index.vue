<template>
  <div class="container">
    <div @click.stop="clickLogin">登录</div>
  </div>
</template>
<script>
import store from "@/store";
// import { Login } from '@/api/login';
import { mapGetters } from "vuex";

export default {
  mixins: [],
  computed: {
    ...mapGetters(["token"]),
  },
  created() {
    console.log("token", this.token);
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    // clickLogin() {
    //   Login({ username, password })
    //     .then((res) => {
    //       // 登录成功
    //       store.dispatch("saveToken", {
    //         token: res.data.token,
    //       });
    //     })
    //     .catch(() => {
    //       // 登录失败
    //     });
    // },
    clickLogin() {
      store.dispatch("saveToken", {
        token: "12345678910",
      });
      console.log("token", this.token);
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  background: red;
}
</style>