import {
} from "@/images/logos";
import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "闕中豪 Chueh Chung Hao",
//   initials: "CCH",
  location: "Taiwan",
  locationLink: "https://maps.app.goo.gl/hvh9kTr7z278B9Ae7",
  about:
    "Student at National Taiwan University major in Computer Science and Information Engineering",
  summary:
    "",
  avatarUrl: "https://drive.google.com/a/g.ntu.edu.tw/thumbnail?id=1VbKRC073t_dflOUn22imdybCLDtJYK3E",
//   personalWebsiteUrl: "",
  contact: {
    email: "b10902076@csie.ntu.edu.tw",
    tel: "0971612015",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chueh0000",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "National Taiwan University",
      degree: "3rd Year, Computer Science and Information Engineering",
      start: "2021",
      end: "Now",
    },
    {
      school: "Taichung Municipal Taichung First Senior High School",
      degree: "General Subjects",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
        company: "Microsoft Engage — Training Program for University Students with Disabilities",
        link: "",
        badges: [],
        title: "",
        //   logo: ,
        start: "2024.07",
        end: "2024.08",
        description:
            "Starting with the idea of creating an accessibility tool, our team collaborated to develop a real-time speech summary software. We used OpenAI Whisper for speech-to-text conversion and Google Gemini for summarization, and finally deployed the web application using Streamlit.",
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
        "Provide a platform for students with disabilities to interact with each other and hold seminars on disability issues to raise public awareness. We also actively collaborate with external partners and the NTNU Disability Students’ Rights Association to jointly organize the first Youth Disability Rights Empowerment Camp. Additionally, we plan to establish the Taiwan Youth Disability Association to unite the voices of the younger generation of people with disabilities, promote interaction and connections, and form a community with a shared identity.",
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
        "Advocate for the rights of students with disabilities and create a friendly, accessible campus environment. Additionally, we ensure the openness and accessibility of information by publicly sharing the progress of meeting proposals through a Notion webpage.",
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
        "Review student grievance cases.",
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
            "Manage and maintain the club's bicycles, organize riding events, and lead members to complete \"Northern Approach to Wuling\", \"Suhua Highway\", and \"Hualien-Taitung Valley\" rides.",
    },
  ],
  skills: [
    "C",
    "Python",
    "Git",
    "Unix",
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
