import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/drumkitmockup.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Youssef",
    lastName: "HIMMI",
    initials: "YH",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        { emoji: '☕', text: 'fueled by coffee' },
        { emoji: '🌎', text: 'based in Morocco' },
        { emoji: "💼", text: "Software Engineer" },
        { emoji: "📧", text: "yhimmi1@gmail.com" }
    ],
    socials: [
        { link: 'https://github.com/youssefamjad1', icon: 'bxl-github', label: 'GitHub' },
        { link: 'https://www.linkedin.com/in/youssef-himmi-34118989/', icon: 'bxl-linkedin', label: 'LinkedIn' },
        { link: 'https://twitter.com/myprofile', icon: 'bxl-twitter', label: 'Twitter' },
        { link: 'https://facebook.com/myprofile', icon: 'bxl-facebook', label: 'Facebook' },
        { link: 'https://instagram.com/myprofile', icon: 'bxl-instagram', label: 'Instagram' }
    ],
    bio: "Hello! I'm Youssef Himmi. I'm a Full Stack Developer specializing in the MERN stack. I studied Computer Science and have earned certifications from freeCodeCamp and Udemy. I enjoy exploring new technologies, and I believe in the power of web development to transform businesses. Let's work together to bring your ideas to life!",
    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'Node JS', 'EXPRESS', 'MONGODB', 'POSTGRESQL'],
        exposedTo: ['PHP', 'Adobe Photoshop', 'adobe illustrator']
    },
    hobbies: [
        { label: 'fishing', emoji: '🎣' },
        { label: 'football', emoji: '⚽' },
        { label: 'swimming', emoji: '🏊' }
    ],
    portfolio: [
        {
            title: "Ecommerce MWK SHOP",
            live: "https://66a80046043cec0008af93b0--a2y.netlify.app/",
            source: "https://github.com/paytonjewell",
            image: mock1
        },
        {
            title: "A2 ENERGIZE Website Project",
            live: "https://66892ae4eba2bb0008d277e5--a2energize.netlify.app/",
            source: "https://github.com/youssefamjad1/A2-ENERGIZE-Website",
            image: mock2
        },
        {
            title: "Personal Portfolio",
            live: "https://youssefamjad1.github.io/YHPortfolio/",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Drum Kit",
            live: "https://66a6372c1bcea700086fa9cb--mydrumkityh.netlify.app/",
            source: "https://github.com/youssefamjad1/DrumKit",
            image: mock4
        }
    ]
};
