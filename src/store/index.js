import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 定义一个name，以供全局使用
        name: '张三',
        // 定义一个number，以供全局使用
        number: 0,
        // 定义一个list，以供全局使用
        list: [
            { id: 1, name: '111' },
            { id: 2, name: '222' },
            { id: 3, name: '333' },
        ]
    },
    // 在store对象中增加修饰器:getters属性
    getters: {
        getMessage(state) { // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
            return `hello${state.name}`;
        }
    },
    
    mutations: { // 增加nutations属性----一条重要原则：Mutations里面的函数必须是同步操作，不能包含异步操作！
        setNumber(state) {  // 增加一个mutations的方法，方法的作用是让num从0变成5，state是必须默认参数
            state.number = 5;
        },
        setNumberIsWhat(state, number) { // 增加一个带参数的mutations方法
            state.number = number;
        //setNumberIsWhat(state, payload) { // 美观。增加一个带参数的mutations方法，并且官方建议payload为一个对象
        //state.number = payload.number;
        },
    },
    //异步操作
    actions: {   // 增加actions属性
        setNum(content) {  // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
            return new Promise(resolve => {  // 我们模拟一个异步操作，1秒后修改number为888
                setTimeout(() => {
                    content.commit('setNumberIsWhat', { number: 888 });
                    resolve();
                }, 1000);
            });
        }
    },

});

export default store;