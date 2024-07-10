import {onMounted, provide, ref} from "vue";
import panzoom from "panzoom";

export function usePanzoom() {
    // panzoom instance
    const instance = ref();
    const scene = ref(null);
    const container = ref(null);

    // set panzoom instance
    function setInstance() {
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
