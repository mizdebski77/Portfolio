import ee from '../Images/Project/EasyEmploy.png';
import tk from '../Images/Project/TrekShop.png';
import pp from '../Images/Project/PolskiePaulownie.png';
import ms from '../Images/Project/Mstach.png';
import wt from '../Images/Project/WeatherApp.png';
import mb from '../Images/Project/MovieBorwser.png';
import ca from '../Images/Project/Crud.png';
import tl from '../Images/Project/tasksList.png';
import df from '../Images/Project/Dish form.png';
import pf from '../Images/Project/Portfolio.png';
import ta from '../Images/Project/ta.png';

export const projects = [
    {
        id: 1,
        name: 'Easy-Employ',
        description: 'Easy Employ is a portal dedicated to employers and those looking for a job. Application under construction.',
        tags: [
            'REACT',
            'TYPESCRIPT',
            'REDUX',
            'STYLED-COMPONENTS',
            'GIT',
            'TANSTACK-QUERY',
        ],
        image: ee,
        liveUrl: 'https://mizdebski77.github.io/Easy-Employ/',
        codeUrl: 'https://github.com/mizdebski77/Easy-Employ',
        APIlink: 'https://esay-employ-database-wfsz.onrender.com/',
    },

    {
        id: 2,
        name: 'Trek-Shop',
        description: 'Trek Shop is an online store that relies on its own API written in Node.js and hosted online, making it accessible to users. This project was created with outdoor enthusiasts in mind, offering a rich variety of products, including climbing equipment, outdoor clothing, and more.',
        tags: [
            'REACT',
            'REDUX',
            'TYPESCRIPT',
            'STYLED-COMPONENTS',
            'GIT',
            'TANSTACK-QUERY',
        ],
        image: tk,
        liveUrl: 'https://mizdebski77.github.io/Trek-Shop/',
        codeUrl: 'https://github.com/mizdebski77/Trek-Shop',
        APIlink: 'https://trek-shop-database.onrender.com/',
    },

    {
        id: 3,
        name: 'Polskie Paulownie',
        description: '"Polskie Paulownie"is a landing page project dedicated to a company that sells oxygen trees. On the website you can find sections such as, among others, photo gallery, contact, and characteristics of the company`s activities.',
        tags: [
            'REACT',
            'REACT ROUTER',
            'TYPESCRIPT',
            'STYLED-COMPONENTS',
            'GIT',
        ],
        image: pp,
        liveUrl: 'https://polskiepaulownie.pl/Strona-G%C5%82%C3%B3wna',
        codeUrl: '',
        APIlink: '',
    },

    {
        id: 4,
        name: 'Mirosław Stach',
        description: 'Mirsoław Stach, a client of mine, commissioned a website for his service company named "Mirsoław Stach - Firma Usługowa". The website provides basic information about the company.',
        tags: [
            'REACT',
            'REACT ROUTER',
            'TYPESCRIPT',
            'STYLED-COMPONENTS',
            'GIT',
        ],
        image: ms,
        liveUrl: 'https://www.miroslawstach.pl/home',
        codeUrl: '',
        APIlink: '',
    },

    {
        id: 5,
        name: 'Wheather App',
        description: 'The weather app is a one-page application that allows you to check the current weather in any city on earth. The app fetches data from "https://www.weatherapi.com/".',
        tags: [
            'REACT',
            'REDUX',
            'JAVASCRIPT',
            'STYLED-COMPONENTS',
            'GIT',
            'REDUX-SAGA',
        ],
        image: wt,
        liveUrl: 'https://mizdebski77.github.io/Weather-React-Redux-App/',
        codeUrl: 'https://github.com/mizdebski77/Weather-React-Redux-App',
        APIlink: 'https://www.weatherapi.com/',
    },

    {
        id: 6,
        name: 'Movie Browser',
        description: 'The Movies Browser is a platform you can easily search for your favorite movies, popular actors and actresses. Also you can find more information about the cast.',
        tags: [
            'REACT',
            'REDUX',
            'REDUX-SAGA',
            'JAVASCRIPT',
            'STYLED-COMPONENTS',
            'GIT',
        ],
        image: mb,
        liveUrl: 'https://mizdebski77.github.io/Movie-Browser/',
        codeUrl: 'https://github.com/mizdebski77/Movie-Browser',
        APIlink: 'https://developer.themoviedb.org/docs/getting-started',
    },

    {
        id: 7,
        name: 'Crud App',
        description: 'This application has been created as a part of a recruitment task. The purpose of the app is to demonstrate the ability to develop a CRUD (Create, Read, Update, Delete) application for campaign management. This app allows users to add, edit, and delete campaigns.',
        tags: [
            'ANGULAR',
            'SCSS',
            'JAVASCRIPT',
            'HTML',
            'GIT',
        ],
        image: ca,
        liveUrl: 'https://crudaplication.netlify.app/',
        codeUrl: 'https://github.com/mizdebski77/crud-app-angular',
        APIlink: '',
    },

    {
        id: 8,
        name: 'Tasks List',
        description: '"To do list" is a web application which allows you to create a list of tasks that need to be done in the near future. At the top of application you can see a navigation toolbar which can take you to tasks page or to an author page.',
        tags: [
            'REACT',
            'STYLED COMPONENTS',
            'REDUX',
            'REDUX SAGA',
            'GIT',
        ],
        image: tl,
        liveUrl: 'https://mizdebski77.github.io/Tasks-List-ReactJS/',
        codeUrl: 'https://github.com/mizdebski77/Tasks-List-ReactJS',
        APIlink: '',
    },

    {
        id: 9,
        name: 'Dish Form',
        description: 'Dish Form is a simple project that enables users to upload information about specific dishes to a website. The form includes fields such as dish name, preparation time, dish type (pizza, soup, or sandwich to choose from), as well as details depending on the selected type, such as the number of slices, diameter, spiciness , or number of bread slices',
        tags: [
            'REACT',
            'STYLED COMPONENTS',
            'REDUX',
            'HTML & CSS',
            'GIT',
        ],
        image: df,
        liveUrl: 'https://mizdebski77.github.io/Dish-Form/',
        codeUrl: 'https://github.com/mizdebski77/Dish-Form?tab=readme-ov-file',
        APIlink: '',
    },

    {
        id: 10,
        name: 'Portfolio',
        description: 'Portfolio" is your gateway to essential information about me. From contact details to skills and education, this website is crafted using technologies like React, Styled Components, MUI, and seamlessly integrated with Github. HTML & CSS enhance its user-friendly interface, providing a concise yet comprehensive snapshot of who I am',
        tags: [
            'REACT',
            'STYLED COMPONENTS',
            'MUI',
            'HTML & CSS',
            'GIT',
        ],
        image: pf,
        liveUrl: 'http://marcinizdebski.pl/',
        codeUrl: 'https://github.com/mizdebski77/Portfolio',
        APIlink: '',
    },

    {
        id: 11,
        name: 'Think1st training app',
        description: 'This project is a web application designed to facilitate sign-ups for training sessions. Users can provide necessary information such as their name, surname, email address, and photo, and select a training day and time. The application also fetches holiday data from the Ninja API to exclude Sundays and public holidays as training days, marking them as unavailable for selection and providing information about the holidays next to their names.',
        tags: [
            'REACT',
            'Tailwind CSS',
            'Tanstack Query',
            'API',
            'GIT',
        ],
        image: ta,
        liveUrl: 'https://mizdebski77.github.io/Training-App/',
        codeUrl: 'https://github.com/mizdebski77/Training-App',
        APIlink: '',
    },
]