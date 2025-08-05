export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML & CSS', level: 95, category: 'frontend' },
  { name: 'Javascript', level: 70, category: 'frontend' },
  { name: 'React.js', level: 65, category: 'frontend' },
  { name: 'Tailwind CSS', level: 50, category: 'frontend' },
  { name: 'MERN - Stack', level: 60, category: 'frontend' },
  
  // Backend
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'FastAPI', level: 55, category: 'backend' },
  { name: 'Express.js', level: 65, category: 'backend' },
  { name: 'Django', level: 40, category: 'backend' },
  
  // Tools & Other
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'MongoDB', level: 75, category: 'tools' },
  { name: 'Git', level: 70, category: 'tools' },
  
  // Other
  { name: 'Machine Learning', level: 50, category: 'other' },
  { name: 'Data Analysis', level: 80, category: 'other' },
];

export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(skill => skill.category === category);