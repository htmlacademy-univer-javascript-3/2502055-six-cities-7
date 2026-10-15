import type { OfferPreview } from '../../types/offer';
import { OfferCard } from '../offer-card/offer-card';

interface OffersListProps {
  offers: OfferPreview[];
  onCardHover: (id: string | null) => void;
}

export const OffersList = ({ offers, onCardHover }: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onMouseEnter={() => onCardHover(offer.id)}
        onMouseLeave={() => onCardHover(null)}
      />
    ))}
  </div>
);
