<template>
  <div>
    {{n}}
    <hr />
    <button @click="add1">+1</button>
    <button @click="add2">+2</button>
    <button @click="minus1">-1</button>
    <button @click="minus2">-2</button>
    <hr/>
    <button @click="undo">撤销</button>
    <hr/>

    {{history}}
  </div>
</template>

<script>
export default {
    name:'WatchTest',
    data() {
        return {
            n:0,
            history:[],
            inUndoMode:false
        }
    },
    watch:{
        n:function(newValue, oldValue){
           if (!this.inUndoMode) {
               this.history.push({
                   from:oldValue,
                   to:newValue
               })
           }
        }
    },
    methods: {
        add1() {
            this.n += 1;
        },
        add2() {
            this.n += 2;
        },
        minus1() {
            this.n -= 1;
        },
        minus2() {
            this.n -= 2;
        },
        undo(){
            const last = this.history.pop();
            this.inUndoMode = true;
            const old = last.from
            this.n = old;
            this.$nextTick(()=>{
                this.inUndoMode = false
            })
        }
    },


}
</script>

<style>

</style>