import {onMounted, ref, defineEmits} from "vue";

export function useData({initialData, json}) {
    // loading state
    const loading = ref(true);

    // fetched items
    const data = ref(initialData);

    const fetchJsonData = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    onMounted(async () => {
        if (json) {
            data.value = await fetchJsonData(json);
        }
        loading.value = false;
    });

    return {
        data,
        loading
    }
}
