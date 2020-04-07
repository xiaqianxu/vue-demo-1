<template>
  <div>
    <Child v-if="childVisible" />
    <button @click="childVisible = false">x</button>
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
import log from "@/mixins/log.js";
export default {
  name: "MixinsTest",
  components: { Child },
  mixins: [log]
};
</script>

<style>
</style>