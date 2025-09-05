export interface Skill {
  name: string;
  level: number;
  category: 'Data Analyst' | 'Mern-stack' | 'tools' | 'Communication Language';
}

export const skills: Skill[] = [
  // Data Engineer
  { name: 'Python', level: 80, category: 'Data Analyst' },
  { name: 'Pandas & Numpy', level: 70, category: 'Data Analyst' },
  { name: 'Mongodb', level: 65, category: 'Data Analyst' },
  { name: 'ETL', level: 50, category: 'DData Analyst' },
  { name: 'Data Visulaization', level: 70, category: 'Data Analyst' },
  { name: 'SQL', level: 60, category: 'Data Analyst' },
  
  // Mern-stack
  { name: 'Python', level: 80, category: 'Mern-stack' },
  { name: 'HTML & CSS', level: 95, category: 'Mern-stack' },
  { name: 'Javascript', level: 60, category: 'Mern-stack' },
  { name: 'React.js', level: 65, category: 'Mern-stack' },
  { name: 'Tailwind CSS', level: 50, category: 'Mern-stack' },
  { name: 'Node.js', level: 60, category: 'Mern-stack' },
  { name: 'FastAPI', level: 55, category: 'Mern-stack' },
  { name: 'Express.js', level: 65, category: 'Mern-stack' },
  { name: 'Django', level: 40, category: 'Mern-stack' },
  
  // Tools & Other
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'MongoDB', level: 65, category: 'tools' },
  { name: 'Git', level: 70, category: 'tools' },
  
  // Other
  { name: 'Tamil (C2)', level: 100, category: 'Communication Language' },
  { name: 'English (B2)', level: 80, category: 'Communication Language' },
  { name: 'Kanada (B2)', level: 90, category: 'Communication Language' }
];

export const getSkillsByCategory = (category: Skill['category']) => 
  skills.filter(skill => skill.category === category);