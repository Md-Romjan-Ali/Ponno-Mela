"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { heroSlides } from "@/data/heroSlides";
import { Button } from "@heroui/react";

export function HeroSection() {
    return (
        <section id="home" className="relative overflow-hidden pt-6">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative h-[600px] min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/10 shadow-2xl shadow-slate-950/20 sm:h-[760px]">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        loop
                        autoplay={{ delay: 5500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation
                        className="h-full"
                    >
                        {heroSlides.map((slide) => (
                            <SwiperSlide key={slide.title} className="relative h-full">
                                <div className="absolute inset-0">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/60" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute inset-0 z-10 flex items-center">
                        <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6 py-16 sm:px-10 lg:px-14 xl:py-24">
                            <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-12">
                                <span className="inline-flex rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">
                                    Marketplace for artisan goods
                                </span>
                                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                                    Ponno-Mel brings premium pantry essentials to your doorstep.
                                </h1>
                                <p className="mt-5 text-lg leading-8 text-slate-200/90 sm:text-xl">
                                    Explore curated groceries, fresh finds, and handcrafted gifts with polished service and modern convenience.
                                </p>
                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <Button variant="primary" size="lg" className="rounded-full px-7 py-3.5">
                                        Shop Now
                                    </Button>
                                    <a
                                        href="#products"
                                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
                                    >
                                        Browse Featured
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
