import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export default function DAO() {
  return (
    <section className="dao">
      <Hero
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="DAO"
        subtitle="Децентрализованное управление Social Engineering Association."
        primaryLink="#join"
        primaryText="Присоединиться"
        secondaryLink="/community"
        secondaryText="Сообщество"
      />

      <div className="intro">
        <h2>Что такое наше DAO?</h2>
        <p>
          Наше DAO — это децентрализованная автономная организация, созданная для управления проектами Social Engineering Association. 
          Участники могут предлагать идеи, голосовать за инициативы и распределять ресурсы, используя блокчейн-технологии.
        </p>
        <p>
          Пример: Вы можете предложить новый курс по социальной инженерии, и сообщество решит, стоит ли его финансировать.
        </p>
      </div>

      <div className="features">
        <h2>Как это работает</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="О DAO"
            description="Узнайте, как блокчейн помогает нам быть прозрачными."
            link="#about"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Присоединиться"
            description="Станьте участником и получите токены управления."
            link="#join"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1551288049-b11d4a0c77d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Предложения"
            description="Голосуйте за проекты и распределяйте ресурсы."
            link="#proposals"
          />
        </div>
      </div>

      <div className="cta">
        <h2>Вступайте в DAO</h2>
        <p>Получите голос в управлении и помогите формировать будущее SEA.</p>
        <Link to="#join" className="cta-button">Участвовать</Link>
      </div>

      <Footer />
    </section>
  );
}
