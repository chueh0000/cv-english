import {
} from "@/images/logos";
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
    // https://drive.google.com/file/d/1KvcMGTF50KMkqn4CTyNuwvzM5wPjde6p/view?usp=drive_link
  avatarUrl: "https://drive.google.com/a/g.ntu.edu.tw/thumbnail?id=1KvcMGTF50KMkqn4CTyNuwvzM5wPjde6p",
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
  education: [
    {
      school: "National Taiwan University",
      degree: "4th Year, Computer Science and Information Engineering",
      start: "",
      end: "Expected June 2026",
      description: "UNIX System Programming\n\
                    Computer Architecture\n\
                    Computer Networks\n\
                    Parallel Programming\n\
                    Digital Systems Design and Laboratory\n\
                    Computer System Laboratory\n\
                    Foundations of Artificial Intelligence\n\
                    Introduction to Generative Artificial Intelligence\n\
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
        company: "Microsoft Engage — Training Program for University Students with Disabilities",
        link: "https://github.com/chueh0000/Realtime-Speech-Summary",
        badges: [],
        title: "",
        //   logo: ,
        start: "2024.07",
        end: "2024.08",
        description:
            "Starting with the idea of creating an accessibility tool, our team collaborated to develop a real-time speech summary software in less than one month\n\
            Using OpenAI Whisper for speech-to-text conversion, Google Gemini for summarization, and created the prototype with Streamlit\n\
            Our source code is public on GitHub, where we utilized the collaboration and version control features",
    },
    {
      company: "NTU Disabled Students' Rights Association",
      link: "https://www.facebook.com/NTUDSRA/",
      badges: [],
      title: "Treasurer → President",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "Provide a platform for students with disabilities to interact with each other\n\
        Hold seminars on disability issues to raise public awareness\n\
        Actively collaborate with external partners and the NTNU Disability Students’ Rights Association to jointly organize the first Youth Disability Rights Empowerment Camp\n\
        Plan to establish the Taiwan Youth Disability Association to unite the voices of the younger generation of people with disabilities, promote interaction and connections, and form a community with a shared identity",
    },
    {
      company: "Special Education Promotion Committee",
      link: "https://intriguing-product-094.notion.site/2629b4df7459473a8b3734fc3becd73b?v=3ce71c9085134bc8b424ce622d8526d3&pvs=4",
      badges: [],
      title: "Committee Member (Student Representative)",
    //   logo: ,
      start: "2023",
      end: "2024",
      description:
        "Assist the school in creating a friendly and accessible campus environment\n\
        Ensure the openness and accessibility of information by publicly sharing the progress of meeting proposals through a Notion webpage",
    },
    {
      company: "Student Grievance Review Committee",
      link: "",
      badges: [],
      title: "Committee Member (Disabled Student Representative)",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "Review student grievance cases",
    },
    {
        company: "NTU Cycling Club",
        link: "https://www.instagram.com/ntu_cycling_club",
        badges: [],
        title: "General Affairs",
        //   logo: ,
        start: "2022",
        end: "2023",
        description:
            "Manage, repair, and maintain the club's bicycles\n\
            Organize riding events, and lead members to complete \"Cycling around Taiwan\", \"Northern Approach to Wuling\", \"Suhua Highway\", and \"Hualien-Taitung Valley\" rides",
    },
  ],
  skills: [
    "C",
    "Python",
    "Git",
    "Unix",
    "Verilog",
    "CUDA C/C++",
  ],
  languages: [
    "TOEIC 915",
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
