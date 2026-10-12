export interface ProjectData {
  id: string;
  logo: string;
  title: string;
  description: string;
  status: string;
  technologies: string[];
  website: string;
  github: string;
  featured: boolean;
  coverImage: string;
}


export const projectsData: ProjectData[] = [
  {
    id: 'echonote',
    logo: '/assets/echonote-icon.png',
    title: 'EchoNote',
    description: 'Enterprise-first audio intelligence and decision memory workspace.',
    status: 'Live Product',
    technologies: ['React', 'TypeScript', 'Audio Intelligence'],
    website: 'https://echonote-25.vercel.app/',
    github: '',
    featured: true,
    coverImage: '/assets/echonote-icon.png'
  },
  {
    id: 'echoos',
    logo: '/assets/echoos-icon.png',
    title: 'EchoOS',
    description: 'Autonomous execution engine and workflow orchestration platform.',
    status: 'Live Product',
    technologies: ['React', 'TypeScript', 'Agent Workflows'],
    website: 'https://echonote-2509.web.app/',
    github: '',
    featured: true,
    coverImage: '/assets/echoos-icon.png'
  },
  {
    id: 'thinkoria',
    logo: '/assets/echotech-icon.png',
    title: 'Thinkoria',
    description: 'Cognitive reasoning and strategic perspective simulation platform.',
    status: 'In Design / Architecture',
    technologies: ['Systems Architecture', 'Cognitive Science'],
    website: '',
    github: '',
    featured: false,
    coverImage: '/assets/echotech-icon.png'
  },
  {
    id: 'protolens',
    logo: '/assets/echotech-icon.png',
    title: 'ProtoLens',
    description: 'Evidence validation and idea risk assessment system.',
    status: 'In Design / Research',
    technologies: ['Validation Frameworks', 'Market Signals'],
    website: '',
    github: '',
    featured: false,
    coverImage: '/assets/echotech-icon.png'
  },
  {
    id: 'lifecapital',
    logo: '/assets/lifecapital-icon.png',
    title: 'LifeCapital',
    description: 'Long-term goal alignment and sustainable capital planning.',
    status: 'In Product Architecture',
    technologies: ['Scenario Simulation', 'Strategic Planning'],
    website: '',
    github: '',
    featured: false,
    coverImage: '/assets/lifecapital-icon.png'
  }
];