import LQDP1 from '../assets/projects-images/LQDP/Le-Quartier-Des-Plaisirs1.png'
import LQDP2 from '../assets/projects-images/LQDP/Le-Quartier-Des-Plaisirs2.png'
import LQDP3 from '../assets/projects-images/LQDP/Le-Quartier-Des-Plaisirs3.png'

import lego1 from '../assets/projects-images/legoPython/Travelling salesman problem1.png'
import lego2 from '../assets/projects-images/legoPython/Travelling salesman problem2.png'
import lego3 from '../assets/projects-images/legoPython/Travelling salesman problem3.png'

import rpg2 from '../assets/projects-images/RPG/RPG_JAVA1.png'
import rpg1 from '../assets/projects-images/RPG/RPG_JAVA2.png'
import rpg3 from '../assets/projects-images/RPG/RPG_JAVA3.png'

import airjar1 from '../assets/projects-images/AirJar/Air-Jar1.png'
import airjar2 from '../assets/projects-images/AirJar/Air-Jar2.png'
import airjar3 from '../assets/projects-images/AirJar/Air-Jar3.png'

import lp1 from '../assets/projects-images/loup-garou/lp1.jpg'
import lp2 from '../assets/projects-images/loup-garou/lp2.png'
import lp3 from '../assets/projects-images/loup-garou/lp3.png'

import gl21 from '../assets/projects-images/questions-generator/gl02-1.png'
import gl22 from '../assets/projects-images/questions-generator/gl02-2.png'
import gl23 from '../assets/projects-images/questions-generator/gl02-3.png'

import cs1 from '../assets/projects-images/client-server-chat/client-server-chat1.png'
import cs2 from '../assets/projects-images/client-server-chat/client-server-chat2.png'
import cs3 from '../assets/projects-images/client-server-chat/client-server-chat3.png'

import climb1 from '../assets/projects-images/Climb/climbing.jpg'
import climb2 from '../assets/projects-images/Climb/climbing2.png'
export const projects = [
      {
      title: "Climbing Application (Work In progress)",
      description:
        "A mobile app for climbers to log their routes",
      images: [climb1, climb2],
      languages: "Typescript, React Native",
      date: "January 2026",
      moreInfo: "A mobile app for climbers to log boulders and routes with grades, and view their climbing history. Building with React Native, Expo, and Appwrite."
    },
    {
      title: "Questions Generator",
      description:
        "Command line tool that parse .gift files and create a bank of questions in Node",
      images: [gl21, gl22, gl23],
      languages: "Javascript (Node.js)",
      date: "OCT-2022 / JAN-2023",
      moreInfo: "Led a team of 4 members for a project that parses .gift files and creates a bank of questions. This project involved conception with creation of scope statements, coding and testing. ",
      link: "https://github.com/Matthieu-Tran/questions-generator",
    },
    {
      title: "Food Blog",
      description:
        "Project that recreates a Food Blog",
      images: [LQDP1, LQDP2, LQDP3],
      languages: "HTML / CSS / PHP / MySQL/ Bootstrap",
      date: "OCT-2021 / DEC-2021",
      moreInfo: "This project that I built with a pair is recreating a Food-Blog where users can post food recipe. They have to sign-up / sign-in in order to create / comment / rate the others members recipe. There is also a backend with PHP with a database in SQL that we created. The admin of the blog can add / remove moderator from the website.",
      link: "https://github.com/Matthieu-Tran/Food-Blog",
    },
    {
      title: "Travelling salesman problem",
      description:
        "Python program that reproduce the travelling salesman problem in Python",
      images: [lego1, lego2, lego3],
      languages: "Python",
      date: "MAY 2022",
      moreInfo: "Program in Python that imitates the travelling salesman problem but with legos. To make short, the Traveling Salesman Problem (TSP) seeks the shortest route visiting cities and returning to start. It is NP-hard, so approximations are used. It has practical applications in various fields. In this program it has to find the best lego tower between 4 different creteria: the diversity of legos, the tower with the most red legos, the heighest tower or the smallest one",
      link: "https://github.com/Matthieu-Tran/Travelling-salesman-problem",
    },
    {
      title: "RPG",
      description:
        "Command line RPG in JAVA",
      images: [rpg2, rpg1, rpg3],
      languages: "Java",
      date: "OCT-2021 / NOV-2021",
      moreInfo: "Small Role Play Game in a command line written in Java. It features the use of nested enums, fields, constructors, getters, setters, random number generation, error checking, and the implementation of the hashCode, equals and toString methods. It also includes unit testing",
      link: "https://github.com/Matthieu-Tran/rpg-command-line",
    },
    {
      title: "E-Commerce Website",
      description:
        "Website written in HTML / CSS that describes an imaginary e-commerce",
      images: [airjar1, airjar2, airjar3],
      languages: "HTML / CSS / JavaScript",
      date: "OCT-2020",
      moreInfo: "Created a front-end web application using HTML and CSS to describe an imaginary company by leveraging JavaScript map integration.",
      link: "https://github.com/Matthieu-Tran/AirJar",
    },
    {
      title: "Discord Bot",
      description:
        "Discord bot in Javascript",
      images: [lp1, lp2, lp3],
      languages: "Javascript",
      date: "March 2021",
      moreInfo: "Developed a discord bot that recreated the card game, The Werewolves of Millers Hollow, that handled the basic game commands.",
      link: "https://github.com/Matthieu-Tran/discord-bot-werewolves",
    },
    {
      title: "Client Server Chat",
      description:
        "Java project implementing a client-server chat app using socket programming.",
      images: [cs1, cs2, cs3],
      languages: "Java",
      date: "January 2022",
      moreInfo: "Project that implements a simple chat application using a client-server architecture in Java. It uses Java's built-in socket programming capabilities to handle communication between the client and server. The server listens for incoming connections from clients and the clients can connect to the server and send messages to it. The server then broadcast the messages to all connected clients.",
      link: "https://github.com/Matthieu-Tran/client-server-chat",
    },
  ];