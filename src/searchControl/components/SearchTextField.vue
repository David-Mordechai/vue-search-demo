<script setup lang="ts">

const props = defineProps(["searchStore"])

function Search(input: string){
  props.searchStore.searchCriteria = input;
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
