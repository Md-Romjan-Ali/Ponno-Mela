import { Accordion } from "@heroui/react";
import { faqs } from "@/data/faqs";

export function FAQ() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Frequently Asked Questions</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Answers to the most common questions from our customers.
                </h2>
            </div>

            <div className="mt-12">
                <Accordion.Root type="single" collapsible className="space-y-4">
                    {faqs.map((item, index) => (
                        <Accordion.Item key={item.question} value={`faq-${index}`} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-slate-950 transition hover:bg-slate-50 focus:outline-none">
                                {item.question}
                            </Accordion.Trigger>
                            <Accordion.Panel className="border-t border-slate-200 bg-slate-50 px-6 py-5 text-sm leading-7 text-slate-600">
                                {item.answer}
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section>
    );
}
