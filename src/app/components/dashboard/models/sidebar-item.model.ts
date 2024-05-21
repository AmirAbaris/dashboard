export interface SidebarItemModel {
    title?: string;
    link?: string;
    icon?: string;
    children?: SidebarItemModel[];
    isExpanded?: boolean;
}
