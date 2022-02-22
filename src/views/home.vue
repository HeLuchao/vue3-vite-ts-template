<template>
  <div>
    Home page
    <HelloWorld />
    <div>{{ mainStore.name }}</div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useMainStore } from '@/store/main';

const mainStore = useMainStore();
</script>

<style lang="scss" scoped></style>
