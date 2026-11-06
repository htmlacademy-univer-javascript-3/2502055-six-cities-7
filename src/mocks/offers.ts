import type { OfferPreview } from '@/types/offer';

export const OFFERS: OfferPreview[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 11,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/apartment-01.jpg',
  },
  {
    id: '8c1b1f56-2b1b-4f9a-9d5e-0f1e3a5b7c10',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 11,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.0,
    previewImage: '/img/room.jpg',
  },
  {
    id: '3f2a8c9d-7e6b-4c1a-8f5d-2b3c4d5e6f70',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 11,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: 'b5e4d3c2-a1b0-4f9e-8d7c-6b5a4f3e2d10',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 11,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5.0,
    previewImage: '/img/apartment-03.jpg',
  },
];
