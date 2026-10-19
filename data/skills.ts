import type { SkillGroup } from '@/types/portfolio';

// Local brand assets keep the technology logos available without a third-party request.
export const skillLogos: Record<string, string> = {
  'scikit-learn': '/skills/scikit-learn.svg',
  PyTorch: '/skills/pytorch.svg',
  XGBoost: '/skills/xgboost.png',
  LightGBM: '/skills/lightgbm.svg',
  Python: '/skills/python.svg',
  R: '/skills/r.svg',
  pandas: '/skills/pandas.svg',
  NumPy: '/skills/numpy.svg',
  Jupyter: '/skills/jupyter.svg',
  Matplotlib: '/skills/matplotlib.svg',
  Seaborn: '/skills/seaborn.svg',
  Plotly: '/skills/plotly.svg',
  PostgreSQL: '/skills/postgresql.svg',
  MySQL: '/skills/mysql.svg',
  SQLite: '/skills/sqlite.svg',
  MongoDB: '/skills/mongodb.svg',
  Django: '/skills/django.svg',
  FastAPI: '/skills/fastapi.svg',
  Streamlit: '/skills/streamlit.svg',
  AWS: '/skills/aws.svg',
  'Microsoft Azure': '/skills/azure.svg',
  Docker: '/skills/docker.svg',
  'Docker Compose': '/skills/docker.svg',
  'GitHub Actions': '/skills/github-actions.svg',
  Git: '/skills/git.svg',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Machine Learning',
    description:
      'Modeling choices backed by evaluation, calibration, and clear limitations.',
    items: [
      'scikit-learn',
      'PyTorch',
      'XGBoost',
      'LightGBM',
      'Supervised learning',
      'Anomaly detection',
      'Feature engineering',
      'Model calibration',
      'Threshold selection',
    ],
  },
  {
    title: 'Data Analysis',
    description:
      'Exploratory analysis, statistical modeling, and reproducible data preparation.',
    items: [
      'Python',
      'R',
      'pandas',
      'NumPy',
      'Jupyter',
      'Exploratory data analysis',
      'Data cleaning',
      'Missing-value handling',
      'Feature scaling',
    ],
  },
  {
    title: 'Visualization & Evaluation',
    description:
      'Interactive dashboards, clear visualizations, and reliable model evaluation.',
    items: [
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Cross-validation',
      'ROC-AUC',
      'Precision & recall',
      'Confusion matrices',
      'Feature importance',
    ],
  },
  {
    title: 'Data Engineering & Databases',
    description:
      'Query, process, orchestrate, and store the data behind analytical applications.',
    items: [
      'SQL',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'ETL/ELT',
      'Data warehousing',
    ],
  },
  {
    title: 'Backend & Products',
    description:
      'Turning model artifacts into interfaces and services people can actually use.',
    items: [
      'Django',
      'FastAPI',
      'REST APIs',
      'Streamlit',
      'API design',
      'Authentication',
      'Testing',
    ],
  },
  {
    title: 'MLOps & Delivery',
    description:
      'Model artifacts, automated checks, and operational controls around model delivery.',
    items: [
      'AWS',
      'Microsoft Azure',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'CI',
      'Health checks',
      'Drift monitoring',
      'Git',
    ],
  },
];

type SkillEvidence = { project: string; section?: string };

// Link only to projects that document the skill. Unlinked items are familiarity.
export const skillEvidence: Record<string, SkillEvidence> = {
  'scikit-learn': { project: 'telco-churn', section: 'section-1' },
  PyTorch: { project: 'netguard', section: 'section-1' },
  'Supervised learning': { project: 'telco-churn', section: 'section-1' },
  'Anomaly detection': { project: 'netguard', section: 'section-1' },
  'Feature engineering': {
    project: 'price-monitor',
    section: 'technical-approach',
  },
  'Model calibration': { project: 'aegis-credit', section: 'section-2' },
  'Threshold selection': { project: 'telco-churn', section: 'section-1' },
  Python: { project: 'price-monitor', section: 'contribution' },
  pandas: { project: 'price-monitor', section: 'technical-approach' },
  NumPy: { project: 'diabetes-prediction', section: 'section-1' },
  Jupyter: { project: 'diabetes-prediction', section: 'section-1' },
  'Exploratory data analysis': {
    project: 'price-monitor',
    section: 'technical-approach',
  },
  'Data cleaning': { project: 'diabetes-prediction', section: 'section-1' },
  'Missing-value handling': {
    project: 'diabetes-prediction',
    section: 'section-1',
  },
  'Feature scaling': { project: 'diabetes-prediction', section: 'section-1' },
  Matplotlib: { project: 'diabetes-prediction', section: 'section-1' },
  Seaborn: { project: 'diabetes-prediction', section: 'section-1' },
  Plotly: { project: 'netguard', section: 'section-4' },
  'Cross-validation': { project: 'telco-churn', section: 'section-1' },
  'ROC-AUC': { project: 'aegis-credit', section: 'section-2' },
  'Precision & recall': { project: 'netguard', section: 'section-3' },
  'Confusion matrices': { project: 'netguard', section: 'section-3' },
  'Feature importance': {
    project: 'diabetes-prediction',
    section: 'section-2',
  },
  SQL: { project: 'price-monitor', section: 'technical-approach' },
  PostgreSQL: { project: 'aegis-credit', section: 'section-4' },
  MySQL: { project: 'price-monitor', section: 'technical-approach' },
  SQLite: { project: 'price-monitor', section: 'technical-approach' },
  'ETL/ELT': { project: 'price-monitor', section: 'technical-approach' },
  Django: { project: 'aegis-credit', section: 'section-4' },
  FastAPI: { project: 'netguard', section: 'section-4' },
  'REST APIs': { project: 'netguard', section: 'section-4' },
  Streamlit: { project: 'netguard', section: 'section-4' },
  'API design': { project: 'aegis-credit', section: 'section-4' },
  Authentication: { project: 'puddle-marketplace', section: 'section-2' },
  Testing: { project: 'telco-churn', section: 'section-2' },
  Docker: { project: 'netguard', section: 'section-4' },
  'Docker Compose': { project: 'netguard', section: 'section-4' },
  'GitHub Actions': { project: 'telco-churn', section: 'section-2' },
  CI: { project: 'telco-churn', section: 'section-2' },
  'Health checks': { project: 'aegis-credit', section: 'section-5' },
  'Drift monitoring': { project: 'aegis-credit', section: 'section-5' },
};
