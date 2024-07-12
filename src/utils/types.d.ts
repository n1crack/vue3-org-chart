import type { Ref } from "vue";

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
    $root: Ref<HTMLElement | null>,
    find: (id: string) => INode,
    findChildren: (id: string) => IData,
    root: () => INode,
    rootId: () => string,
    zoomReset: () => void,
    goToHome: (element: HTMLElement|null) => void,
}
