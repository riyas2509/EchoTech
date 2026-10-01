export interface ExperienceData {
  company: string;
  position: string;
  description: string;
  duration: string;
  technologies: string[];
  certificate: string;
  order: number;
}

export const experienceData: ExperienceData[] = [
  {
    company: 'AMA Internship',
    position: 'Software Engineering Intern',
    duration: '2023 - Present',
    description: '',
    technologies: [],
    certificate: '',
    order: 1
  },
  {
    company: 'Hackathon Winner',
    position: 'Global AI Challenge',
    duration: '2023',
    description: '',
    technologies: [],
    certificate: '',
    order: 2
  },
  {
    company: 'Research Project',
    position: 'NLP & Computer Vision',
    duration: '2022',
    description: '',
    technologies: [],
    certificate: '',
    order: 3
  },
  {
    company: 'Speaker / Leader',
    position: 'Tech Symposium',
    duration: '2022',
    description: '',
    technologies: [],
    certificate: '',
    order: 4
  }
];