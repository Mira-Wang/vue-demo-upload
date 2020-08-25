import {getStorageToken,setStorageToken} from '@/utils/localStorage'

const token = {
    state: {
        token: getStorageToken()
    },
    mutations: {
        SAVE_TOKEN: (state, mdata) => {
            // 这一步的data是action里面包含type的{}传过来的东西
            state.token = mdata.token
            setStorageToken(mdata.token)
        },
    },
    actions: {
        // 其实这里定义的方法只是将mutation.js中定义的方法进行了一次封装,就是去触发mutations.js中的方法。
        // 如果传如的参数需要异步获取的话，我们可以在这里等待异步返回成功后在触发mutations中的方法。
        saveToken({commit}, pageData) {
            // 这一步的pageData参数是页面传过来的东西，选填
            return new Promise(resolve => {
                commit({type: 'SAVE_TOKEN',token: pageData.token})
                resolve()
            })
        }
    }
}
export default token