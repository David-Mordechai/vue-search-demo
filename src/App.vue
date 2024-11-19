<script setup  lang="ts">
import Search from './searchControl/Search.vue';
import { useSearchStore } from './searchControl/stores/searchStore';

const leftSearchStore = useSearchStore("leftSearch");
const rightSearchStore  = useSearchStore("rightSearch");
</script>

<template>
  <Search :searchStore=leftSearchStore />
  <Search :searchStore=rightSearchStore />
</template>

<style scoped>

</style>
