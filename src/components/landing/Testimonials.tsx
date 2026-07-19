import { Card } from "@heroui/react";
import { HiStar } from "react-icons/hi";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
    return (
        <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                        Customer Stories
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Trusted by shoppers who want premium local groceries and gifts.
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <Card key={item.id} className="overflow-hidden border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/20">
                            <div className="p-6">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-white">{item.name}</p>
                                        <p className="text-sm text-slate-300">{item.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center gap-1 text-amber-400">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <HiStar key={index} className="h-4 w-4" />
                                    ))}
                                </div>
                                <p className="mt-6 text-slate-300">“{item.review}”</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
