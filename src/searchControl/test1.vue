<script lang="ts" setup>
import { ref } from 'vue';

// Define the item structure
interface Item {
  id: number;
  name: string;
  value: string;
}

// Sample data
const items = ref<Item[]>([
  { id: 1, name: 'Item 1', value: 'Value 1' },
  { id: 2, name: 'Item 2', value: 'Value 2' },
  { id: 3, name: 'Item 3', value: 'Value 3' },
  { id: 4, name: 'Item 4', value: 'Value 4' },
]);

const selectedItems = ref<Item[]>([]); // Tracks selected items
const lastSelectedIndex = ref<number | null>(null); // Tracks the last selected index for shift selection

// Handle row click
function handleRowClick(item: Item, index: number, event: MouseEvent): void {
  if (event.shiftKey && lastSelectedIndex.value !== null) {
    // Shift+Click: Select range of items
    const start = Math.min(lastSelectedIndex.value, index);
    const end = Math.max(lastSelectedIndex.value, index);
    const range = items.value.slice(start, end + 1);
    range.forEach((row) => {
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

  lastSelectedIndex.value = index; // Update the last selected index
}

// Check if a row is selected
const isRowSelected = (item: Item): boolean => selectedItems.value.includes(item);
</script>

<template>
  <v-container>
    <v-data-table
      :items="items"
      :headers="[
        { title: 'Name', value: 'name' },
        { title: 'Value', value: 'value' },
      ]"
      item-value="id"
      item-class="item-row"
    >
      <template v-slot:body="{ items }">
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          :class="{ 'selected-row': isRowSelected(item) }"
          @click="handleRowClick(item, index, $event)"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<style scoped>
.selected-row {
  background-color: darkblue; /* Light teal for selection */
  color: whitesmoke;
}
</style>
