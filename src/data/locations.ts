export interface Location {
  id: number;
  title: string;
  location: string;
  tags: string[];
  mapPosition: { lat: number; lng: number };
  placeId: string;
  reviewLink: string;
  fallbackRating: number;
  fallbackReviews: number;
}

export const locations: Location[] = [
  {
    id: 0,
    title: "Rio Grooming School & Salon",
    location: "Hastings, MN",
    tags: ["Grooming", "Grooming Education", "Self-Service Dog Wash"],
    mapPosition: { lat: 44.76931430798924, lng: -92.86027409156992 },
    placeId: "ChIJ2dFwSnjE94cRbuuDr05qsdY",
    reviewLink: "https://share.google/Xq4grRDGIZQA1PDgY",
    fallbackRating: 4.7,
    fallbackReviews: 222,
  },
  {
    id: 2,
    title: "Wags Stay N' Play",
    location: "Moorhead, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
    mapPosition: { lat: 46.858830071276856, lng: -96.73532188223334 },
    placeId: "ChIJ6a8kayvPyFIRhciVtfJEEX4",
    reviewLink: "https://share.google/jI8uzrZKDaI04Mhwf",
    fallbackRating: 4.4,
    fallbackReviews: 208,
  },
  {
    id: 3,
    title: "Barks & Rec Hastings",
    location: "Hastings, MN",
    tags: ["Daycare", "Boarding"],
    mapPosition: { lat: 44.77103052242032, lng: -92.86014533006993 },
    placeId: "ChIJHzfYrtzF94cRMllruL-MV_8",
    reviewLink: "https://share.google/ah3nfAoXOB3KRBC91",
    fallbackRating: 4.9,
    fallbackReviews: 56,
  },
  {
    id: 4,
    title: "Boxers Bed & Biscuits",
    location: "Belpre, OH",
    tags: ["Daycare", "Boarding", "Grooming", "Vet Care", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    placeId: "ChIJy27-CJFFSIgRACDUK-EE_nw",
    reviewLink: "https://share.google/VhnoBD8ButCcDzenP",
    fallbackRating: 4.6,
    fallbackReviews: 272,
  },
  {
    id: 5,
    title: "Hound Around Resort",
    location: "Cottage Grove, MN",
    tags: ["Daycare", "Boarding", "Grooming"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    placeId: "ChIJTeoLywbQ94cREMxZfRNl9gI",
    reviewLink: "https://share.google/w7ulrOh6TT3b8rjQe",
    fallbackRating: 4.4,
    fallbackReviews: 244,
  },
  {
    id: 6,
    title: "Kingdom Canine",
    location: "Pacific, MO",
    tags: ["Daycare", "Boarding", "Grooming", "Transportation"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    placeId: "ChIJt-S06qMw2YcR4bjiGQtyivE",
    reviewLink: "https://share.google/6dcCwLuO184jHpmeO",
    fallbackRating: 4.5,
    fallbackReviews: 111,
  },
  {
    id: 7,
    title: "Canine Country Club",
    location: "Des Moines, IA",
    tags: ["Daycare", "Boarding", "Grooming", "Training"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    placeId: "ChIJFepP-tqf7ocR5T4OehphhYE",
    reviewLink: "https://share.google/MPURuCqc46Tl0ekuJ",
    fallbackRating: 4.6,
    fallbackReviews: 443,
  },
  {
    id: 8,
    title: "Home Away From Home",
    location: "Fargo, ND",
    tags: ["Daycare", "Boarding", "Grooming", "Mobile Grooming"],
    mapPosition: { lat: 39.274995949370485, lng: -81.58609851878592 },
    placeId: "ChIJa6a-t9Eyz1IR5ceWyQuK0rw",
    reviewLink: "https://share.google/j6XoD5l9APpPL12Y4",
    fallbackRating: 4.6,
    fallbackReviews: 154,
  },
];
