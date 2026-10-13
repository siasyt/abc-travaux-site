// =========================================================
// 图集图片列表（对应 PDF 第 14–18 页）
// 新增图片：放到 public/images/gallery/，按编号命名，再把下面对应的数量 +1
// =========================================================

export type GalleryCategory = "retail" | "resto" | "bar";

export interface GalleryImage {
    src: string;
    category: GalleryCategory;
}

function build(
    prefix: string,
    count: number,
    category: GalleryCategory,
    exclude: number[] = []
): GalleryImage[] {
    return Array.from({ length: count }, (_, i) => i + 1)
        .filter((n) => !exclude.includes(n))
        .map((n) => ({
            src: `/images/gallery/${prefix}-${String(n).padStart(2, "0")}.webp`,
            category,
        }));
}

export const gallery: GalleryImage[] = [
    ...build("retail", 43, "retail", [33]), // 33 = POP MART Logo，不放进图集
    ...build("resto", 21, "resto", [10, 17]), // 10、17 = 细长条截图
    ...build("bar-cafe", 13, "bar"),
];