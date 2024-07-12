import type { IData, IDataSetup } from "@/utils/types";
import {onMounted, ref, reactive} from "vue";


export function useData({initialData, json} : IDataSetup) {
    // loading state
    const loading = ref(true);

    // fetched items
    const data = reactive<IData>(initialData);

    const fetchJsonData = async (url: string) => {
        const response = await fetch(url);
        return await response.json();
    };

    onMounted(async () => {
        if (json) {
            Object.assign(data, await fetchJsonData(json))
        }
        loading.value = false;
    });

    return {
        data,
        loading
    }
}
