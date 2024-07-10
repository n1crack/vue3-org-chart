import {onMounted, reactive, ref} from "vue";

export function useApi(panzoomInstance, data, container) {
    // root node element
    const $root = ref(null);
    const homePosition = reactive({x: 0, y: 40})

    // find item by id
    function find(id) {
        return data.value.find((item) => item.id === id);
    }

    // get the root item
    function root() {
        return data.value.find((item) => item.parentId === "" || !item.parentId);
    }

    // get the root id
    function rootId() {
        return root().id;
    }

    // resets the panzoomInstance position 0,0 and scale 1
    function zoomReset() {
        // goToHome($root.value,)

        const xys = panzoomInstance.value.getTransform()
        const fixeX = 0
        const fixeY = 32
        if (xys.scale !== 1) { // calculate the point that should not move
            const fScale = 1 - xys.scale
            const fixeX = xys.x / fScale
            const fixeY = xys.y / fScale
            panzoomInstance.value.smoothZoomAbs(fixeX, fixeY, 1)
        } else {
            panzoomInstance.value.smoothMoveTo(fixeX, fixeY)
        }
    }

    // center the node in the container
    function goToHome(element) {
        // get canvas rectangle with absolute position of element
        const rect = container.value.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const containerCenterX = rect.x + rect.width / 2 + homePosition.x;
        const containerCenterY = rect.y + homePosition.y;

        const elementCenterX = elementRect.x + elementRect.width / 2;
        const elementCenterY = elementRect.y;

        const dx = containerCenterX - elementCenterX;
        const dy = containerCenterY - elementCenterY;

        panzoomInstance.value.moveBy(dx, dy, true);
    }

    function zoomIn() {
        const xys = panzoomInstance.value.getTransform();
        const rect = container.value.getBoundingClientRect();
        panzoomInstance.value.zoomTo(rect.width / 2, xys.y, 2/3)
    }

    function zoomOut() {
        const xys = panzoomInstance.value.getTransform();
        const rect = container.value.getBoundingClientRect();
        panzoomInstance.value.zoomTo(rect.width / 2, xys.y, 3/2)
    }


    return {
        zoomReset,
        zoomIn,
        zoomOut,
        $root,
        root,
        rootId,
        find,
        goToHome
    }
}
