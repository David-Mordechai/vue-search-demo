<template>
  <v-data-table-virtual style="text-align: left;" fixed-header :headers="headers" :items="searchStore.searchResult" height="400" width="600" show-select
    item-value="name" hover>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    </v-data-table-virtual>
</template>

<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

const headers = [
  { title: 'Boat Type', key: 'name' },
  // { title: 'Speed', key: 'speed' },
  { title: 'Length', key: 'length' },
  { title: 'Price', key: 'price' },
  { title: 'Year', key: 'year' },
  { title: '', key: 'actions', sortable: false },
];

function editItem(item: any){
  console.log('edit', item);
}

function deleteItem(item: any){
  console.log('delete', item);
}
</script>

<style scoped>
</style>