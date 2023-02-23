import features from "public/features.svg";
import solution_1 from "public/solution_1.png";
import solution_2 from "public/solution_2.png";
import solution_3 from "public/solution_3.png";
import checkImg from "public/check.svg";
import footerLogo from "../public/Logo.svg";
import twitter from "../public/twitter.svg";
import git from "../public/git.svg";
import fb from "../public/fb.svg";
import inst from "../public/inst.svg";
import lin from "../public/in.svg";

export const db = {
  features: [
    {
      id: "1",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
    {
      id: "2",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
    {
      id: "3",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
    {
      id: "4",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
    {
      id: "5",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
    {
      id: "6",
      title: "Instant Features",
      icon: features,
      description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.`,
    },
  ],
  stepCard: [
    {
      id: "10",
      title: "More speed. Less spend",
      head: "Keep projects on schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: solution_1,
      stepList: [
        {
          id: "100",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "300",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "500",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
      ],
    },
    {
      id: "20",
      title: "More speed. Less spend",
      head: "Keep projects on schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: solution_2,
      stepList: [
        {
          id: "200",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "300",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "400",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
      ],
    },
    {
      id: "30",
      title: "More speed. Less spend",
      head: "Keep projects on schedule",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: solution_3,
      stepList: [
        {
          id: "700",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "800",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
        {
          id: "900",
          icon: checkImg,
          text: "Duis aute irure dolor in reprehenderit",
        },
      ],
    },
  ],
  cards: [
    {
      id: "50",
      text: `— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.
       I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
      icon: "",
      userName: "Anastasia Dan ",
      userRol: "/ UX Board",
    },
    {
      id: "60",
      text: `— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.
       I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
      icon: "",
      userName: "Anastasia Dan ",
      userRol: "/ UX Board",
    },
    {
      id: "70",
      text: `— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work.
       I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
      icon: "",
      userName: "Anastasia Dan ",
      userRol: "/ UX Board",
    },
  ],
  footer: {
    logo: footerLogo,
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    copyRight: "Made by Cruip. All right reserved",
    list: [
      {
        id: "01",
        listTitle: "Products",
        listItem: ["Web Studio", "DynamicBox Flex", "Programming Forms"],
      },
      {
        id: "02",
        listTitle: "Resources",
        listItem: [
          "Nostrud exercitation",
          "Visual mockups",
          "Nostrud exercitation",
          "Visual mockups",
          "Nostrud exercitation",
        ],
      },
      {
        id: "03",
        listTitle: "Company",
        listItem: [
          "Consectetur adipiscing",
          "Labore et dolore",
          "Consectetur adipiscing",
          "Labore et dolore",
          "Consectetur adipiscing",
        ],
      },
    ],
    socialMedia: [
      {
        id: "20",
        url: twitter,
      },
      {
        id: "30",
        url: git,
      },
      {
        id: "40",
        url: fb,
      },
      {
        id: "50",
        url: inst,
      },
      {
        id: "60",
        url: lin,
      },
    ],
  },
};
