import type { Comment } from '@/types/comment';

export const COMMENTS: Comment[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Bib Bob',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
  {
    id: 'f3b7e81a-2b1b-4f9a-9d5e-7c6b5a4f3e2d',
    date: '2019-06-15T10:20:00.000Z',
    user: {
      name: 'Boom Bap',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true,
    },
    comment:
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 5,
  },
];
