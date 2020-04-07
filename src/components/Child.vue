<template>
  <div>
      粑粑的钱 {{money}}
      <button @click="$emit('update:money',money-100)">花钱</button>
  </div>
</template>

<script>
export default {
    name:'Child',
    props:["money"]

}
</script>

<style>

</style>