<script setup  lang="ts">
import Search from './searchControl/Search.vue';
import { useSearchStore } from './searchControl/stores/searchStore';
import test1 from './searchControl/test1.vue';

const leftSearchStore = useSearchStore("leftSearch");
const rightSearchStore  = useSearchStore("rightSearch");
</script>

<template>
  <Search :searchStore=leftSearchStore />
  <Search :searchStore=rightSearchStore />

  <test1 />
</template>

<style scoped>

</style>
