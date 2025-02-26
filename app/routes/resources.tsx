import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export default function Resources() {
  return (
    <section className="resources">
      <Hero
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="Ресурсы"
        subtitle="Инструменты и материалы для изучения социальной инженерии."
        primaryLink="/training"
        primaryText="Начать обучение"
      />

      <div className="intro">
        <h2>Всё для анализа и защиты</h2>
        <p>
          Здесь вы найдёте руководства, скрипты и утилиты для исследования социальной инженерии. 
          От анализа открытых источников (OSINT) до симуляции атак — мы предоставляем всё необходимое.
        </p>
      </div>

      <div className="features">
        <h2>Доступные ресурсы</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Документация"
            description="Подробные гайды по фишингу, манипуляциям и защите."
            link="#docs"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Инструменты"
            description="Скрипты для анализа данных и тестирования систем."
            link="#tools"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1551288049-b11d4a0c77d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Шаблоны атак"
            description="Готовые сценарии для учебных симуляций."
            link="#templates"
          />
        </div>
      </div>

      <div className="cta">
        <h2>Хотите больше?</h2>
        <p>Внесите свой вклад или загрузите свои инструменты на GitHub.</p>
        <a href="https://github.com/voobshenoob/SocialEngineeringAssociation" className="cta-button" target="_blank" rel="noopener noreferrer">Перейти</a>
      </div>

      <Footer />
    </section>
  );
}
