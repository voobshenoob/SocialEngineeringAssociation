import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <section className="home">
      {/* Баннер */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Социальная инженерия"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Social Engineering Association</h1>
          <p>Откройте секреты человеческого фактора в мире технологий и безопасности.</p>
          <Link to="/training" className="cta-button">Начать обучение</Link>
        </div>
      </div>

      {/* Введение */}
      <div className="intro">
        <h2>Что такое социальная инженерия?</h2>
        <p>
          Социальная инженерия — это искусство манипуляции людьми для получения доступа к информации, системам или ресурсам. 
          От фишинговых писем до телефонных звонков — хакеры используют психологию, чтобы обойти технические барьеры. 
          Мы здесь, чтобы изучить эти методы, понять их и научиться защищаться.
        </p>
      </div>

      {/* Основные направления */}
      <div className="features grid">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Обучение"
          />
          <h3>Обучение и курсы</h3>
          <p>Практические уроки по распознаванию и противодействию атакам.</p>
          <Link to="/training">Подробнее</Link>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Инструменты"
          />
          <h3>Инструменты анализа</h3>
          <p>Скрипты и утилиты для тестирования уязвимостей.</p>
          <Link to="/resources">Подробнее</Link>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Сообщество"
          />
          <h3>Наше сообщество</h3>
          <p>Обменивайтесь опытом с экспертами и новичками.</p>
          <Link to="/community">Подробнее</Link>
        </div>
      </div>

      {/* Статистика */}
      <div className="stats">
        <h2>Почему это важно?</h2>
        <div className="grid">
          <div className="card stat-card">
            <h3>95%</h3>
            <p>Кибератак начинаются с человеческой ошибки.</p>
          </div>
          <div className="card stat-card">
            <h3>3.4 млрд</h3>
            <p>Фишинговых писем отправляются ежедневно.</p>
          </div>
          <div className="card stat-card">
            <h3>$4.35 млн</h3>
            <p>Средний ущерб от утечки данных в 2024 году.</p>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="cta">
        <h2>Готовы узнать больше?</h2>
        <p>Присоединяйтесь к нам, чтобы защитить себя и других от манипуляций.</p>
        <Link to="/about" className="cta-button">О проекте</Link>
      </div>
    </section>
  );
}
