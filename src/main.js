import Vue from 'vue';
import App from './App';
import router from './store/index';
import store from './store/index'; // 引入我们前面导出的store对象

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store, // 把store对象添加到vue实例上
    components: { App },
    template: '<App/>'
});
