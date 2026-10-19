export const experience = [
  {
    id: 'delta-holding',
    company: 'Delta Holding',
    focus: 'Python Development & Data Analysis',
    role: 'Python Developer & Data Analyst Intern',
    startDate: '2026-09-01',
    endDate: undefined,
    period: 'Started 1 September 2026 · completed',
    location: 'Skhirate, Rabat, Morocco',
    type: 'Completed internship',
    project: 'Price Monitor',
    projectSlug: 'price-monitor',
    summary:
      'Developed Price Monitor, a market-monitoring application for diesel, Brent, and bitumen, connecting traceable data collection, analysis, forecasting, and a responsive dashboard.',
    highlights: [
      'Automated market-data collection and SQL storage with date and unit validation, duplicate handling, and separate source-publication and collection timestamps, making price history traceable.',
      'Built a reproducible forecasting workflow on a 1,287-row historical snapshot (10 September 2021–9 September 2026), with chronological validation and comparisons against the last-known-price baseline.',
      'Connected supplier-quote entry, price alerts, purchase-budget calculations, and CSV/Excel exports in a responsive dashboard, bringing purchasing preparation into one application.',
    ],
    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'MySQL / SQLite',
      'Time-series forecasting',
    ],
  },
] as const;
