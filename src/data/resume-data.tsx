import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "闕中豪 Chueh Chung Hao",
//   initials: "CCH",
  location: "Taiwan",
  locationLink: "https://maps.app.goo.gl/hvh9kTr7z278B9Ae7",
  about:
    "Student at National Taiwan University major in Computer Science and Information Engineering",
  summary:
    "",
  avatarUrl: "",
  personalWebsiteUrl: "https://chueh-chung-hao.vercel.app/",
  contact: {
    email: "b10902076@csie.ntu.edu.tw",
    tel: "(+886)971612015",
    social: [
        {
          name: "GitHub",
          text: "chueh0000",
          url: "https://github.com/chueh0000",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          text: "Chung Hao Chueh",
          url: "https://www.linkedin.com/in/chung-hao-chueh-7b939031a",
          icon: LinkedInIcon,
        }
      ],
  },
  jobObjectives: {
    company: "",
    positions: "",
  },
  education: [
    {
      school: "National Taiwan University",
      degree: "5th Year, Computer Science and Information Engineering",
      start: "2021",
      end: "Expected June 2026",
      description: "UNIX System Programming, Parallel Programming, Web Programming and Applications\n\
                    Computer Architecture, Computer Networks, Operating Systems\n\
                    Digital Systems Design and Laboratory, Computer System Laboratory, Practical Digital Electronics\n\
                    Foundations of Artificial Intelligence, Introduction to Generative Artificial Intelligence\n\
                    Engineering Design and Implementation for Sustainable Development\n\
                    Introduction to Intelligent Vehicles",
    },
    {
      school: "Taichung Municipal Taichung First Senior High School",
      degree: "General Subjects",
      start: "2018",
      end: "2021",
      description: "",
    },
  ],
  work: [
    {
      company: "Big Data Mobile",
      link: "",
      badges: ["Django", "React", "Docker", "Git"],
      title: "Summer Intern - Backend Web Developer",
    //   logo: ,
      start: "2025.07",
      end: "2025.08",
      description:
        "Integrate Django Allauth to enable OAuth capabilities on the existing user login flow and database\n\
        Complete version upgrade for the backend API documentation, ensuring accuracy and compliance with new API endpoints",
    },
  ],
  groupProjects: [
    {
      title: "Line Chatbot for Long-Term Care Facilities",
      link: "https://github.com/chueh0000/ai-line-chatbot",
      badges: ["Next.js", "Vercel", "Neon (serverless PostgreSQL)"],
      where: "Engineering Design and Implementation for Sustainable Development, National Taiwan University",
      //   logo: ,
      start: "2025.03",
      end: "2025.06",
      description:
        "Collaborate on the full-stack development of a serverless Line chatbot for long-term care facilities\n\
        Reduce communication costs and increase transparency for residents' family members\n\
        Integrated the Line Login feature for secure user authentication and deployed the entire application on Vercel",
    },
    // {
    //   title: "Expense-Splitting Website",
    //   link: "https://github.com/SinyinChang/Team18-Final-Project",
    //   badges: ["Django", "Docker", "Git"],
    //   where: "Web Programming and Applications, National Taiwan University",
    //   //   logo: ,
    //   start: "2025.03",
    //   end: "2025.06",
    //   description:
    //     "Collaborate to develop an expense-splitting website using Django and containerize with Docker",
    // },
    {
      title: "Refreshable Braille Display",
      link: "https://github.com/chueh0000/Refreshable-Braille-Display",
      badges: ["Javascript", "ESP32", "Circuit Design", "3D Printing"],
      where: "Practical Digital Electronics, National Taiwan University",
      //   logo: ,
      start: "2025.03",
      end: "2025.06",
      description:
        "Collaborate to create a refreshable braille display, serving as a proof-of-concept for a portable dynamic tactile map\n\
        Aim to improve navigation for people with visual disabilities, addressing critical limitations of existing technologies",
    },
    {
      title: "AI-powered Realtime Speech Summarization",
      link: "https://github.com/chueh0000/Realtime-Speech-Summary",
      badges: ["Python", "OpenAI Whisper", "Gemini API", "Streamlit"],
      where: "Microsoft Engage — Training Program for University Students with Disabilities",
      //   logo: ,
      start: "2024.07",
      end: "2024.08",
      description:
        "Collaborate to develop an AI-powered realtime speech summarization software in less than one month\n\
        OpenAI Whisper for speech-to-text conversion, Google Gemini for summarization, and Streamlit for the prototype",
    },
  ],
  extracurricular: [
    {
      association: "Disabled Students' Rights Association, National Taiwan University",
      link: "https://www.facebook.com/NTUDSRA/",
      badges: [],
      title: "Treasurer → President",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "Provide community and peer support for students with disabilities\n\
        Assist the college in creating a friendly and accessible campus environment for students with disabilities\n\
        Actively collaborate with external partners and the NTNU Disability Students’ Rights Association to jointly organize the first Youth Disability Rights Empowerment Camp",
    },
    // {
    //   association: "Special Education Promotion Committee, National Taiwan University",
    //   link: "https://intriguing-product-094.notion.site/2629b4df7459473a8b3734fc3becd73b?v=3ce71c9085134bc8b424ce622d8526d3&pvs=4",
    //   badges: [],
    //   title: "Committee Member (Student Representative)",
    // //   logo: ,
    //   start: "2023",
    //   end: "2024",
    //   description:
    //     "Assist the college in creating a friendly and accessible campus environment for students with disabilities\n\
    //     Publicly share the progress of meeting proposals through a Notion webpage, ensuring the openness and accessibility of information",
    // },
    // {
    //   association: "Student Grievance Review Committee, National Taiwan University",
    //   link: "",
    //   badges: [],
    //   title: "Committee Member (Disabled Student Representative)",
    // //   logo: ,
    //   start: "2022",
    //   end: "2024",
    //   description:
    //     "Review student grievance cases",
    // },
    {
        association: "Cycling Club, National Taiwan University",
        link: "https://www.instagram.com/ntu_cycling_club",
        badges: [],
        title: "General Affairs",
        //   logo: ,
        start: "2022",
        end: "2023",
        description:
            "Manage, repair, and maintain the club's bicycles\n\
            Organize riding events and lead members to complete multi-day long rides",
    },
  ],
  skills: [
    "C",
    "Python",
    "Git",
    "Unix",
    "Verilog",
    "CUDA C/C++",
    "Javascript",
    "Next.js",
    "Django",
    "Docker",
    "Vercel"
  ],
  certificates: [
    "TOEIC 915",
    "Fundamentals of Accelerated Computing with CUDA C/C++"
  ],
  projects: [
    // {
    //   title: "",
    //   techStack: [
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //   ],
    //   description: "",
    //   logo: ,
    //   link: {
    //     label: "",
    //     href: "",
    //   },
    // },
  ],
} as const;
