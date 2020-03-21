// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(window.Vue)
// console.log(window.Vue)
import Demo from './Demo.vue'
console.log(Demo.render)
// eslint-disable-next-line no-undef
new Vue({
    el: '#app',
    render(h) {
        return h(Demo)

    }
    // data: {
    //     n: 1
    // },
    // methods: {
    //     add() {
    //         this.n += 1;
    //     }
    // },
    // //vue.runtime.min.js
    // render(h) {
    //     return h('div', [this.n, h('button', {
    //         on: {
    //             click: this.add
    //         },

    //     }, '+1')])
    // }
})