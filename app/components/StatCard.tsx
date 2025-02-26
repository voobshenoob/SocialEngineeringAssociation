interface StatCardProps {
    value: string;
    description: string;
  }
  
  export default function StatCard({ value, description }: StatCardProps) {
    return (
      <div className="card stat-card">
        <h3>{value}</h3>
        <p>{description}</p>
      </div>
    );
  }
