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
    logo: '',
    title: 'EchoNote',
    description: 'AI-powered voice transcription and notes.',
    status: 'Active',
    technologies: ['React', 'TypeScript', 'AI'],
    website: 'https://echonote-25.vercel.app/',
    github: 'https://github.com/riyashah/echonote',
    featured: true,
    coverImage: 'https://placehold.co/400x300/e2e8f0/475569?text=EchoNote'
  },
  {
    id: 'thinkoria',
    logo: '',
    title: 'Thinkoria',
    description: 'Intelligent knowledge management system.',
    status: 'In Development',
    technologies: ['Node.js', 'React'],
    website: 'https://thinkoria.com',
    github: 'https://github.com/riyashah/thinkoria',
    featured: false,
    coverImage: 'https://placehold.co/400x300/e2e8f0/475569?text=Thinkoria'
  },
  {
    id: 'protolens',
    logo: '',
    title: 'ProtoLens',
    description: 'Real-time augmented reality interface.',
    status: 'Completed',
    technologies: ['ARKit', 'Swift'],
    website: 'https://protolens.io',
    github: 'https://github.com/riyashah/protolens',
    featured: false,
    coverImage: 'https://placehold.co/400x300/e2e8f0/475569?text=ProtoLens'
  },
  {
    id: 'lifecapital',
    logo: '',
    title: 'LifeCapital',
    description: 'Personal finance and wealth tracking.',
    status: 'Active',
    technologies: ['React Native', 'Firebase'],
    website: 'https://lifecapital.app',
    github: 'https://github.com/riyashah/lifecapital',
    featured: true,
    coverImage: 'https://placehold.co/400x300/e2e8f0/475569?text=LifeCapital'
  }
];