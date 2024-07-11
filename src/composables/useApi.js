import {reactive, ref} from "vue";

export function useApi(panzoomInstance, data, container, scene) {
    // root node element
    const $root = ref(null);
    const homePosition = reactive({x: 0, y: 40})

    // find item by id
    function find(id) {
        return data.find((item) => item.id === id);
    }

    function findChildren(id){
        return data.filter((item) => item.parentId === id);
    }

    // get the root item
    function root() {
        return data.find((item) => item.parentId === "" || !item.parentId);
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

    function sceneCurrentPos(){
        const xys = panzoomInstance.value.getTransform();
        const rect = container.value.getBoundingClientRect();
        const sceneRect = scene.value.getBoundingClientRect();

        const posX = sceneRect.x - rect.x;
        const posY = sceneRect.y- rect.y;
        const x = posX + sceneRect.width / 2;
        const y = posY + sceneRect.height / 2;
        return {x, y, scale: xys.scale};
    }

    function goToHome(element) {
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
      const { x, y, scale } = sceneCurrentPos();

      panzoomInstance.value.smoothZoomAbs(x, y, (scale * 3) / 2);
    }

    function zoomOut() {
      const { x, y, scale } = sceneCurrentPos();

      panzoomInstance.value.smoothZoomAbs(x, y, (scale * 2) / 3);
    }

    function collapseAll() {
        data.forEach((item) => {
            item.__show = false;
        });
    }

    function expandAll() {
        data.forEach((item) => {
            item.__show = true;
        });
    }

    return {
        zoomReset,
        zoomIn,
        zoomOut,
        expandAll,
        collapseAll,
        $root,
        root,
        rootId,
        find,
        findChildren,
        goToHome
    }
}
