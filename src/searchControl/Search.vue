<template>
    <v-container class="container">
        <v-row  justify="center" class="centerVerticalAlign">
            <v-col>
                <SearchText :searchStore=searchStore />
            </v-col>
            <v-col cols="2" v-if="searchStore.subCriteria !== undefined">
                <SelectedSubCriteria :searchStore=searchStore />
            </v-col>
            <v-col cols="1" class="centerVerticalAlign">
                <v-btn @click="toggle" variant="plain" density="compact" slim size="x-large" icon="mdi-filter"/>
            </v-col>
        </v-row>
        <v-row no-gutters v-if="toggleSubSearchPanel">
            <SubCriteriesList :searchStore=searchStore />
        </v-row>
        <v-row no-gutters>
            <SearchResultTable :searchStore=searchStore />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import SearchText from './components/SearchTextField.vue';
import SelectedSubCriteria from './components/SelectedSubCriteria.vue';
import SubCriteriesList from './components/SubCriteriesList.vue';
import SearchResultTable from './components/SearchResultTable.vue';
import { ref } from 'vue';

defineProps(["searchStore"])

let toggleSubSearchPanel = ref<boolean>(false)

function toggle(){
    toggleSubSearchPanel.value = !toggleSubSearchPanel.value
}
</script>

<style scoped>
.container{
    width: 600px;
    max-height: 500px;
}

.centerVerticalAlign{
    align-items: center;
}
</style>