export interface HeroSlide {
    title: string;
    description: string;
    image: string;
    accent: string;
}

export const heroSlides: HeroSlide[] = [
    {
        title: "Summer Harvest Essentials",
        description:
            "Discover premium organic produce, specialty groceries, and curated bundles for fresh home dining.",
        image:
            "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1400&q=80",
        accent: "Farm fresh flavors delivered fast.",
    },
    {
        title: "Sweet Local Honey Gifts",
        description:
            "Shop artisanal honey, wellness bundles, and handcrafted favorites designed for modern kitchens.",
        image:
            "https://images.unsplash.com/photo-1516728778615-2d590ea1856f?auto=format&fit=crop&w=1400&q=80",
        accent: "Pure, polished, and perfectly packaged.",
    },
    {
        title: "Rustic Pantry Picks",
        description:
            "Elevate home meals with premium staples, chef-ready spice blends, and crowd-loved pantry essentials.",
        image:
            "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&q=80",
        accent: "Crafted for every table and taste.",
    },
];
