<template>
  <div>
      粑粑有{{total}}元
        <!-- <Child :money="total" @update:money="total = $event"/> -->
        <Child :money.sync="total"/>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default { 
    name:'SyncTest',
    components:{Child},
    data() {
        return {
            total:10000
        }
    },

}
</script>

<style>

</style>