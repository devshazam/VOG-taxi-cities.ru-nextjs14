import { SiteConfig, ContactConfig } from "@/types"


 // TODO >> baseUrl
const baseUrl = "https://vog-taxi2-next-js.vercel.app"

export const siteConfig: SiteConfig = {
  name: "Такси Межгород 24/7 по России + новые территории",
  author: "devshazam",
  description:
    "Такси Межгород 24/7 по России + новые территории. Всегда новые и комфортные машины, всегда пунктуальное и бережное обслуживание!",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "Landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://github.com/devshazam",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "devshazam@gmail.com",
}
