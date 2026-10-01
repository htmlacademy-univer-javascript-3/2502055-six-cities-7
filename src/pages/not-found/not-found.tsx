import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div
    className="page page--gray page--main"
    style={{ alignItems: 'center', marginBlockStart: '100px' }}
  >
    <h1 className="errorTitle">Ошибка 404!</h1>
    <p className="errorDescription">Такой страницы не существует</p>
    <Link to="/" style={{border: '1px dashed'}}>
      <i>На главную</i>
    </Link>
  </div>
);
