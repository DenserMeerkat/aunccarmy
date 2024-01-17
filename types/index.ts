export type NavItem = {
    title: string;
    name: string;
    href: string;
    description?: string;
} 

export type MainNavItem = {
    title: string;
    name: string;
    href: string;
    children?: NavItem[];
};

