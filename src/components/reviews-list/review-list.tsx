import { Review } from '@/components/review';
import type { Comment } from '@/types/comment';

interface ReviewsListProps {
  reviews: Comment[];
}

export const ReviewsList = ({ reviews }: ReviewsListProps) => (
  <>
    <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  </>
);
