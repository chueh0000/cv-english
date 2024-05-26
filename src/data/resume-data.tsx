import {
} from "@/images/logos";
import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "闕中豪 Chueh Chung Hao",
//   initials: "CCH",
  location: "Taiwan",
  locationLink: "https://maps.app.goo.gl/hvh9kTr7z278B9Ae7",
  about:
    "Student at National Taiwan University majored in Computer Science and Information Engineering",
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
      school: "國立臺灣大學",
    //   school: "National Taiwan University",
      degree: "資訊工程學系 三年級",
    //   degree: "Bachelor's Degree in Computer Science and Information Engineering",
      start: "2021",
      end: "迄今",
    },
    {
      school: "臺中市立臺中第一高級中等學校",
    //   school: "Taichung Municipal Taichung First Senior High School",
      degree: "普通科",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "臺大身心障礙學生權益促進會",
      link: "https://www.facebook.com/NTUDSRA/",
      badges: [],
      title: "總務 → 社長",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "提供身心障礙學生相互交流之平台，並舉辦障礙議題講座，提升大眾對障礙者的認知",
    },
    {
      company: "特殊教育推行委員會",
      link: "",
      badges: [],
      title: "委員（學生代表）",
    //   logo: ,
      start: "2023",
      end: "2024",
      description:
        "代表身心障礙學生爭取學生權益，建構友善、無障礙的校園環境",
    },
    {
      company: "學生申訴評議委員會",
      link: "",
      badges: [],
      title: "委員（身心障礙學生代表）",
    //   logo: ,
      start: "2022",
      end: "2024",
      description:
        "審議學生申訴案件",
    },
    {
      company: "臺大單車社",
      link: "https://www.instagram.com/ntu_cycling_club",
      badges: [],
      title: "庶務",
    //   logo: ,
      start: "2022",
      end: "2023",
      description:
        "管理及維護社團單車，並舉辦騎乘活動，帶領社員完成「北進武嶺」、「蘇花公路」、「花東縱谷」",
    },
  ],
  skills: [
    "C",
    "Python",
    "Git",
    "Unix",
  ],
  languages: [
    "多益英語檢定 915分",
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
