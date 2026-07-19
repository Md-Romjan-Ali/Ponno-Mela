import { Button, Card } from "@heroui/react";
import { FiGift } from "react-icons/fi";
import { RiFileAiFill } from "react-icons/ri";

export function AboutUs() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">About Ponno-Mel</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        A modern grocery destination rooted in quality, trust, and thoughtful presentation.
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Ponno-Mel blends curated artisan goods with premium pantry essentials, so shoppers can enjoy a seamless, stylish experience every time.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button variant="primary" size="lg" className="rounded-full px-7 py-3.5">
                            Explore Collections
                        </Button>
                        <Button variant="secondary" size="lg" className="rounded-full px-7 py-3.5">
                            Learn More
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    <Card className="rounded-[2rem] border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-500">
                            <FiGift className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-slate-950">Curated Gift Sets</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Thoughtful artisan bundles designed to impress with premium packaging and quality ingredients.
                        </p>
                    </Card>
                    <Card className="rounded-[2rem] border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500">
                            <RiFileAiFill className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-slate-950">Thoughtfully Sourced</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            We source ingredients and pantry items from trusted makers, with a focus on freshness and premium taste.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
