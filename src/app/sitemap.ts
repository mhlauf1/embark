import { MetadataRoute } from "next";

export default async function siteMap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date().toISOString();

    return [
        {
            url: "https://www.embarkpetservices.com",
            lastModified: currentDate,
            changeFrequency: "weekly",
            priority: 1.0
        },
        {
            url: "https://www.embarkpetservices.com/about",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.embarkpetservices.com/services",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.embarkpetservices.com/network",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://www.embarkpetservices.com/partner-with-us",
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.8
        }
    ]
}