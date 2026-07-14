import type { ExperienceItem, LinkItem, NewsItem, OfflineItem, Project, Publication } from '../types'

export const profile = {
  name: 'Xuewen ZHOU',
  initials: 'ZHOU',
  photo: 'images/profile.JPG',
  role: 'Master\'s Student',
  focus: 'AI4Health & Multimodal Intelligence',
  affiliation: 'The University of Tokyo',
  unit: 'IQB',
  location: 'Tokyo, Japan',
  bio: [
    'I am a Master\'s student in Computational Biology and Medical Sciences at UTokyo, advised by [Prof. Ryuichiro Nakato](https://nakatolab.iqb.u-tokyo.ac.jp/members/rnakato/index-e.html). I previously earned my bachelor\'s degree in Software Engineering from Zhejiang University of Technology. There, I worked on computer networks with [Prof. Kechen Zheng](https://kechenzheng.github.io/) and data visualization with [Prof. Guodao Sun](https://homepage.zjut.edu.cn/sgd_en/).',
    'My research aims to develop robust and interpretable AI systems that meaningfully contribute to improving human health. My current work explores sequence-to-function foundation models for ChIP-seq analysis. More broadly, I am interested in AI agents for healthcare and scientific discovery.',
  ],
  note: 'If our research interests align, I would be happy to explore opportunities to collaborate.',
  contactStatement: 'For research inquiries, please contact me directly via email.',
  interests: ['AI Agents', 'Multimodal Reasoning', 'Medical AI'],
  email: 'xwzhou.sgk [AT] gmail.com',
}

export const links: LinkItem[] = [
  { label: 'GitHub', url: 'https://github.com/issyuNaN', icon: 'github' },
  { label: 'Follow', url: 'https://x.com/XuewenZHOUac', icon: 'x' },
  { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=7dYo33EAAAAJ&hl=en', icon: 'scholar' },
]

export const offlineNotes: OfflineItem[] = [
  { icon: '🎮', text: 'I am a big fan of **Apex Legends** and **Overwatch**.' },
  { icon: '💬', text: 'I am currently studying Japanese and Korean, and I have passed **JLPT N1**.' },
  { icon: '☕', text: 'I am always happy to find good **coffee** and **desserts**.' },
  { icon: '🎵', text: 'I enjoy **K-pop** and **jazz**.' },
]

export const news: NewsItem[] = [
  {
    id: 1,
    date: '2026-06',
    dateLabel: 'Jun 2026',
    text: 'Team BMD achieved the highest win rate in both the 5-player and 9-player tracks at the AIWolfDial 2026 Domestic Competition.',
    href: 'files/aiwolfdial-2026-certificate.pdf',
  },
  {
    id: 2,
    date: '2026-04',
    dateLabel: 'Apr 2026',
    text: 'Our MMRLens paper was accepted by the Journal of Computer-Aided Design & Computer Graphics.',
    href: 'https://www.jcad.cn/article/doi/10.3724/SP.J.1089.2025-00337?viewType=citedby-info',
  },
]

export const experiences: ExperienceItem[] = [
  {
    period: '2025 — Present',
    role: 'Master\'s Student',
    organization: 'The University of Tokyo · IQB',
    description: 'Exploring the potential of sequence-to-function foundation models for ChIP-seq analysis.',
    type: 'education',
  },
  // {
  //   period: 'Feb 2026 — Present',
  //   role: 'Visiting Student',
  //   organization: '',
  //   description: 'Worked on AI agents for automated method development in scRNA-seq analysis.',
  //   type: 'research',
  // },
  {
    period: '2021 — 2025',
    role: 'B.Eng. in Software Engineering',
    organization: 'Zhejiang University of Technology',
    description: 'Explored research topics spanning computer networks, data visualization, and multimodal learning.',
    type: 'education',
  },
]

export const publications: Publication[] = [
  {
    id: 1,
    type: 'journal',
    title: 'A Progressive Visual Analytics Method for Reasoning Capability of Vision-Language Models',
    authors: 'Xia Wang, Zhou Xuewen, Jiang Qi, Wang Yunchao, Gao Haidong, Sun Guodao, Liang Ronghua.',
    highlightAuthor: 'Zhou Xuewen',
    venue: 'Journal of Computer-Aided Design & Computer Graphics (in Chinese)',
    year: 2026,
    summary: 'MMRLens combines progressive, multi-level visual analysis with topology-aware decision mapping to help users trace how vision-language models reason, from global decision patterns to individual cases.',
    image: 'images/project-mmrlens.png',
    links: [
      { label: 'webpage', url: 'https://www.jcad.cn/article/doi/10.3724/SP.J.1089.2025-00337?viewType=citedby-info' },
      { label: 'pdf', url: 'https://www.jcad.cn/cn/article/pdf/preview/10.3724/SP.J.1089.2025-00337.pdf' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cognitive Network Research Project',
    period: '2024 — 2025',
    description: 'Developed algorithms for cognitive-network optimization and resource allocation in wireless communication systems.',
    image: 'images/project-lstmcog.png',
    tags: ['Cognitive Networks', 'Wireless Communication'],
    links: [
      { label: 'patent · CN118944786B', url: 'https://patents.google.com/patent/CN118944786B/zh' },
    ],
  },
  {
    id: 2,
    title: 'SwiftGuard',
    period: '2026',
    description: 'SwiftGuard uses an LLM to identify potential security vulnerabilities in Swift code. We developed it at the try! Swift Tokyo 2026 Hackathon for Students.',
    image: 'images/project-swiftguard.png',
    tags: ['Swift', 'LLM', 'GitHub Actions', 'XCUITest'],
    links: [
      { label: 'code', url: 'https://github.com/issyuNaN/SwiftGuard' },
    ],
  },
]
