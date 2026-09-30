import { MainPage } from './pages/main/main';

interface AppProps {
  offersCount: number;
}

export const App = ({offersCount} : AppProps) => <MainPage offersCount={offersCount} />;
