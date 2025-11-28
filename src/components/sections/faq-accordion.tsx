"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    id: "item-1",
    question: "What is the legacy of Cycle?",
    answer: "Established in 1948, Cycle Pure Agarbathi has been with India’s prayers since the time of independence. Trusted by millions, Cycle has a presence in over 75 countries, making it a global name in luxury incense and prayer essentials.",
  },
  {
    id: "item-2",
    question: "What products does Cycle offer?",
    answer: "Cycle offers a wide range of products, including incense sticks, dhoop cones, sambrani cups, puja kits, puja accessories, home essentials and home fragrances. The offerings cater to spiritual needs, celebrations, and everyday aromatic experiences.",
  },
  {
    id: "item-3",
    question: "Are Cycle products pure and eco-friendly?",
    answer: "Every product at Cycle is made with pure ingredients that are sourced ethically and sustainably. The fragrances are original and created by the experience and expertise of three generations of perfumers. Cycle is committed to sustainability. We love our planet as much as we love what we do, and hence, we are also the world’s first certified carbon-neutral incense manufacturer. All are packaging is recyclable and we also plant sacred native trees!",
  },
  {
    id: "item-4",
    question: "How can I find the right product for my needs?",
    answer: "Cycle provides detailed descriptions and filters for all its products. You can shop based on usage (daily rituals, celebrations) or specific preferences like fragrance, burn time, and size.",
  },
  {
    id: "item-5",
    question: "Does Cycle provide complete puja kits?",
    answer: "Yes, Cycle offers comprehensive puja kits tailored for specific occasions. These kits contain all essential items for a traditional puja with detailed instructions to perform the rituals.",
  },
  {
    id: "item-6",
    question: "Does Cycle offer exclusive or premium products?",
    answer: "Yes, Cycle features luxury incense collections designed for unique aromatic experiences. We also offer a specially curated premium gifting range, perfect for treating yourself or delighting your loved ones!",
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-semibold text-primary">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-border">
              <AccordionTrigger className="group py-6 text-left text-lg font-medium text-text-primary hover:no-underline [&>svg]:hidden">
                <div className="flex w-full items-center justify-start gap-x-5">
                  <Plus className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 group-data-[state=open]:hidden" />
                  <Minus className="hidden h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 group-data-[state=open]:block" />
                  <span className="flex-1 text-left">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-[#f3f1ff] pl-10 pr-4 pt-2 pb-5">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;