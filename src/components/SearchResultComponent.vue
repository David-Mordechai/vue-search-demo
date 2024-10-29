<template>
  <v-data-table-virtual fixed-header :headers="headers" :items="searchStore.searchResult" height="400"
    item-value="name"></v-data-table-virtual>
</template>

<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();

const headers = [
  { title: 'Boat Type', key: 'name' },
  { title: 'Speed', key: 'speed' },
  { title: 'Length', key: 'length' },
  { title: 'Price', key: 'price' },
  { title: 'Year', key: 'year' },
]
</script>

<style scoped></style>