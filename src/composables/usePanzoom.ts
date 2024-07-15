import {onMounted, type Ref, ref} from "vue";
import panzoom from "panzoom";
import type {PanZoom} from "panzoom";
import type {IPanzoom} from "@/utils/types";

export function usePanzoom(): IPanzoom {
    // panzoom instance
    let instance = ref() as unknown as Ref<PanZoom>;
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
            minZoom: 0.02,
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
        instance,
        container,
        scene,
    }
}
