import { useState } from 'react';
import { Header } from '../../components/layout/header';
import { OffersList } from '../../components/offers-list';
import type { OfferPreview } from '../../types/offer';
import { MainEmpty } from './main-empty';

interface MainPageProps {
  offers: OfferPreview[];
}

export const Main = ({ offers }: MainPageProps) => {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleOpened = () => setIsOpened((prev) => !prev);

  if (offers.length === 0) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span
                  className="places__sorting-type"
                  tabIndex={0}
                  onClick={toggleOpened}
                >
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {isOpened && (
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                )}
              </form>
              <OffersList offers={offers} onCardHover={setActiveOfferId} />
            </section>
            <div className="cities__right-section">
              <section
                className="cities__map map"
                data-active-offer={activeOfferId ?? ''}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
