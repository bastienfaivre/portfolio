export interface WebPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  author?: {
    "@type": string;
    name: string;
  };
  publisher?: {
    "@type": string;
    name: string;
  };
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function createWebPageSchema(
  name: string,
  description: string,
  url: string
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    author: {
      "@type": "Person",
      name: "Bastien Faivre",
    },
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}
