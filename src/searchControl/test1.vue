<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      dense
      item-value="id"
      item-key="id"
      @dragstart:row="onDragStart"
      draggable:row="true"
    >
    </v-data-table>

    <div
      class="drop-area"
      @dragover.prevent
      @drop="onDrop"
      style="margin-top: 20px; padding: 20px; border: 1px dashed #aaa;"
    >
      <p>Drop here:</p>
      <div v-if="droppedItem">
        <p><strong>Name:</strong> {{ droppedItem.name }}</p>
        <p><strong>Age:</strong> {{ droppedItem.age }}</p>
      </div>
    </div>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // Data for table headers and items
    const headers = ref([
      { text: "Name", value: "name" },
      { text: "Age", value: "age" },
    ]);
    const items = ref([
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 },
    ]);

    // State for the dropped item
    const droppedItem = ref(null);

    // Methods for drag-and-drop
    const onDragStart = (event, row) => {
      event.dataTransfer.setData("application/json", JSON.stringify(row.item));
    };

    const onDrop = (event) => {
      const data = event.dataTransfer.getData("application/json");
      droppedItem.value = JSON.parse(data);
    };

    return {
      headers,
      items,
      droppedItem,
      onDragStart,
      onDrop,
    };
  },
};
</script>

<style scoped>
.drop-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #f9f9f9; */
}

/* Ensure the row is draggable */
.draggable-row {
  cursor: grab; /* Change cursor to indicate draggable rows */
}
.draggable-row:hover {
  background-color: rgb(var(--v-theme-code)); /* Add a hover effect for feedback */
}
</style>
