import type { IData, INode } from "@/utils/types";
import type { PanZoom } from "panzoom";
import {reactive, ref} from "vue";
import type { Ref } from 'vue'


export function useApi(panzoomInstance: Ref<PanZoom>, data: IData, container: Ref<HTMLElement|null>, scene: Ref<HTMLElement|null>) {
    // root node element
    const $root = ref<HTMLElement | null>(null);
    const homePosition = reactive({x: 0, y: 40})

    // find node by id
    function find(id: string) {
        const node = data.find((node : INode) => node.id === id);
        if (!node) {
            throw new Error(`Node with id ${id} not found`);
        }
        return node;
    }

    function findChildren(id: string){
        return data.filter((node: INode) => node.parentId === id);
    }

    // get the root node
    function root() {
        const root = data.find((node: INode) => node.parentId === "" || !node.parentId);
        if (!root) {
            throw new Error(`Root node not found`);
        }
        return root;
    }

    // get the root id
    function rootId() {
        return root()?.id;
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
        const rect = container.value?.getBoundingClientRect();
        const sceneRect = scene.value?.getBoundingClientRect();

        if (!rect || !sceneRect) {
            return {...homePosition, scale: 1};
        };

        const posX = sceneRect.x - rect.x;
        const posY = sceneRect.y- rect.y;
        const x = posX + sceneRect.width / 2;
        const y = posY + sceneRect.height / 2;
        
        return {x, y, scale: xys.scale};
    }

    function goToHome(element: HTMLElement|null) {
        const rect = container.value?.getBoundingClientRect();
        if (!rect || !element) {
            return
        };
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
        data.forEach((node: INode) => {
            node.__hidden = false;
        });
    }

    function expandAll() {
        data.forEach((node: INode) => {
            node.__hidden = true;
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
