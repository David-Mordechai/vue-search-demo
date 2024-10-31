<template>
    <v-container class="container">
        <v-row  justify="center" class="centerVerticalAlign">
            <v-col>
                <SearchText />
            </v-col>
            <v-col cols="2" v-if="searchStore.subCriteria !== undefined">
                <SelectedSubCriteria />
            </v-col>
            <v-col cols="1" class="centerVerticalAlign">
                <v-btn @click="toggle" variant="plain" density="compact" slim size="x-large" icon="mdi-filter"/>
            </v-col>
        </v-row>
        <v-row no-gutters v-if="toggleSubSearchPanel">
            <SubCriteriesList />
        </v-row>
        <v-row no-gutters>
            <SearchResultTable />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import SearchText from './components/SearchTextField.vue';
import SelectedSubCriteria from './components/SelectedSubCriteria.vue';
import SubCriteriesList from './components/SubCriteriesList.vue';
import SearchResultTable from './components/SearchResultTable.vue';
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
    width: 570px;
}

.centerVerticalAlign{
    align-items: center;
}
</style>