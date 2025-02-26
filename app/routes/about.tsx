import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export default function About() {
  return (
    <section className="about">
      <Hero 
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="О нас"
        subtitle="Узнайте, кто мы и почему занимаемся социальной инженерией."
        primaryLink="/training"
        primaryText="Начать обучение"
      />

      <div className="intro">
        <h2>Наша миссия</h2>
        <p>
          Social Engineering Association основана в 2025 году группой специалистов в области кибербезопасности и психологии. 
          Мы стремимся демистифицировать методы социальной инженерии, обучая людей защищаться от манипуляций и понимать человеческий фактор в технологиях.
        </p>
      </div>

      <div className="features">
        <h2>Кто мы такие</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Команда экспертов"
            description="Специалисты по OSINT, фишингу и поведенческому анализу."
            link="/community"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Наши цели"
            description="Создать открытую платформу для обучения и исследований."
            link="/resources"
          />
        </div>
      </div>

      <div className="cta">
        <h2>Присоединяйтесь к нам</h2>
        <p>Станьте частью сообщества, которое меняет подход к безопасности.</p>
        <Link to="/community" className="cta-button">Вступить</Link>
      </div>

      <Footer />
    </section>
  );
}
