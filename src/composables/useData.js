import {onMounted, ref, reactive} from "vue";

export function useData({initialData, json}) {
    // loading state
    const loading = ref(true);

    // fetched items
    const data = reactive(initialData);

    const fetchJsonData = async (url) => {
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
