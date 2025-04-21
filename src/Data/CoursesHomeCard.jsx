import CoursesImg1 from '../assets/images/CoursesImg1.png'
import CoursesImg2 from '../assets/images/CoursesImg2.png'
import CoursesImg3 from '../assets/images/CoursesImg3.png'
import CoursesImg4 from '../assets/images/CoursesImg4.png'
import CoursesImg5 from '../assets/images/CoursesImg5.png'
import CoursesImg6 from '../assets/images/CoursesImg6.png'
import uiimg1 from '../assets/images/ui1.png'
import uiimg2 from '../assets/images/ui2.png'
import uiimg3 from '../assets/images/ui3.png'
import web1 from '../assets/images/web1.png'
import web2 from '../assets/images/web2.png'
import web3 from '../assets/images/web3.png'
import mobile1 from '../assets/images/mobile1.png'
import mobile2 from '../assets/images/mobile2.png'
import mobile3 from '../assets/images/mobile3.png'
import Graphic1 from '../assets/images/Graphic1.png'
import Graphic2 from '../assets/images/Graphic2.png'
import Graphic3 from '../assets/images/Graphic3.png'
import front1 from '../assets/images/front1.png'
import front2 from '../assets/images/front2.png'
import front3 from '../assets/images/front3.png'



export const CoursesCard = [
    {
        id:"Web Design Fundamentals",
        img2 : web1,
        img3 : web2,
        img1 : web3,
        img :CoursesImg1 ,
        duration : "4 Weeks",
        level : "Beginner",
        coach : "By John Smith",
        title : "Web Design Fundamentals",
        desc : "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites. ",
        Curriculum: [
            { Num: "01" , desc: "Introduction to HTML" },
            { Num: "02" , desc: "Styling with CSS"},
            { Num: "03" , desc: "Introduction to Responsive Design"},
            { Num: "04" , desc: "Design Principles for Web" },
            { Num: "05" , desc: "Building a Basic Website" },
        ]
    },
    {
        id:"UI/UX Design",
        img2 : uiimg1,
        img3 : uiimg2,
        img1 : uiimg3,
        img :CoursesImg2 ,
        duration : "6 Weeks",
        level : "Intermediate",
        coach : "By Emily Johnson",
        title : "UI/UX Design",
        desc : "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques. ",
        Curriculum: [
            { Num: "01" , desc: "Introduction to UI/UX Design" },
            { Num: "02" , desc: "User Research and Personas"},
            { Num: "03" , desc: "Wireframing and Prototyping"},
            { Num: "04" , desc: "Visual Design and Branding" },
            { Num: "05" , desc: "Usability Testing and Iteration" },
        ]
    },
    {
        id:"Mobile App",
        img2 : mobile1,
        img3 : mobile2,
        img1 : mobile3,
        img : CoursesImg3,
        duration : "8 Weeks",
        level : "Intermediate",
        coach : "By David Brown",
        title : "Mobile App Development",
        desc : " Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
        Curriculum: [
            { Num: "01" , desc: "Introduction to Mobile App Development" },
            { Num: "02" , desc: "Fundamentals of Swift Programming (iOS)"},
            { Num: "03" , desc: "Fundamentals of Kotlin Programming (Android)"},
            { Num: "04" , desc: "Building User Interfaces" },
            { Num: "05" , desc: "App Deployment and Testing" },
        ]
    },
    {
        id:"Graphic Design",
        img2 : Graphic1,
        img3 : Graphic2,
        img1 : Graphic3,
        img : CoursesImg4,
        duration : "10 Weeks",
        level : "Beginner",
        coach : "By Sarah Thompson",
        title : "Graphic Design for Beginners",
        desc : "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media. ",
        Curriculum: [
            { Num: "01" , desc: "Introduction to Graphic Design" },
            { Num: "02" , desc: "Typography and Color Theory"},
            { Num: "03" , desc: "Layout Design and Composition"},
            { Num: "04" , desc: "Image Editing and Manipulation" },
            { Num: "05" , desc: "Designing for Print and Digital Media" },
        ]
    },
    {
        id:"Front-End",
        img2 : front1,
        img3 : front2,
        img1 : front3,
        img :CoursesImg5 ,
        duration : "10 Weeks",
        level : "Advance",
        coach : "By Michael Adams",
        title : "Front-End Web Development",
        desc : "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
        Curriculum: [
            { Num: "01" , desc: "HTML Fundamentals" },
            { Num: "02" , desc: "CSS Styling and Layouts"},
            { Num: "03" , desc: "JavaScript Basics"},
            { Num: "04" , desc: "Building Responsive Websites" },
            { Num: "05" , desc: "Introduction to Bootstrap and React" },
        ]
    },
    {
        img :CoursesImg6 ,
        duration : "6 Weeks",
        level : "Intermediate",
        coach : "By Jennifer Wilson",
        title : "Advanced JavaScript",
        desc : "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence. ",
    },
]