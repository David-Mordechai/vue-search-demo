<template>
  <v-data-table-virtual class="table" fixed-header :headers="headers" :items="searchStore.searchResult"  show-select
    item-value="name" hover>
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    </v-data-table-virtual>
</template>

<script setup lang="ts">

defineProps(["searchStore"])

const headers = [
  { title: 'Boat Type', key: 'name' },
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
.table{
  max-height:350px;
  min-height: 200px;
  text-align: left;
}
</style>