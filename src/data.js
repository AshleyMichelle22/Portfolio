import {IoCodeWorking, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';
import img1 from "./imagesdesk/img1.jpg";
import img2 from "./imagesdesk/img2.jpg";
import img3 from "./imagesdesk/img3.jpg";
import img4 from "./imagesdesk/img4.jpg";
import img5 from "./imagesdesk/img5.jpg";
import img6 from "./imagesdesk/img6.jpg";



export const Experience = [

    {
        id: 1,
        date: "2016 - present",
        iconsSrc: <IoCodeWorking />,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      },
      {
        id: 2,
        date: "2014 - 2016",
        iconsSrc: <IoCodeWorking />,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      },
      {
        id: 3,
        date: "2012 - 2014",
        iconsSrc: <IoCodeWorking />,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      },
      {
        id: 4,
        date: "2011 - 2012",
        iconsSrc: <IoCodeWorking />,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      },
      {
        id: 5,
        date: "2010 - 2011",
        iconsSrc: <IoCodeWorking />,
        title: "Creative Director",
        location: "Doha, Qatar",
        description:
          "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
      }, 
];

export const Projects = [
    {
        id: 1,
        name: "Recipe App",
        imageSrc: "img1",
        techs: "Js, CSS, HTML, API",
        github: "#",
      },
      {
        id: 2,
        name: "ECommerce Site",
        imageSrc: "img2",
        techs: "Js, HTML, CSS",
        github: "#",
      },
      {
        id: 3,
        name: "Pong Game",
        imageSrc: "img3",
        techs: "Js, CSS, HTML",
        github: "#",
      },
      {
        id: 4,
        name: "Taco-Parser ",
        imageSrc: "img4",
        techs: "C#, API",
        github: "#",
      },
      {
        id: 5,
        name: "Snake Game",
        imageSrc: "img5",
        techs: "Js, CSS, HTML",
        github: "#",
      },
      {
        id: 6,
        name: "Todo List",
        imageSrc: "img6",
        techs: "Js, CSS, HTML",
        github: "#",
      },
];

export const SocialLinks = [
    {
        id: 1,
        iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
        name: "GitHub",
        link: "https://github.com/AshleyMichelle22?tab=repositories",
      },
      {
        id: 2,
        iconSrc: (
          <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
        ),
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ashley-tucker-ba5675247/",
      },
      



];