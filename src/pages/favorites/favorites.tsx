import { Footer } from '../../components/layout/footer';
import { Header } from '../../components/layout/header';
import { OfferCard } from '../../components/offer-card/offer-card';
import type { OfferPreview } from '../../types/offer';

interface FavoritesProps {
  offers: OfferPreview[];
}

export const Favorites = ({ offers }: FavoritesProps) => {
  const grouped = offers.reduce<Record<string, OfferPreview[]>>(
    (acc, offer) => {
      const city = offer.city.name;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
      return acc;
    },
    {},
  );

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(grouped).map(([city, cityOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <OfferCard
                        key={offer.id}
                        offer={offer}
                        variant="favorites"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
