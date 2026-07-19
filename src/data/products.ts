export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    rating: number;
    status: "In Stock" | "Out of Stock";
    image: string;
    shortDescription: string;
    description: string;
    highlights: string[];
}

export const allProducts: Product[] = [
    {
        id: "honey-drizzle",
        name: "Golden Field Honey",
        category: "Grocery",
        price: "$24.00",
        rating: 4.9,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Pure floral honey sourced from local farms for an all-natural pantry staple.",
        description:
            "This premium honey is carefully harvested for a smooth, rich texture and bright floral notes. Ideal for tea, toast, and gourmet recipes.",
        highlights: ["Raw and unfiltered", "100% natural origin", "Perfect for gifting"],
    },
    {
        id: "spice-kit",
        name: "Signature Spice Set",
        category: "Pantry",
        price: "$32.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f6b7?auto=format&fit=crop&w=900&q=80",
        shortDescription: "A curated collection of chef-approved spices for every kitchen.",
        description:
            "Discover handcrafted blends and premium single-origin spices to elevate home cooking with balanced aroma and depth.",
        highlights: ["Hand-selected blends", "Reusable glass jars", "Rich fragrance"],
    },
    {
        id: "artisan-jam",
        name: "Berry Preserve Jar",
        category: "Jams",
        price: "$18.00",
        rating: 4.8,
        status: "Out of Stock",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Sweet berry preserves made with slow-cooked fruit and artisan techniques.",
        description:
            "Crafted from ripe berries and a touch of citrus, this preserve delivers vibrant flavor and a luxurious texture for toast and desserts.",
        highlights: ["Small-batch crafted", "No artificial preservatives", "Rich, fruity flavor"],
    },
    {
        id: "tea-collection",
        name: "Herbal Tea Trio",
        category: "Beverages",
        price: "$28.00",
        rating: 4.9,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
        shortDescription: "A calming tea selection with floral, citrus, and earthy blends.",
        description:
            "Each blend is tailored for relaxing mornings and cozy evenings, using premium herbs and whole-leaf ingredients.",
        highlights: ["Relaxing blends", "Premium whole leaves", "Perfect for gifting"],
    },
    {
        id: "olive-orchard",
        name: "Cold-Pressed Olive Oil",
        category: "Oils",
        price: "$38.00",
        rating: 4.8,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Extra virgin olive oil with bright herbaceous notes and a silky finish.",
        description:
            "Pressed from freshly harvested olives, this oil is perfect for dressings, marinades, and finishing dishes with a refined touch.",
        highlights: ["High antioxidant content", "Pressed within hours", "Rich golden color"],
    },
    {
        id: "granola-chic",
        name: "Maple Almond Granola",
        category: "Breakfast",
        price: "$22.00",
        rating: 4.6,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Crisp granola with roasted almonds, oats, and sweet maple glaze.",
        description:
            "A crunchy breakfast staple made with whole ingredients and a balanced sweetness, ideal with yogurt or milk.",
        highlights: ["High-fiber oats", "Toasted nuts", "Maple-sweet finish"],
    },
    {
        id: "cocoa-divine",
        name: "Dark Chocolate Bar",
        category: "Snacks",
        price: "$12.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
        shortDescription: "70% dark chocolate crafted for bold but balanced cacao flavor.",
        description:
            "A deeply satisfying chocolate bar with velvety texture and notes of berry and roasted cocoa beans.",
        highlights: ["70% cacao", "Smooth finish", "Premium dark chocolate"],
    },
    {
        id: "coffee-roast",
        name: "Fresh Roast Coffee",
        category: "Beverages",
        price: "$26.00",
        rating: 4.8,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Medium roast coffee with caramel sweetness and bright citrus notes.",
        description:
            "Roasted in small batches for a smooth, aromatic cup that highlights rich, well-rounded flavor.",
        highlights: ["Small-batch roasted", "Balanced acidity", "Perfect for espresso or drip"],
    },
    {
        id: "rice-heirloom",
        name: "Heirloom Basmati Rice",
        category: "Grains",
        price: "$19.00",
        rating: 4.5,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Aromatic long-grain rice with delicate texture and fragrant aroma.",
        description:
            "This heirloom basmati is perfect for pilafs, biryanis, and elegant side dishes with fluffy grains.",
        highlights: ["Aromatic scent", "Light fluffy texture", "Traditionally aged"],
    },
    {
        id: "fruit-essence",
        name: "Dried Fruit Medley",
        category: "Snacks",
        price: "$20.00",
        rating: 4.6,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1514516870920-7fdfd3bf0464?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Sweet and chewy dried fruit mix with apricots, figs, and mango.",
        description:
            "A nutritious snack blend that pairs well with cheese boards, yogurt bowls, and travel-ready treats.",
        highlights: ["Naturally sweet", "No added sugar", "Perfect for snacking"],
    },
    {
        id: "cracker-craft",
        name: "Artisan Seed Crackers",
        category: "Snacks",
        price: "$15.00",
        rating: 4.4,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1516684669134-de6ec5e769d2?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Crispy crackers baked with seeds, grains, and savory spices.",
        description:
            "These crackers offer a satisfying crunch and versatile flavor for spreads, cheeses, and charcuterie.",
        highlights: ["Seed-rich", "Lightly salted", "Perfect with dips"],
    },
    {
        id: "marmalade-gold",
        name: "Citrus Marmalade",
        category: "Jams",
        price: "$17.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Bright citrus marmalade with zesty peel and smooth sweetness.",
        description:
            "Handcrafted from premium citrus to bring lively flavor and a refined spreadable texture to mornings.",
        highlights: ["Zesty citrus", "Smooth texture", "Small-batch made"],
    },
    {
        id: "syrup-blend",
        name: "Rose & Cardamom Syrup",
        category: "Pantry",
        price: "$21.00",
        rating: 4.8,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1521301515968-f1a4e6b38af4?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Floral syrup ideal for cocktails, tea, and dessert drizzles.",
        description:
            "This syrup blends rose fragrance and warm cardamom notes for sophisticated flavor in drinks and baking.",
        highlights: ["Floral & warm", "Gourmet flavor", "Cocktail-ready"],
    },
    {
        id: "butter-farmhouse",
        name: "Cultured Butter",
        category: "Dairy",
        price: "$14.00",
        rating: 4.9,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1512187849-8c2bd7e1d226?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Rich cultured butter with a creamy finish and delicate tang.",
        description:
            "Made from cultured cream, this butter enhances baking, spreading, and gourmet cooking with luxurious texture.",
        highlights: ["Cultured cream", "Velvety texture", "Elegant aroma"],
    },
    {
        id: "seed-boost",
        name: "Superseed Mix",
        category: "Health",
        price: "$16.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1523475496153-3d6ccce3cb70?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Nutrient-packed seed blend for oatmeal, salads, and smoothies.",
        description:
            "A blend of chia, flax, pumpkin, and sunflower seeds that adds crunch, protein, and fiber to everyday meals.",
        highlights: ["Omega-rich", "High fiber", "Crunchy texture"],
    },
    {
        id: "sourdough-starter",
        name: "Starter Kit",
        category: "Baking",
        price: "$29.00",
        rating: 4.5,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Artisan sourdough starter kit for home bread bakers.",
        description:
            "Everything needed to nurture a living starter and bake flavorful sourdough loaves at home.",
        highlights: ["Easy-to-follow kit", "Artisan quality", "Long-lasting"],
    },
    {
        id: "turmeric-latte",
        name: "Golden Latte Mix",
        category: "Beverages",
        price: "$20.00",
        rating: 4.6,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Spiced turmeric latte blend with warming ginger and cinnamon.",
        description:
            "A creamy, wellness-inspired mix for rich turmeric lattes with a comforting aromatic profile.",
        highlights: ["Warming spices", "Creamy texture", "Wellness blend"],
    },
    {
        id: "coconut-sugar",
        name: "Coconut Sugar",
        category: "Pantry",
        price: "$12.00",
        rating: 4.5,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Naturally sweet coconut sugar with caramel notes.",
        description:
            "A low-glycemic alternative sweetener that works beautifully in baking, beverages, and sauces.",
        highlights: ["Naturally derived", "Low glycemic index", "Soft caramel flavor"],
    },
    {
        id: "almond-butter",
        name: "Creamy Almond Butter",
        category: "Spreads",
        price: "$26.00",
        rating: 4.8,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Smooth almond butter with subtle roasted flavor.",
        description:
            "Made from dry-roasted almonds and a pinch of sea salt for a silky spread perfect on toast and smoothies.",
        highlights: ["Roasted almonds", "No preservatives", "Silky texture"],
    },
    {
        id: "floral-tea",
        name: "Chamomile Blossom Tea",
        category: "Beverages",
        price: "$19.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Gentle chamomile tea with calming floral aroma.",
        description:
            "A soothing tea blend made for restful evenings and a calm moment of relaxation.",
        highlights: ["Soothing floral notes", "Caffeine-free", "Premium blossoms"],
    },
    {
        id: "berry-compote",
        name: "Berry Compote",
        category: "Dessert",
        price: "$18.00",
        rating: 4.6,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1515488042911-4f20d6aa1b2e?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Sweet berry compote ready for cheese plates and desserts.",
        description:
            "This compote brings juicy berry sweetness to breakfast bowls, pastries, and cheese board spreads.",
        highlights: ["Versatile topping", "Rich berry flavor", "Ready-to-serve"],
    },
    {
        id: "vinegar-rare",
        name: "Aged Balsamic Vinegar",
        category: "Condiments",
        price: "$34.00",
        rating: 4.9,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Rich, syrupy balsamic vinegar with deep fruit notes.",
        description:
            "Aged for years in wooden barrels, this vinegar adds depth and sophistication to dressings and finishing dishes.",
        highlights: ["Long-aged", "Velvety texture", "Complex flavor"],
    },
    {
        id: "espresso-premium",
        name: "Italian Espresso Blend",
        category: "Beverages",
        price: "$27.00",
        rating: 4.8,
        status: "Out of Stock",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Full-bodied espresso blend with rich crema and bold roast.",
        description:
            "Designed for espresso lovers who seek bold flavor, smooth crema, and an aromatic café-quality cup.",
        highlights: ["Bold roast", "Perfect crema", "Café-style"],
    },
    {
        id: "peanut-brittle",
        name: "Salted Peanut Brittle",
        category: "Snacks",
        price: "$14.00",
        rating: 4.6,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1505253211350-5c1b722d863a?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Crunchy peanut brittle with sea salt and caramelized sugar.",
        description:
            "A nostalgic treat crafted with roasted peanuts and crisp candy for sweet-and-salty satisfaction.",
        highlights: ["Bold peanut flavor", "Sea salt finish", "Crunchy texture"],
    },
    {
        id: "chia-pudding",
        name: "Vanilla Chia Pudding",
        category: "Breakfast",
        price: "$16.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Creamy chia pudding mix with vanilla bean and coconut milk notes.",
        description:
            "This ready-mix breakfast offers a nutritious, easy-to-prepare base with smooth vanilla flavor.",
        highlights: ["High protein", "Creamy texture", "Vanilla bean"],
    },
    {
        id: "quinoa-blend",
        name: "Tri-Color Quinoa",
        category: "Grains",
        price: "$21.00",
        rating: 4.5,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1512058564366-c9e1f8e976b6?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Nutty tri-color quinoa for salads, bowls, and side dishes.",
        description:
            "A premium blend of white, red, and black quinoa for visually stunning and protein-rich meals.",
        highlights: ["Protein-rich", "Colorful blend", "Versatile grain"],
    },
    {
        id: "preserved-lemons",
        name: "Preserved Lemon Jar",
        category: "Condiments",
        price: "$18.00",
        rating: 4.7,
        status: "In Stock",
        image:
            "https://images.unsplash.com/photo-1518057111178-6f04443f4531?auto=format&fit=crop&w=900&q=80",
        shortDescription: "Tangy preserved lemons for bright Mediterranean-inspired dishes.",
        description:
            "A flavorful condiment that adds citrus depth to tagines, salads, and roasted vegetables.",
        highlights: ["Tangy citrus notes", "Ready to use", "Ideal for Mediterranean cooking"],
    },
];

export const featuredProducts: Product[] = allProducts.slice(0, 4);

export function getProductById(id: string) {
    return allProducts.find((product) => product.id === id);
}
