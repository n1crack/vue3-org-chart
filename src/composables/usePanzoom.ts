import {onMounted, ref} from "vue";
import panzoom from "panzoom";

export function usePanzoom() {
    // panzoom instance
    const instance = ref();
    const scene = ref<HTMLElement | null>(null);
    const container = ref<HTMLElement | null>(null);

    // set panzoom instance
    function setInstance() {
        if (!scene.value) {
            return;
        }
        instance.value = panzoom(scene.value, {
            zoomDoubleClickSpeed: 1.4,
            maxZoom: 5,
            minZoom: 0.1,
            initialZoom: 1,
            bounds: false,
        });
    }

    // initialize panzoom instance, if not already set
    onMounted(() => {
        if (!instance.value) {
            setInstance();
        }
    });

    return {
        scene,
        container,
        instance,
    }
}
