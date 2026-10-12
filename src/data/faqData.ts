export interface FAQItem {
  question: string;
  answer: string;
  hasLink?: boolean;
  linkText?: string;
  linkHref?: string;
  isExternal?: boolean;
}

export const faqItems: FAQItem[] = [
  {
    question: "What is EchoTech?",
    answer: "EchoTech is a technology company building an interconnected ecosystem of human-centered intelligent software. Our mission is to reduce repetitive cognitive load, preserve human judgment, and bridge the gap between initial thinking and concrete execution."
  },
  {
    question: "What problem does EchoTech solve?",
    answer: "Modern knowledge work is hindered by fragmented tools, noisy communication channels, forgotten meeting decisions, and friction between ideas and action. EchoTech builds unified, human-directed software that transforms unstructured thoughts and conversations into structured execution."
  },
  {
    question: "What is the relationship between EchoTech and EchoNote?",
    answer: "EchoTech is the parent company and software ecosystem creator. EchoNote is EchoTech's flagship live product—an audio intelligence and decision memory workspace that captures conversations and automatically surfaces decisions, action items, and searchable timelines.",
    hasLink: true,
    linkText: "Try EchoNote Live",
    linkHref: "https://echonote-25.vercel.app/",
    isExternal: true
  },
  {
    question: "Which EchoTech products are available today?",
    answer: "EchoNote is a live product accessible right now at https://echonote-25.vercel.app/. EchoOS is also a live product in its execution environment. The remaining products in our pipeline—Thinkoria (in design & architecture), ProtoLens (in design & research), and LifeCapital (in product architecture)—are currently in active development."
  },
  {
    question: "How do the five products in the ecosystem connect?",
    answer: "The ecosystem is organized around a continuous workflow: (1) EchoNote captures conversational context; (2) Thinkoria explores alternative reasoning; (3) ProtoLens validates market feasibility; (4) EchoOS executes approved workflows via agents; and (5) LifeCapital aligns ongoing execution with long-term strategic and capital goals."
  },
  {
    question: "How can I access live products or get in touch for business inquiries?",
    answer: "You can use EchoNote immediately at its live destination. For general inquiries, product conversations, enterprise licensing, or partnerships, you can reach the EchoTech team directly through our Contact page or at riya@echotechai.in.",
    hasLink: true,
    linkText: "Contact EchoTech",
    linkHref: "/contact",
    isExternal: false
  }
];
