export interface Testimonial {
    id: string;
    name: string;
    role: string;
    review: string;
    rating: number;
    image: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "maya",
        name: "Maya Das",
        role: "Home Chef",
        review:
            "Ponno-Mel’s selection is beautiful, fresh, and reliably fast. Every order feels premium from the first glance.",
        rating: 5,
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "rajesh",
        name: "Rajesh Sen",
        role: "Food Blogger",
        review:
            "The product curation is excellent. I love the modern packaging and seamless experience on every device.",
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: "anya",
        name: "Anya Roy",
        role: "Gift Curator",
        review:
            "Perfect for gifting and home staples alike. The About section inspired me to order a full pantry set.",
        rating: 4.9,
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
];
