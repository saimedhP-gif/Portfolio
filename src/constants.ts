import { Project, Education, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '0',
    title: 'GitHub Portfolio',
    category: 'Open Source',
    description: 'A collection of AI, ML, and core engineering projects showcasing technical proficiency and problem-solving skills.',
    longDescription: 'This project serves as a central hub for all my open-source contributions and personal experiments. It includes various repositories focusing on Machine Learning models, Data Analysis, and Software Engineering principles. Each repository is a testament to my commitment to building robust and intelligent systems.',
    image: 'https://picsum.photos/seed/github/1200/800',
    year: '2026',
    tags: ['AI', 'ML', 'Python', 'Open Source'],
    role: 'Lead Developer',
    timeline: 'Ongoing',
    tools: ['GitHub', 'Git', 'Python', 'Markdown'],
    link: 'https://github.com/saimedhP-gif'
  },
  {
    id: '1',
    title: 'Lumina Health App',
    category: 'UX/UI Design',
    description: 'A holistic wellness platform focusing on mental health and daily habit tracking with a minimalist approach.',
    longDescription: 'Lumina is a comprehensive wellness application designed to address the growing need for accessible mental health support. The project involved extensive user research, resulting in a minimalist interface that reduces cognitive load. Key features include mood tracking, guided meditation sessions, and a habit-building system that uses positive reinforcement to encourage long-term wellness.',
    image: 'https://picsum.photos/seed/lumina/1200/800',
    year: '2025',
    tags: ['Mobile App', 'Healthcare', 'Case Study'],
    role: 'Lead UX/UI Designer',
    timeline: '4 Months',
    tools: ['Figma', 'React Native', 'Adobe Illustrator'],
    link: 'https://example.com/lumina'
  },
  {
    id: '2',
    title: 'Aura E-commerce',
    category: 'Web Design',
    description: 'High-end fashion marketplace designed for a seamless, editorial shopping experience.',
    longDescription: 'Aura is a luxury e-commerce platform that blends high-end editorial design with high-performance web technology. The goal was to create a digital storefront that feels like a premium fashion magazine. We implemented a custom design system, optimized image loading for high-resolution photography, and created a frictionless checkout process that resulted in a 25% increase in conversion rates during beta testing.',
    image: 'https://picsum.photos/seed/aura/1200/800',
    year: '2024',
    tags: ['E-commerce', 'Web App', 'Branding'],
    role: 'Visual Designer & Frontend Developer',
    timeline: '6 Months',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://example.com/aura'
  },
  {
    id: '3',
    title: 'Nexus Smart Home',
    category: 'Product Design',
    description: 'Interface design for a next-generation smart home ecosystem, emphasizing accessibility and intuitive control.',
    longDescription: 'Nexus is a smart home ecosystem designed to be accessible to users of all ages and technical abilities. The project focused on creating a unified control system for diverse IoT devices. We conducted multiple rounds of accessibility audits and user testing with elderly participants to ensure the interface was truly intuitive. The final design features high-contrast visuals, large touch targets, and voice-command integration.',
    image: 'https://picsum.photos/seed/nexus/1200/800',
    year: '2024',
    tags: ['IoT', 'Dashboard', 'Accessibility'],
    role: 'Product Designer',
    timeline: '5 Months',
    tools: ['Figma', 'Protopie', 'UserTesting.com'],
    link: 'https://example.com/nexus'
  },
  {
    id: '4',
    title: 'University Portal Redesign',
    category: 'University Project',
    description: 'A comprehensive overhaul of the student information system, focusing on information architecture and user flow.',
    longDescription: 'This project was a complete redesign of the University of Creative Arts student portal. The existing system was fragmented and difficult to navigate. Through card sorting and user interviews, I developed a new information architecture that prioritized the most frequently used student services. The redesign led to a 40% reduction in time-to-task for common administrative actions like course registration and grade checking.',
    image: 'https://picsum.photos/seed/uni/1200/800',
    year: '2023',
    tags: ['EdTech', 'UX Research', 'Information Architecture'],
    role: 'UX Researcher & Designer',
    timeline: '3 Months',
    tools: ['Figma', 'Miro', 'Optimal Workshop'],
    link: 'https://example.com/uni-portal'
  },
  {
    id: '5',
    title: 'CLI-BASED-CHAT-TOOL-WITH-ML',
    category: 'AI & ML',
    description: 'A sophisticated command-line interface chat tool integrated with Machine Learning for intelligent responses and natural language processing.',
    longDescription: 'This project is a CLI-based chat application that leverages Machine Learning models to provide intelligent, context-aware responses. Built with Python, it incorporates Natural Language Processing (NLP) techniques to understand user intent and sentiment. The tool is designed for developers who prefer a terminal-centric workflow while benefiting from AI-driven interactions. It features modular architecture, allowing for easy integration of different ML models and custom chat logic.',
    image: 'https://picsum.photos/seed/cli-chat/1200/800',
    year: '2024',
    tags: ['Python', 'Machine Learning', 'NLP', 'CLI'],
    role: 'Lead Developer',
    timeline: '3 Months',
    tools: ['Python', 'Scikit-learn', 'NLTK', 'TensorFlow'],
    link: 'https://github.com/saimedhP-gif/CLI-BASED-CHAT-TOOL-WITH-ML.git'
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
    institution: 'CMR Institute of Technology',
    period: '2024 — 2027',
    honors: 'Pursuing 3rd Year (CGPA 7.8/10)',
    details: [
      'Specializing in Artificial Intelligence and Machine Learning.',
      'Active member of the Technical Innovation Club.',
      'Participating in various hackathons and coding competitions.'
    ]
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: 'Abdul Kalam Institute of Technology and Sciences',
    period: '2021 — 2024',
    honors: 'CGPA 8.96/10',
    details: [
      'Focused on core computer science principles and engineering fundamentals.',
      'Completed a major project on network security.',
      'Consistently ranked among the top 5% of the batch.'
    ]
  },
  {
    degree: 'Class 10 (Secondary School)',
    institution: 'Sri Sarada Vidyalaya',
    period: '2021',
    honors: 'CGPA 10/10',
    details: [
      'Completed secondary education with a perfect score.',
      'Awarded for academic excellence in Mathematics and Science.',
      'Participated in regional science fairs.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Technical Proficiency',
    items: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 80 }
    ]
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { name: 'Neural Networks', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Computer Vision', level: 75 },
      { name: 'NLP', level: 70 },
      { name: 'TensorFlow', level: 80 },
      { name: 'Scikit-learn', level: 85 }
    ]
  },
  {
    category: 'Core Engineering',
    items: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 85 },
      { name: 'Operating Systems', level: 75 },
      { name: 'DBMS', level: 80 },
      { name: 'Computer Networks', level: 70 },
      { name: 'Software Engineering', level: 85 }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Technical Lead Guide',
    company: 'HackForge Hackathon',
    period: '2025',
    location: 'On-site',
    details: [
      'Mentored participating teams on technical architecture and implementation strategies for their hackathon projects.',
      'Provided hands-on guidance on full-stack development, AI integration, and cloud deployment.',
      'Evaluated project feasibility and helped teams overcome critical technical bottlenecks during the 48-hour sprint.',
      'Facilitated technical workshops on emerging technologies to enhance participants\' skill sets.'
    ]
  },
  {
    role: 'Google Student Ambassador',
    company: 'Google Student Ambassador Program',
    period: '2024 — Present',
    location: 'Remote / Campus',
    details: [
      'Representing Google on campus and acting as a liaison between Google and the student community.',
      'Organizing events, workshops, and technical talks to promote Google technologies and resources.',
      'Collaborating with Google teams to provide feedback on student-facing products and initiatives.',
      'Leading a community of student developers and fostering a culture of innovation and learning.'
    ]
  }
];
