import { locations, type Location } from "@/data/locations";

export interface LocationWithRating extends Location {
  rating: number;
  reviews: number;
}

async function fetchPlaceRating(
  placeId: string
): Promise<{ rating: number; reviews: number } | null> {
  if (!placeId) return null;

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) return null;

    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
    };

    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") {
      return null;
    }

    return { rating: data.rating, reviews: data.userRatingCount };
  } catch {
    return null;
  }
}

export async function getLocationsWithRatings(): Promise<LocationWithRating[]> {
  return Promise.all(
    locations.map(async (loc) => {
      const live = await fetchPlaceRating(loc.placeId);
      return {
        ...loc,
        rating: live?.rating ?? loc.fallbackRating,
        reviews: live?.reviews ?? loc.fallbackReviews,
      };
    })
  );
}
