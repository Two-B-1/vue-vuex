<template>
    <div></div>
</template>


<script>
//方法一：
export default {
        mounted() {
            // 使用this.$store.state.XXX可以直接访问到仓库中的状态
            console.log(this.$store.state.name); 
            console.log(this.$store.getters.getMessage);
            // 注意不是$store.state了，而是$store.getters


            console.log(`旧值：${this.$store.state.number}`);
            this.$store.commit('setNumber');
            console.log(`新值：${this.$store.state.number}`);


            console.log(`旧值：${this.$store.state.number}`);
            this.$store.commit('setNumberIsWhat', 666);
            console.log(`新值：${this.$store.state.number}`);
            //console.log(`旧值：${this.$store.state.number}`);
            //this.$store.commit('setNumberIsWhat', { number: 666 });  // 调用的时候也需要传递一个对象
            //console.log(`新值：${this.$store.state.number}`);
        },
        async mounted() {
            console.log(`旧值：${this.$store.state.number}`);
            await this.$store.dispatch('setNum');
            console.log(`新值：${this.$store.state.number}`);
        },

}

//方法二(官方建议我们以上操作this.$store.state.XXX最好放在计算属性中)：
/* export default {
    mounted() {
        console.log(this.getName); 
    },
    computed:{
        getName() {
            return this.$store.state.name;
        }
    },
} */


//方法三(不用重复写 this.$store.state.XXX)：

/* import { mapState } from 'vuex'; // 从vuex中导入mapState
export default {
    mounted() {
        console.log(this.name);
        console.log(this.getMessage);
    },
    computed: {
        ...mapState(['name']), // 经过解构后，自动就添加到了计算属性中，此时就可以直接像访问计算属性一样访问它
        ...mapGetters(['getMessage']),
    },
} */

//小技巧(mutations的方法不固定传参)
/* import { mapMutations } from 'vuex';
export default {
    mounted() {
        this.setNumberIsWhat({ number: 999 });
    },
    methods: {   // 注意，mapMutations是解构到methods里面的，而不是计算属性了
        ...mapMutations(['setNumberIsWhat']),
    },
}
 */
</script>


