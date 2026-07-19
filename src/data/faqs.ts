export interface FAQItem {
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        question: "What delivery options are available?",
        answer:
            "We offer same-day pickup, standard home delivery, and express delivery for premium items within select zones.",
    },
    {
        question: "Can I track my order in real time?",
        answer:
            "Yes. After checkout, you will receive a tracking link with live status updates and delivery windows.",
    },
    {
        question: "Do you offer gift wrapping and curated bundles?",
        answer:
            "Absolutely. Add premium gift wrapping at checkout and explore curated collections for every occasion.",
    },
    {
        question: "What is your return policy?",
        answer:
            "Fresh and perishables may be replaced or refunded within 24 hours of delivery if they do not arrive in excellent condition.",
    },
];
