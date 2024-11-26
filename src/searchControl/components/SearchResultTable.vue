<template>
  <v-data-table-virtual class="table" fixed-header :headers="headers" :items="searchStore.searchResult" show-select
    item-value="index" hover @click:row="handleRowClick" :row-props="rowProps" @update:sort-by="sortEvent">
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon size="small" @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table-virtual>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { boat } from '../models/boat';

const props = defineProps(["searchStore"])

const headers = [
  { title: 'Boat Type', key: 'name' },
  { title: 'Length', key: 'length' },
  { title: 'Price', key: 'price' },
  { title: 'Year', key: 'year' },
  { title: '', key: 'actions', sortable: false },
];

type SortItem = {
  key: string;
  order?: boolean | 'asc' | 'desc';
};


const sortBy = ref<SortItem>();

const sortEvent = (sort: SortItem[]) => {
  console.log(sort);
  sortBy.value = sort[0];
}

function sortList<T>(list: T[], options: SortItem): T[] {
  const key = options?.key;
  const order = options?.order

  // Determine the sorting order: 'asc' is default for `true`, no sorting for `false`
  const sortOrder = order === true || order === 'asc' ? 'asc' : order === 'desc' ? 'desc' : null;

  // If no valid sort order, return the original list
  if (!sortOrder) {
    return list;
  }

  // Perform the sorting
  return list.slice().sort((a: any, b: any) => {
    const aValue = a[key]
    const bValue = b[key];

    if (aValue < bValue) {
      return sortOrder === 'asc' ? -1 : 1;
    } else if (aValue > bValue) {
      return sortOrder === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });
}

const selectedItems = ref<boat[]>([]); // Tracks selected items
const lastSelectedIndex = ref<number | null>(null); // Tracks the last selected index for shift selection

// Handle row click
function handleRowClick(event: MouseEvent, row: any): void {

  const item: boat = row.item;

  if (event.shiftKey && lastSelectedIndex.value !== null) {
    // Shift+Click: Select range of items
    const start = Math.min(lastSelectedIndex.value, row.index);
    const end = Math.max(lastSelectedIndex.value, row.index);
    const range = sortList(props.searchStore.searchResult, sortBy.value!).slice(start, end + 1);
    range.forEach((row: any) => {
      if (!selectedItems.value.includes(row)) {
        selectedItems.value.push(row);
      }
    });
  } else if (event.ctrlKey || event.metaKey) {
    // Ctrl+Click (or Cmd+Click on macOS): Toggle single item
    if (selectedItems.value.includes(item)) {
      selectedItems.value = selectedItems.value.filter((selected) => selected !== item);
    } else {
      selectedItems.value.push(item);
    }
  } else {
    // Regular Click: Select single item and clear others
    selectedItems.value = [item];
  }

  lastSelectedIndex.value = row.index; // Update the last selected index

  console.log(selectedItems.value);
}

const rowProps = (row: any) => {
  return {
    // class: selectedItems.value.includes(row.item) ? 'selected-row' : '', // Dynamic classes
    style: selectedItems.value.includes(row.item) ? 'background-color: darkblue;' : '', // Custom styles
  };
};

function editItem(item: any) {
  console.log('edit', item);
}

function deleteItem(item: any) {
  console.log('delete', item);
}
</script>

<style scoped>
.table {
  max-height: 350px;
  min-height: 200px;
  text-align: left;
  user-select: none;
}
</style>