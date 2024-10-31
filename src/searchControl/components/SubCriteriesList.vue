<template>
    <v-sheet class="wrapper">
        <v-responsive class="overflow-y-auto">
            <v-chip-group selected-class="text-primary" column v-model="searchStore.subCriteria">
                <v-chip v-for="criteria in searchStore.subCriteries" :key="criteria" :text="criteria"
                    :value="criteria"></v-chip>
            </v-chip-group>
        </v-responsive>
    </v-sheet>
</template>

<script setup lang="ts">
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();

</script>

<style scoped>
.wrapper {
    width: 570px;
    padding-left: 10px;
}
</style>