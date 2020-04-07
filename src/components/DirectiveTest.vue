<template>
  <div>
    <input v-focus />
  </div>
</template>

<script>
export default {
  name: "DirectiveTest",
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style>
</style>