import { Link } from "@remix-run/react";

export default function NavMenu() {
  return (
    <nav className="app-menu">
      <div className="menu-logo">
        <Link to="/">SEA</Link>
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">Главная</Link>
            <ul>
              <li><Link to="/">Панель</Link></li>
              <li><Link to="/about">О нас</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/dao">DAO</Link>
            <ul>
              <li><Link to="/dao#about">О DAO</Link></li>
              <li><Link to="/dao#join">Присоединиться</Link></li>
              <li><Link to="/dao#proposals">Предложения</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/resources">Ресурсы</Link>
            <ul>
              <li><Link to="/resources#docs">Документы</Link></li>
              <li><Link to="/resources#tools">Инструменты</Link></li>
              <li><Link to="/resources#search">Поиск</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/training">Обучение</Link>
            <ul>
              <li><Link to="/training#courses">Курсы</Link></li>
              <li><Link to="/training#simulations">Симуляции</Link></li>
              <li><Link to="/training#stats">Статистика</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/community">Сообщество</Link>
            <ul>
              <li><Link to="/community#forum">Форум</Link></li>
              <li><Link to="/community#contributors">Участники</Link></li>
              <li><a href="https://github.com/voobshenoob/SocialEngineeringAssociation" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
            <ul>
              <li><Link to="/blog#articles">Статьи</Link></li>
              <li><Link to="/blog#news">Новости</Link></li>
              <li><Link to="/blog#tips">Советы</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
