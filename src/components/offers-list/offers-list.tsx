import type { OfferPreview } from '@/types/offer';
import { OfferCard } from '@/components/offer-card/';
import type { CardVariant } from '@/components/offer-card/';

interface OffersListProps {
  offers: OfferPreview[];
  onCardHover?: (id: string | null) => void;
  className?: string;
  variant?: CardVariant;
}

export const OffersList = ({
  offers,
  onCardHover,
  className = 'cities__places-list places__list tabs__content',
  variant = 'cities',
}: OffersListProps) => (
  <div className={className}>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        variant={variant}
        onMouseEnter={onCardHover ? () => onCardHover(offer.id) : undefined}
        onMouseLeave={onCardHover ? () => onCardHover(null) : undefined}
      />
    ))}
  </div>
);
