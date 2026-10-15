import { Link } from 'react-router-dom';
import type { OfferPreview } from '../../types/offer';
import { buildOfferPath } from '../../routes';
import { OFFER_TYPE_LABELS } from '../../constants';

export type CardVariant = 'cities' | 'favorites' | 'near';

interface OfferCardProps {
  offer: OfferPreview;
  variant?: CardVariant;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface VariantConfig {
  card: string;
  imageWrapper: string;
  infoWrapper: string;
  width: number;
  height: number;
}

const VARIANTS: Record<CardVariant, VariantConfig> = {
  cities: {
    card: 'cities__card',
    imageWrapper: 'cities__image-wrapper',
    infoWrapper: 'place-card__info',
    width: 260,
    height: 200,
  },
  favorites: {
    card: 'favorites__card',
    imageWrapper: 'favorites__image-wrapper',
    infoWrapper: 'favorites__card-info place-card__info',
    width: 150,
    height: 110,
  },
  near: {
    card: 'near-places__card',
    imageWrapper: 'near-places__image-wrapper',
    infoWrapper: 'place-card__info',
    width: 260,
    height: 200,
  },
};

export const OfferCard = ({
  offer,
  variant = 'cities',
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps) => {
  const { card, imageWrapper, infoWrapper, width, height } = VARIANTS[variant];

  return (
    <article
      className={`${card} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapper} place-card__image-wrapper`}>
        <Link to={buildOfferPath(offer.id)}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={width}
            height={height}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={infoWrapper}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${
              offer.isFavorite ? ' place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={buildOfferPath(offer.id)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          <p className="place-card__type">{OFFER_TYPE_LABELS[offer.type]}</p>
        </p>
      </div>
    </article>
  );
};
