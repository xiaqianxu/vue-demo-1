// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

new Vue({
    data: {
        user: {
            email: "fangyinghang@qq.com",
            nickname: "方方1",
            phone: "13812312312"
        }
    },
    computed: {
        displayName: {
            get() {
                const user = this.user
                return user.nickname || user.email || user.phone
            },
            set(value) {
                this.user.nickname = value
            }
        }
    },
    methods: {
        add() {
            this.displayName = "晴晴"
        }
    },

    // DRY don't repeat yourself
    // 不如用 computed 来计算 displayName
    template: `<div>
    {{displayName}}
    <div>
    {{displayName}}
    <button @click="add">set</button>
    </div>
  </div>`,

}).$mount("#app");