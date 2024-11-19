import { defineStore } from "pinia"
import { ref, watch } from "vue"
import { boat } from "../models/boat"
import { search, subCriteriesList } from "../services/boatsService"
export const useSearchStore = (uniqueStoreName: string) => {
    return defineStore(uniqueStoreName, () => {
        const searchCriteria = ref<string>()
        const subCriteria = ref<string>()
        const searchResult = ref<boat[]>()

        const subCriteries = subCriteriesList

        watch(searchCriteria, async () => {
            searchResult.value = await search(searchCriteria.value!, subCriteria.value!);
        });

        watch(subCriteria, async () => {
            searchResult.value = await search(searchCriteria.value!, subCriteria.value!);
        });

        return { searchCriteria, subCriteria, subCriteries, searchResult }
    })();
}