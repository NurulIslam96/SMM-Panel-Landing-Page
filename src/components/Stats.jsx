const stats = [
  {
    icon: '📦',
    number: '321,879',
    label: 'Order Processed',
  },
  {
    icon: '☁️',
    number: '6,245',
    label: 'Available Services',
  },
  {
    icon: '👥',
    number: '8,552',
    label: 'Registered User',
  },
  {
    icon: '🏆',
    number: '#1',
    label: 'Regional Rank',
  },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
