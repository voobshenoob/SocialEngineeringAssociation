import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export default function Community() {
  return (
    <section className="community">
      <Hero
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="Сообщество"
        subtitle="Присоединяйтесь к единомышленникам."
        primaryLink="https://github.com/voobshenoob/SocialEngineeringAssociation"
        primaryText="GitHub"
      />

      <div className="intro">
        <h2>Сила сообщества</h2>
        <p>
          Мы — открытая платформа для обмена опытом, идеями и инструментами. 
          Независимо от того, новичок вы или эксперт, здесь вы найдёте поддержку и вдохновение.
        </p>
      </div>

      <div className="features">
        <h2>Как участвовать</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Форум"
            description="Задавайте вопросы и делитесь кейсами."
            link="#forum"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Контрибьюторы"
            description="Станьте частью команды разработчиков."
            link="#contributors"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1551288049-b11d4a0c77d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Мероприятия"
            description="Участвуйте в хакатонах и вебинарах."
            link="#events"
          />
        </div>
      </div>

      <div className="cta">
        <h2>Станьте участником</h2>
        <p>Внесите свой вклад в проект или просто начните общаться.</p>
        <Link to="/resources" className="cta-button">Ресурсы</Link>
      </div>

      <Footer />
    </section>
  );
}
