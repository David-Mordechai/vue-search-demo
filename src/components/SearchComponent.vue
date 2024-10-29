<template>
    <div :class="searchStore.subCriteria !== undefined ? 'wrapperSubcriteria' : 'wrapper'">
        <SearchTextComponent class="search" />
        <SelectedComponent class="selected" v-if="searchStore.subCriteria !== undefined" />

        <div class="filterIcon">
            <v-btn-toggle v-model="toggle_exclusive">
                <v-btn variant="text"><v-icon icon="mdi-filter" /></v-btn>
            </v-btn-toggle>
        </div>

        <CheapsComponent v-if="toggle_exclusive === 0" class="cheaps" />
        <SearchResultComponent class="searchResult" />
    </div>

</template>

<script setup lang="ts">
import SearchTextComponent from './SearchTextComponent.vue';
import SelectedComponent from './SelectedComponent.vue';
import CheapsComponent from './CheapsComponent.vue';
import SearchResultComponent from './SearchResultComponent.vue';
import { useSearchStore } from '../stores/searchStore';
import { ref } from 'vue';
const searchStore = useSearchStore();
let toggle_exclusive = ref(undefined)
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-areas:
        "srch srch srch srch flti"
        "chps chps chps chps chps"
        "rslt rslt rslt rslt rslt";
}

.wrapperSubcriteria {
    display: grid;
    grid-template-areas:
        "srch srch srch slct flti"
        "chps chps chps chps chps"
        "rslt rslt rslt rslt rslt";
}

.search {
    grid-area: srch;
}

.selected {
    grid-area: slct;
    align-self: center;
    justify-self: center;
}

.filterIcon {
    grid-area: flti;
    align-self: center;
    justify-self: end;
}

.cheaps {
    grid-area: chps;
}

.searchResult {
    grid-area: rslt;
}
</style>