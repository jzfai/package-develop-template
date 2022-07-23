<template>
  <div class="pd-input">
    <el-input v-model="inputValue" placeholder="i am input from package component" class="widthPx-360" clearable />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref(null)
</script>

<style lang="scss">
.pd-input {
  .el-input__inner {
    color: red;
  }
}
</style>
