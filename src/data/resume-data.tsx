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
    {
      company: "NTU Disabled Students' Rights Association",
      link: "https://www.facebook.com/NTUDSRA/",
      badges: [],
      title: "Treasurer → President",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "Provide a platform for students with disabilities to interact with each other, and organize lectures on disability issues to enhance the public's awareness of people with disabilities.",
    },
    {
      company: "Special Education Promotion Committee",
      link: "",
      badges: [],
      title: "Committee Member (Student Representative)",
    //   logo: ,
      start: "2023",
      end: "2024",
      description:
        "Advocate for the rights of students with disabilities and create a friendly, accessible campus environment.",
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
