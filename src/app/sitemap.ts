import { MetadataRoute } from "next";

export default async function siteMap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: "https://www.embarkpetservices.com//about"
        },
        {
            url: "https://www.embarkpetservices.com/services"
        },
        {
            url: "https://www.embarkpetservices.com/network"
        },
        {
            url: "https://www.embarkpetservices.com/partner-with-us"
        },
        {
            url: "https://www.embarkpetservices.com/"
        },
    ]
}