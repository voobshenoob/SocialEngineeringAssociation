import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Social Engineering Association</h3>
          <p>© 2025. Все права защищены.</p>
        </div>
        <div className="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/resources">Ресурсы</Link></li>
            <li><Link to="/training">Обучение</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Связаться</h4>
          <p>Email: info@sea.org</p>
          <p>GitHub: <a href="https://github.com/voobshenoob/SocialEngineeringAssociation" target="_blank" rel="noopener noreferrer">Перейти</a></p>
        </div>
      </div>
    </footer>
  );
}
