// ============================================================
// portfolioData.js — Centralized configuration for Shivam Wankhede's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shivam Wankhede",
  firstName: "Shivam",
  brandName: "Shivam Wankhede",
  title: "Web Developer & AI Automation Specialist",
  location: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
  phone: "+91 8010773127",
  emails: {
    primary: "shivamswankhede@gmail.com",
    secondary: "shivamswankhede@gmail.com",
  },
  summary:
    "Passionate Web Developer and AI Automation Specialist with hands-on experience in building websites, AI chatbots, business automation systems, and lead generation solutions. Skilled in modern web technologies, AI agents, workflow automation, and digital marketing.",
  resumeUrl: "/Shivam_Wankhede_Resume.pdf",
};

export const socialLinks = {
  github: "#", // Replace with real GitHub link if available
  linkedin: "https://www.linkedin.com/in/shivam-wankhede-3395173b5",
  instagram: "#",
};

export const heroContent = {
  greeting: "Hi, I'm Shivam",
  titleHighlight: "Web Developer & AI Specialist",
  subtitle:
    "I solve real-world business problems through modern web technologies, AI agents, and workflow automation.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shivamswankhede@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Shivam,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf.png" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shivam Wankhede</span>, a Web Developer and AI Automation Specialist. I am dedicated to solving real-world business problems through technology and continuous learning, specializing in AI agents, workflow automation, and scalable web solutions.`,
  techStack: ["React.js", "Node.js", "AI Automation"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I solve business problems",
  description:
    "I leverage modern web technologies and AI automation to streamline workflows and drive digital growth.",
  cards: [
    {
      number: "01",
      title: "Strategy & Planning",
      text: "Understanding business bottlenecks and planning tailored solutions using web technologies and AI.",
    },
    {
      number: "02",
      title: "Web Development",
      text: "Building responsive, modern websites and high-converting landing pages for seamless user experiences.",
    },
    {
      number: "03",
      title: "AI & Automation",
      text: "Developing AI receptionists, chatbots, and n8n workflows to automate repetitive tasks and save time.",
    },
    {
      number: "04",
      title: "Growth & Marketing",
      text: "Integrating CRM systems and running data-driven lead generation campaigns to scale businesses.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js & Express.js", level: 85 },
        { name: "HTML5, CSS3, JavaScript", level: 95 },
        { name: "REST APIs & Responsive Design", level: 90 }
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "Workflow Automation (n8n)", level: 92 },
        { name: "AI Agent & Chatbot Development", level: 88 },
        { name: "CRM Integration", level: 85 },
        { name: "Prompt Engineering", level: 90 }
      ]
    },
    {
      title: "Digital Marketing",
      skills: [
        { name: "Meta (Facebook & Instagram) Ads", level: 90 },
        { name: "Lead Generation", level: 95 },
        { name: "Funnel Building", level: 88 },
        { name: "Email Marketing", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "GoHighLevel & Zoho CRM", level: 85 },
        { name: "Notion & Google Workspace", level: 90 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Soft Skills & Languages",
  heading: "Communication & Adaptability",
  description: "I believe that strong communication and continuous learning are just as important as technical skills.",
  categories: [
    {
      title: "Problem Solving",
      description: "Tackling complex business logic and automating repetitive tasks efficiently.",
      stats: "Analytical",
      icon: "🧩"
    },
    {
      title: "Team Collaboration",
      description: "Working effectively with clients and cross-functional teams to deliver value.",
      stats: "Collaborative",
      icon: "🤝"
    },
    {
      title: "Time Management",
      description: "Prioritizing tasks and meeting deadlines for multiple freelance projects.",
      stats: "Efficient",
      icon: "⏳"
    },
    {
      title: "Multilingual",
      description: "Fluent in Hindi, Marathi (Native), and English (Professional Working Proficiency).",
      stats: "3 Languages",
      icon: "🗣️"
    }
  ]
};

export const leadershipList = [
  {
    title: "End-to-End Project Delivery",
    description: "Successfully built and deployed multiple websites and AI solutions from scratch for small businesses.",
    role: "Freelancer",
    badge: "Delivery"
  },
  {
    title: "Client Consultation",
    description: "Advised businesses on digital marketing strategies and workflow automation to improve efficiency.",
    role: "Consultant",
    badge: "Consulting"
  },
  {
    title: "Continuous Learning",
    description: "Constantly upskilling in modern web frameworks, AI agent development, and marketing tech.",
    role: "Developer",
    badge: "Growth"
  }
];

export const internshipsList = [
  {
    organization: "Freelance",
    role: "Web Developer & AI Automation Specialist",
    duration: "2025 - Present",
    skills: ["Web Development", "AI Chatbots", "n8n Workflows", "Lead Generation", "CRM Integration"],
    tech: ["React.js", "Node.js", "AI APIs", "GoHighLevel"]
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Finding innovative solutions to complex business workflows." },
  { name: "Communication", icon: "💬", desc: "Clear, concise interactions in English, Hindi, and Marathi." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with stakeholders to build exactly what's needed." },
  { name: "Time Management", icon: "⏰", desc: "Delivering high-quality projects on schedule." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning new AI tools and web technologies." },
  { name: "Continuous Learning", icon: "📚", desc: "Staying updated with the rapidly evolving tech landscape." }
];

export const projects = [
  {
    id: "ai-receptionist",
    number: "01",
    badge: "🚀 AI Innovation",
    title: "AI Receptionist for Dental Clinics",
    description:
      "Built an AI-powered receptionist system designed specifically for handling customer inquiries and booking appointments. Automated the lead capture and follow-up processes, significantly improving customer response times through AI automation.",
    techTags: [
      "AI Chatbot",
      "Lead Generation",
      "CRM Integration",
      "Automation"
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "business-automation",
    number: "02",
    badge: null,
    title: "AI Automation Systems for Businesses",
    description:
      "Developed robust workflow automation solutions using n8n. Successfully integrated CRM systems and automated repetitive business tasks, directly reducing manual work and overhead through AI-driven processes.",
    techTags: ["n8n", "Workflow Automation", "API Integration", "Business Logic"],
    links: {
      github: null,
      frontendDemo: null,
      backendApi: null,
    },
    isFlagship: false,
  },
  {
    id: "business-websites",
    number: "03",
    badge: null,
    title: "Business Websites & Landing Pages",
    description:
      "Designed and developed highly responsive websites for various businesses. Focused on building high-converting landing pages for lead generation, implementing modern UI/UX principles for maximum engagement.",
    techTags: ["React.js", "Responsive Design", "UI/UX", "Lead Gen"],
    links: {
      github: null,
      demo: "https://www.swarajdental.in/",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AI Agent Development",
      issuer: "Continuous Learning",
      icon: "🤖",
    },
    {
      name: "Web Development Bootcamp",
      issuer: "Self Taught",
      icon: "💻",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "AI Automation & Web Development",
  institution: "Self-Taught & Freelance Experience",
  cgpa: "N/A",
  graduation: "Present",
  twelfth: "Continuous Learner in AI Technologies",
  tenth: "Dedicated to solving real-world problems",
};

export const footerContent = {
  taglines: [
    "Web Development · AI Agents",
    "n8n Automation · CRM",
    "Lead Generation & Ads",
  ],
  credential: "AI Automation Specialist",
  copyright: `© ${new Date().getFullYear()} Shivam Wankhede | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
