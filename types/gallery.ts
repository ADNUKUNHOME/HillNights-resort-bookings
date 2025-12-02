export type GalleryCategory = "Interiors" | "Exteriors" | "Pool" | "Dining" | "Virtual";

export interface GalleryImage {
    id: number;
    title: string;
    category: GalleryCategory;
    src: string;
    thumb?: string;
    alt?: string;
    is360?: boolean;
}
