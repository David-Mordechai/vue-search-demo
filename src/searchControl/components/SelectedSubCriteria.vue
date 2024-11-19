<template>
    <div>
        <v-chip :text="searchStore.subCriteria"></v-chip>
    </div>
</template>

<script setup lang="ts">
defineProps(["searchStore"])
</script>

<style scoped>

</style>