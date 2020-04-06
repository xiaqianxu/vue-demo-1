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
            gender: ''
        }
    },

    computed: {
        displayUsers() {
            console.log(this.gender, "被计算了一次")
            const hash = {
                male: '男',
                female: '女'
            };
            const {
                users,
                gender
            } = this;
            if (gender === "") {
                return this.users;
            } else if (gender === "male" || gender === "female") {
                return users.filter(u => u.gender === hash[gender])
            } else {
                throw new Error("gender 不在列表中")
            }

        }

    },

    methods: {
        setGender(String) {
            this.gender = String
        }

    },

    // DRY don't repeat yourself
    // 不如用 computed 来计算 displayName
    template: `
    <div>
    <div><button @click="setGender('')">全部</button><button @click="setGender('male')">男</button><button @click="setGender('female')">女</button></div>
    <ul>
        <li v-for="u in displayUsers" :key="u.id">
        {{u.name}} - {{u.gender}}
        </li>
    </ul>
    </div>`,

}).$mount("#app");