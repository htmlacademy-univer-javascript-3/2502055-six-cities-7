export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: CityLocation;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferType = 'Apartment' | 'Room' | 'House' | 'Hotel';

export type OfferData = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: CityLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type OfferPreview = OfferData & {
  previewImage: string;
};
