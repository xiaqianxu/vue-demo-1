// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

let id = 0;
const createUser = (name, gender) => {
    id += 1;
    return {
        id,
        name,
        gender
    }
}
new Vue({
    data() {
        return {
            users: [
                createUser("方方", "男"),
                createUser("晴晴", "女"),
                createUser("楠楠", "女"),
                createUser("长政", "男")
            ],
            displayUsers: []
        }
    },
    created() {
        this.displayUsers = this.users
    },
    computed: {


    },

    methods: {
        showMale() {
            this.displayUsers = this.users.filter(u => u.gender === "男")
        },
        showFemale() {
            this.displayUsers = this.users.filter(u => u.gender === "女")
        },
        showAll() {
            this.displayUsers = this.users
        }


    },

    // DRY don't repeat yourself
    // 不如用 computed 来计算 displayName
    template: `
    <div>
    <div><button @click="showAll">全部</button><button @click="showMale">男</button><button @click="showFemale">女</button></div>
    <ul>
        <li v-for="u in displayUsers" :key="u.id">
        {{u.name}} - {{u.gender}}
        </li>
    </ul>
    </div>`,

}).$mount("#app");