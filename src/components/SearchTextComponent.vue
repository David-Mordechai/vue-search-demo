<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();
function Search(input: string){
  searchStore.searchCriteria = input;
}
</script>

<template>
  <v-text-field v-debounce:400ms="Search"
      label="Search"
      placeholder="Type to search..."
      variant="outlined"
    />
</template>

<style scoped>
</style>
