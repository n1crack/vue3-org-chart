export function useApi(panzoomInstance, data) {
    // get the root item
    function getRoot() {
        return data.value.find((item) => item.parentId === "" || !item.parentId);
    }

    // get the root id
    function getRootId() {
        return getRoot().id;
    }

    // resets the panzoomInstance position 0,0 and scale 1
    function reset() {
        const xys = panzoomInstance.value.getTransform()
        const fixeX = 0
        const fixeY = 0
        if (xys.scale !== 1) { // calculate the point that should not move
            const fScale = 1 - xys.scale
            const fixeX = xys.x / fScale
            const fixeY = xys.y / fScale
            panzoomInstance.value.smoothZoomAbs(fixeX, fixeY, 1)
        } else {
            panzoomInstance.value.smoothMoveTo(fixeX, fixeY)
        }
    }

    return {
        reset,
        getRoot,
        getRootId
    }
}
