export interface SideBarSectionModel {
    sectionTitle?: string;
    items: SidebarItemModel[];
}

export interface SidebarItemModel {
    title?: string;
    link?: string;
    icon?: string;
    children?: SidebarItemModel[];
    isExpanded?: boolean;
    isEnabled: boolean;
}