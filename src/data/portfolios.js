// import css1 from '../img/portImages/cv_css.png';
import p1 from '../img/portImages/1.png';
import p2 from '../img/portImages/2.png';
import p3 from '../img/portImages/3.png';

const portfolios = [
    {
        id: 1,
        category: 'Web Application',
        image: p1,
        link1: 'https://github.com/vishalpatil12014017/Zoomcar_backend',
        // link2: 'https://zoomcarcom.herokuapp.com',
        title: 'Zoomcar Clone',
        text: 'To build this application we used HTML, CSS, JavaScript, and EJS. In addition, we used Express Js to provide the backend.',
        text1: " : HTML | CSS | JavaScript | MongoDb | Express Js"
    },
    {
        id: 2,
        category: 'Web Application',
        image: p2,
        link1: 'https://github.com/vishalpatil12014017/TravelTech',
        // link2: 'https://aazadi-traveltech.vercel.app/',
        title: 'TravelTech',
        text: 'We used React Js and Bootstrap to build this application. We used Express Js to make the backend for this application.',
        text1: " : React Js | Bootstrap | MongoDb | Express Js"
    },
    {
        id: 3,
        category: 'Web Application',
        image: p3,
        link1: 'https://github.com/vishalpatil12014017/Discoveryplus.in',
        link2: 'https://discoveryplusclone-in-vishal-patil.vercel.app/',
        title: 'Discovery+',
        text: 'In this application we have used React.js and Bootstrap. Additionally, we are using Express.js for the backend.',
        text1: " : React Js | MUI | Bootstrap | MongoDb | Express Js"
    }
]

export default portfolios;