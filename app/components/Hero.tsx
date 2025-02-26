import { Link } from "@remix-run/react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  primaryLink: string;
  primaryText: string;
  secondaryLink?: string;
  secondaryText?: string;
}

export default function Hero({ image, title, subtitle, primaryLink, primaryText, secondaryLink, secondaryText }: HeroProps) {
  return (
    <div className="hero">
      <img src={image} alt={title} className="hero-image" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          <Link to={primaryLink} className="cta-button primary">{primaryText}</Link>
          {secondaryLink && secondaryText && (
            <Link to={secondaryLink} className="cta-button secondary">{secondaryText}</Link>
          )}
        </div>
      </div>
    </div>
  );
}
