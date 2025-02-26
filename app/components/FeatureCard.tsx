import { Link } from "@remix-run/react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ image, title, description, link }: FeatureCardProps) {
  return (
    <div className="card feature-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="card-link">Подробнее</Link>
    </div>
  );
}
