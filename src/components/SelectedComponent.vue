<template>
    <div>
        <v-chip :text="searchStore.subCriteria"></v-chip>
    </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';
const searchStore = useSearchStore();
</script>

<style scoped>

</style>