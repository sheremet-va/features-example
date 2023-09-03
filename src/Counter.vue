<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count--"> -1 </button>
  <span data-test-id="counter">Count is {{ count }}</span>
  <button @click="count++"> +1 </button>
</template>
