import { create } from 'zustand'

// Home images
import homeImage from "../images/Home/me.png"
import logoImage from "../images/Logo/mrwhite.png"

// import hardwareImages
import Laptop from '../images/Icons/laptop.png'
import PC from '../images/Icons/pc.png'
import TroubleShooting from '../images/Icons/trouble.png'
import Installing from '../images/Icons/install.jpg'

// import software Images
import HTMLimage from '../images/Icons/html1.PNG'
import CSSimage from '../images/Icons/css.PNG'
import JSimage from '../images/Icons/js.png'
import reactimage from '../images/Icons/react.png'
import Tailwindimage from '../images/Icons/tailwind.PNG'
import Expressimage from '../images/Icons/express.png'
import Nodeimage from '../images/Icons/nodejs.png'
import Mongoimage from '../images/Icons/mongo.PNG'

// import project image
import Ordering from '../images/project/online.png'
import Todo from '../images/project/todo.png'
import Calc from '../images/project/calc.png'

// import Login and signup image
import loginImg from '../images/Logreg/log.jpg'
import regImg from '../images/Logreg/reg.jpg'

// import fb and gmail img
import fbImg from '../images/Icons/fb.png'
import gmailImg from '../images/Icons/gmail.png'

const useImageStore = create((set) => ({
  // home and logo img
  portImages: [
    {
      img: homeImage,
      name: "home",
    },{
      img: logoImage,
      name: "logo",
    }
  ],

  // Software img
  software: [
    {
      img: HTMLimage,
      name: "HTML",
    },
    {
      img: CSSimage,
      name: "CSS",
    },
    {
      img: JSimage,
      name: "Javascript",
    },
    {
      img: reactimage,
      name: "ReactJS",
    },
    {
      img: Tailwindimage,
      name: "Tailwind-CSS",
    },
    {
      img: Expressimage,
      name: "ExpressJS",
    },
    {
      img: Nodeimage,
      name: "NodeJS",
    },
    {
      img: Mongoimage,
      name: "MongoDB",
    },
  ],

  // hardware img
  hardware: [
    {
      img: Laptop,
      name: "laptop",
    },
    {
      img: PC,
      name: "pc",
    },
    {
      img: TroubleShooting,
      name: "troubleshooting",
    },
    {
      img: Installing,
      name: "installing",
    },
  ],

  // projects images
  projects: [
    {
      img: Ordering,
      name: 'Online Menu',
      link: "https://wevapp.github.io/ordering/"
    },{
      img: Todo,
      name: 'Todolist',
      link: "https://wevapp.github.io/react-references/"
    },{
      img: Calc,
      name: 'Simple Calculator',
      link: "https://wevapp.github.io/calculator/"
    },
  ],

  // Login images
  login:
    {
      img: loginImg,
    },

  // signup img 
  signup:{
      img: regImg,
    },

    fbImg: {
      img: fbImg,
    },

    gmailImg: {
      img: gmailImg,
    },
}))

export default useImageStore
