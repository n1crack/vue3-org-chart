import type {Ref} from "vue";

export interface IProps {
    data?: IData,
    json?: string
}

export interface INode {
    id: string
    parentId?: string,
    __open?: boolean
}

export type IData = Array<INode>;

export interface IDataSetup {
    initialData: IData,
    json?: string
}

export interface IApi {
    zoomReset: () => void,
    zoomIn: () => void,
    zoomOut: () => void,
    expandAll: () => void,
    collapseAll: () => void,
    $root: Ref<HTMLElement | null>,
    root: () => INode,
    rootId: () => string,
    find: (id: string) => INode,
    findChildren: (id: string) => IData,
    goToHome: (element: HTMLElement | null) => void,
}

export interface INodeScopeParams {
    item: INode,
    children: IData,
    open: boolean,
    toggleChildren: () => void
}
