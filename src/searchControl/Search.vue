<template>
    <v-container class="container">
        <v-row align="center" justify="center" class="searchRow">
            <v-col>
                <SearchTextComponent />
            </v-col>
            <v-col cols="2" v-if="searchStore.subCriteria !== undefined">
                <SelectedComponent />
            </v-col>
            <v-col cols="1" align="center">
                <v-btn @click="toggle" variant="plain" density="compact" slim size="x-large" icon="mdi-filter"/>
            </v-col>
        </v-row>
        <v-row no-gutters v-if="toggleSubSearchPanel">
            <CheapsComponent />
        </v-row>
        <v-row no-gutters>
            <SearchResultComponent />
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import SearchTextComponent from './components/SearchTextField.vue';
import SelectedComponent from './components/SelectedSubCriteria.vue';
import CheapsComponent from './components/SubCriteries.vue';
import SearchResultComponent from './components/SearchResultTable.vue';
import { useSearchStore } from './stores/searchStore';
import { ref } from 'vue';
const searchStore = useSearchStore();
let toggleSubSearchPanel = ref<boolean>(false)

function toggle(){
    toggleSubSearchPanel.value = !toggleSubSearchPanel.value
}
</script>

<style scoped>
.container{
    width: 550px;
}
.searchRow{
    text-align: center;
    justify-content: center;
}
</style>