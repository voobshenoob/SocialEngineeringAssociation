import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export default function Blog() {
  return (
    <section className="blog">
      <Hero
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
        title="Блог"
        subtitle="Статьи, новости и советы по социальной инженерии."
        primaryLink="#articles"
        primaryText="Читать статьи"
        secondaryLink="/community"
        secondaryText="Сообщество"
      />

      <div className="intro">
        <h2>Будьте в курсе</h2>
        <p>
          Наш блог — это место, где мы делимся последними исследованиями, практическими советами и новостями о социальной инженерии. 
          Узнайте, как хакеры используют психологию, и как защитить себя от их уловок.
        </p>
      </div>

      <div className="features">
        <h2>Что вы найдёте</h2>
        <div className="grid">
          <FeatureCard
            image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Статьи"
            description="Глубокие разборы техник и кейсов социальной инженерии."
            link="#articles"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Новости"
            description="Свежие события в мире кибербезопасности."
            link="#news"
          />
          <FeatureCard
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            title="Советы"
            description="Практические рекомендации по защите данных."
            link="#tips"
          />
        </div>
      </div>

      <div className="cta">
        <h2>Поделитесь своим опытом</h2>
        <p>Напишите собственную статью и станьте автором нашего блога.</p>
        <Link to="/community" className="cta-button">Связаться</Link>
      </div>

      <Footer />
    </section>
  );
}
