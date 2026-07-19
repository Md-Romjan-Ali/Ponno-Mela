import { Card } from "@heroui/react";
import { FiCheckCircle, FiShield, FiTruck, FiWatch } from "react-icons/fi";

const advantages = [
    {
        title: "Fast Delivery",
        description: "Fresh groceries and premium pantry picks delivered quickly with trusted service.",
        icon: FiTruck,
        color: "bg-sky-500/10 text-sky-500",
    },
    {
        title: "Secure Payment",
        description: "Encrypted checkout and trusted payment gateways keep every order safe and seamless.",
        icon: FiShield,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Premium Quality",
        description: "Curated local goods, organic produce, and gourmet pantry essentials in every order.",
        icon: FiCheckCircle,
        color: "bg-amber-500/10 text-amber-500",
    },
    {
        title: "24/7 Support",
        description: "Responsive customer care with order guidance, delivery updates, and after-sale support.",
        icon: FiWatch,
        color: "bg-violet-500/10 text-violet-500",
    },
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Why Choose Us</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    The thoughtful advantages that make Ponno-Mel stand out.
                </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {advantages.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Card
                            key={item.title}
                            className="rounded-[2rem] border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.color}`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
