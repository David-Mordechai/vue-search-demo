<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

function Search(input: string){
  searchStore.searchCriteria = input;
}
</script>

<template>
  <v-text-field v-debounce:400ms="Search"
  density="compact"
      placeholder="Type to search..."
      append-inner-icon="mdi-magnify"
      hide-details="auto"
      single-line
      variant="solo"
    />
</template>

<style scoped>
</style>
