import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import StatCard from "~/components/StatCard";
import Footer from "~/components/Footer";

export default function Training() {
  return (
    <section className="training">
      <Hero
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="Обучение"
        subtitle="Освойте методы социальной инженерии и защиты."
        primaryLink="#courses"
        primaryText="Записаться"
      />

      <div className="intro">
        <h2>Практика и знания</h2>
        <p>
          Наши курсы и симуляции помогут вам понять, как работают техники социальной инженерии, и как их использовать ответственно или защищаться от них. 
          От азов до продвинутых сценариев — всё основано на реальных примерах.
        </p>
      </div>

      <div className="features">
        <h2>Что вы получите</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Курсы"
            description="От психологии влияния до фишинга."
            link="#courses"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Симуляции"
            description="Реальные сценарии атак в безопасной среде."
            link="#simulations"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Сертификация"
            description="Подтвердите свои навыки официально."
            link="#cert"
          />
        </div>
      </div>

      <div className="stats">
        <h2>Результаты обучения</h2>
        <div className="grid">
          <StatCard value="80%" description="Участников замечают фишинг после курса." />
          <StatCard value="500+" description="Симуляций проведено в 2025 году." />
          <StatCard value="4.8/5" description="Средняя оценка наших курсов." />
        </div>
      </div>

      <Footer />
    </section>
  );
}
