export interface SidebarItemModel {
    title?: string;
    sectionTitle?: string;
    link?: string;
    icon?: string;
    children?: SidebarItemModel[];
    isExpanded?: boolean;
}
