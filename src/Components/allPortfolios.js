import todoList from "../img/todo-list.png";
import ec_home from "../img/ec-home.png";
import bandSocial from '../img/band-social.png'
import port3 from "../img/portImages/port2.jpg";
import port4 from "../img/portImages/port3.jpg";
import port6 from "../img/portImages/port5.jpg";
import port7 from "../img/portImages/port6.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const portfolios = [
  {
    id: 1,
    category: "React Js",
    link1: "http://143.198.137.118:4001/",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: ec_home,
    title: "Ecuadorian Food Ordering App",
    description: "test",
  },
  {
    id: 2,
    category: "React Js",
    link1: "https://github.com/juancedeno96/todo-list",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: todoList,
    title: "Todo-List",
    description: "Todo list created with React",
  },
  {
    id: 3,
    category: "Javascript",
    link1: "https://github.com/juancedeno96/kaboom-game",
    link2: "www.github.com",
    icon1: faGithub,
    icon2: "Y",
    image: port3,
    title: "Kaboom Game",
    description: "Simple Kaboom.Js game ",
  },
  {
    id: 4,
    category: "Javascript",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port4,
    title: "Band Social",
    description: "test",
  },
  {
    id: 5,
    category: "React Js",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port6,
    title: "Getting Started With React",
    description: "test",
  },
  {
    id: 6,
    category: "React Js",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: port7,
    title: "Vanilla Javascript Website",
    description: "test",
  },
  {
    id: 7,
    category: "React Js",
    link1: "https://github.com/Hobby-Social-Media-wr8/hobby-social-media-wr8",
    link2: "www.github.com",
    icon1: "G",
    icon2: "Y",
    image: bandSocial,
    title: "Band Social",
    description: "Social Media app for Bands looking to connect",
  },
];

export default portfolios;