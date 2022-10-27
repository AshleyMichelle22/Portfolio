import {IoCodeWorking, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";



export const Experience = [

    {
        id: 1,
        date: "Present",
        iconsSrc: <IoCodeWorking />,
        title: "Freelance Developer",
        location: "Charlotte, NC",
        description:
          "Utlizing technical skills such as JS, React, NPM, CSS, HTML, APIS, building sites for clients.",
      },
      {
        id: 2,
        date: "2014 - Present",
        iconsSrc: <IoCodeWorking />,
        title: "Owner/Operator, MommaMays",
        location: "Charlotte, NC",
        description:
          "Owner/Operator of an online clothing store. Embroidery & Engraving. Managing customer service and requests. Desing and execute new clothing from inpiration to actual goods. Managing social media sites, shipping and receiving. Marketing and sales director roll. Invoicing and record keeping. Utilizing software programs such as adobe and more for mock up and photography",
      },
      {
        id: 3,
        date: "2012 - 2014",
        iconsSrc: <IoCodeWorking />,
        title: "Physician Subsitute",
        location: "Octapharma Plasma, Charlotte, NC",
        description:
          "Asses potential donors/health screening. Emergency assistance for donors. Communicating with Physicians, Pharmacists and Labs",
      },
      {
        id: 4,
        date: "2011 - 2012",
        iconsSrc: <IoCodeWorking />,
        title: "Pediatric Nurse",
        location: "Gastonia, NC",
        description:
          "Skilled nursing care for Pediatric patients",
      },
      
];

export const Projects = [
    {
        id: 1,
        name: "Recipe App",
        imageSrc: {img1},
        techs: "Js, CSS, HTML, API",
        github: "#",
      },
      {
        id: 2,
        name: "ECommerce Site",
        imageSrc: {img2},
        techs: "Js, HTML, CSS",
        github: "#",
      },
      {
        id: 3,
        name: "Pong Game",
        imageSrc: {img3},
        techs: "Js, CSS, HTML",
        github: "#",
      },
      {
        id: 4,
        name: "Taco-Parser ",
        imageSrc: {img4},
        techs: "C#, API",
        github: "#",
      },
      {
        id: 5,
        name: "Snake Game",
        imageSrc: {img5},
        techs: "Js, CSS, HTML",
        github: "#",
      },
      {
        id: 6,
        name: "Todo List",
        imageSrc: {img6},
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