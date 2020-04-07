// 引用完整版 Vue，方便讲解
import Vue from "vue";
import DirectiveTest from "@/components/DirectiveTest.vue"

Vue.config.productionTip = false;

// let id = 0;
// const createUser = (name, gender) => {
//     id += 1;
//     return {
//         id,
//         name,
//         gender
//     }
// }
new Vue({
    render: h => h(DirectiveTest)
    //     data() {
    //         return {
    //             users: [
    //                 createUser("方方", "男"),
    //                 createUser("圆圆", "女"),
    //                 createUser("笑笑", "女"),
    //                 createUser("皮皮", "男")
    //             ],
    //             gender: '',
    //             n: 0,
    //             history: [],
    //             inUndoMode: false
    //         }
    //     },

    //     computed: {
    //         displayUsers() {
    //             console.log(this.gender, "被计算了一次")
    //             const hash = {
    //                 male: '男',
    //                 female: '女'
    //             };
    //             const {
    //                 users,
    //                 gender
    //             } = this;
    //             if (gender === "") {
    //                 return this.users;
    //             } else if (gender === "male" || gender === "female") {
    //                 return users.filter(u => u.gender === hash[gender])
    //             } else {
    //                 throw new Error("gender 不在列表中")
    //             }

    //         }

    //     },
    //     watch: {
    //         n: function (newValue, oldValue) {
    //             console.log(this.inUndoMode)
    //             if (!this.inUndoMode) {
    //                 this.history.push({
    //                     from: oldValue,
    //                     to: newValue
    //                 })
    //             }
    //         }

    //     },

    //     methods: {
    //         setGender(String) {
    //             this.gender = String
    //         },
    //         add1() {
    //             this.n += 1;
    //         },
    //         add2() {
    //             this.n += 2;
    //         },
    //         minus1() {
    //             this.n -= 1;
    //         },
    //         minus2() {
    //             this.n -= 2;
    //         },
    //         undo() {
    //             const last = this.history.pop();
    //             this.inUndoMode = true;
    //             const old = last.from;
    //             this.n = old; //watch是异步的
    //             this.$nextTick(() => { //等到上边执行完之后才执行下面的操纵
    //                 this.inUndoMode = false
    //             })
    //         }

    //     },

    //     // DRY don't repeat yourself
    //     // 不如用 computed 来计算 displayName
    //     template: `
    //     <div>
    //     <div><button @click="setGender('')">全部</button><button @click="setGender('male')">男</button><button @click="setGender('female')">女</button></div>
    //     <ul>
    //         <li v-for="u in displayUsers" :key="u.id">
    //         {{u.name}} - {{u.gender}}
    //         </li>
    //     </ul>

    //     <hr/>

    // {{n}}
    // <hr />
    // <button @click="add1">+1</button>
    // <button @click="add2">+2</button>
    // <button @click="minus1">-1</button>
    // <button @click="minus2">-2</button>
    // <hr/>
    // <button @click="undo">撤销</button>
    // <hr/>

    // {{history}}
    //   </div>
    //     `,

}).$mount("#app");