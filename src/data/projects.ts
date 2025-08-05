export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'automation' | 'network' | 'finance';
  technologies: string[];
  image: string;
  liveDemo?: string;
  github: string;
  features: string[];
}

export const projects: Project[] = [
{
  id: 'ai-bacteria-drug-analyzer',
  title: 'AI Bacteria Drug Interaction Analyzer',
  description: 'AI-powered biomedical analysis tool for predicting bacteria-drug interactions using Gemini models.',
  longDescription: 'An advanced healthcare AI platform designed to analyze and predict interactions between bacteria and various drugs. Utilizes Gemini models to process structured biomedical datasets like DrugBank and PubMed. Features real-time insights through Streamlit dashboards and includes data cleaning, model training, and visualization pipelines.',
  category: 'healthcare-ai',
  technologies: ['Python', 'Gemini API', 'TensorFlow', 'Pandas', 'Streamlit', 'Scikit-learn', 'PubMed API'],
  image: '/AI Bacteria Drug Interaction Analyzer.jpg',
  github: 'https://github.com/username/ai-bacteria-drug-analyzer',
  features: [
    'Gemini-powered biomedical data analysis',
    'Integration with DrugBank & PubMed datasets',
    'Predictive modeling for drug-bacteria interaction',
    'Interactive visualizations via Streamlit',
    'Exportable reports for clinical review'
  ]
},
{
  id: 'covid-xray-cnn',
  title: 'COVID-19 Detection from X-ray (CNN)',
  description: 'Deep learning model for early detection of COVID-19 and Pneumonia using chest X-ray images.',
  longDescription: 'A computer vision-based medical diagnostic system that uses a Convolutional Neural Network (CNN) to classify chest X-ray images into COVID-19, Pneumonia, or Normal. The model was trained on open-source medical imaging datasets, and the system provides fast, automated preliminary diagnostics to aid healthcare professionals. Includes data preprocessing, model training, evaluation, and result visualization.',
  category: 'healthcare-ai',
  technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Matplotlib', 'NumPy', 'Pandas'],
  image: '/COVID-19 Detection from X-ray (CNN).jpg',
  github: 'https://github.com/username/covid-xray-cnn',
  features: [
    'CNN-based classification of chest X-rays',
    'Detection of COVID-19, Pneumonia, and Normal cases',
    'Automated diagnosis support for radiologists',
    'Accuracy and loss visualization',
    'Preprocessed and augmented medical image data'
  ]
},
  {
  id: 'space-debris-tracker',
  title: 'Space Debris Tracker (IoT + AI)',
  description: 'An advanced AI-driven solution designed to detect, simulate, and predict potential space debris collisions using real-time satellite telemetry and LiDAR sensor data. The system leverages machine learning models for trajectory analysis and collision forecasting.',
  longDescription: 'An innovative IoT and AI-based space monitoring system that leverages satellite feeds, LiDAR sensors, and AWS cloud infrastructure to detect and forecast potential space debris collisions. The system utilizes machine learning algorithms for pattern recognition and trajectory prediction, improving space situational awareness and collision prevention strategies. Includes a monitoring dashboard and alert system for real-time insights.',
  category: 'aerospace-ai',
  technologies: ['Python', 'AWS', 'LiDAR', 'TensorFlow', 'IoT Core', 'Satellite APIs', 'Node.js'],
  image: '/Space Debris Tracker (IoT + AI).jpg',
  github: 'https://github.com/username/space-debris-tracker',
  features: [
    'Real-time space debris tracking using LiDAR & satellite data',
    'AI-based trajectory prediction and collision risk assessment',
    'IoT-enabled data ingestion from multiple sources',
    'Cloud-based processing with AWS',
    'Live dashboard with alerts and analytics'
  ]
},
{
  id: 'ai-health-coach',
  title: 'AI Health Coach',
  description: 'Personalized AI-powered health coaching system for habit change and risk-based guidance.',
  longDescription: 'An intelligent health assistant designed to provide personalized lifestyle and wellness recommendations based on individual health profiles. The AI Health Coach uses evidence-based data and behavioral science to guide users through habit changes, reduce health risks (like hypertension or high cholesterol), and improve overall well-being. It features real-time health risk analysis, motivational nudges, and integrates with wearable devices for continuous monitoring.',
  category: 'healthcare-ai',
  technologies: ['React', 'Python', 'TensorFlow.js', 'Node.js', 'MongoDB', 'Wearable API'],
  image: '/AI Health Coach.jpg',
  github: 'https://github.com/username/ai-health-coach',
  features: [
    'Personalized health coaching using AI',
    'Risk profiling for lifestyle diseases',
    'Habit tracking and motivational nudges',
    'Integration with wearable devices and health APIs',
    'User-friendly dashboard for progress tracking'
  ]
}

];

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);