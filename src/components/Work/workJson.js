import TCS from '../../assets/works/tcsLogo.png'
import CTS from '../../assets/works/cognizantLogo.png'
import INN from '../../assets/works/innovatiaLogo.png'
import HTMLCss from '../../assets/techs/html_css.svg'
import JavaScript from '../../assets/techs/javascript.svg'
import React from '../../assets/techs/react.png'
import AWS from '../../assets/techs/aws.svg'
import Angular from '../../assets/techs/angular.svg'
import Typescript from '../../assets/techs/typescript.svg'
import Java from '../../assets/techs/java.svg'
import Jenkins from '../../assets/techs/jenkins.png'
import Node from '../../assets/techs/node.svg'
import BootStrap from '../../assets/techs/bootstrap.svg'
import Tailwind from '../../assets/techs/tailwind.svg'
import Firebase from '../../assets/techs/firebase.svg'
import MUI from '../../assets/techs/mui.svg'
import Git from '../../assets/techs/git.svg'
import SQL from '../../assets/techs/sql.svg'
import Flask from '../../assets/techs/flask.svg'
import Docker from '../../assets/techs/docker.svg'
import Postman from '../../assets/techs/postman.svg'
import SpringBoot from '../../assets/techs/spring.svg'
import Python from '../../assets/techs/python.svg'
import GraphQL from '../../assets/techs/graphql.svg'
import Next from '../../assets/techs/nextjs.svg'
import PHP from '../../assets/techs/php.png'
import Vite from '../../assets/techs/vite.svg'

export const WorkJson = [
    {
        companyName: 'Tata Consultancy Services',
        date: 'September, 2022 - September, 2024',
        title: 'Software Engineer',
        loc: 'Noida, India - Hybrid',
        techStack: [
            { name: 'ReactJs', icon: React },
            { name: 'Angular', icon: Angular },
            { name: 'Typescript', icon: Typescript },
            { name: 'JavaScript', icon: JavaScript },
            { name: 'Html5/CSS3', icon: HTMLCss },
            { name: 'Tailwind CSS', icon: Tailwind },
            { name: 'Material UI', icon: MUI },
            { name: 'NodeJs', icon: Node },
            { name: 'Pyhton', icon: Python },
            { name: 'Git', icon: Git },
            { name: 'AWS', icon: AWS },
            { name: 'SQL', icon: SQL },
            { name: 'PostMan', icon: Postman },
            { name: 'Docker', icon: Docker },
            { name: 'Jenkins', icon: Jenkins },
            { name: 'Java', icon: Java },
            { name: 'Spring Boot', icon: SpringBoot }
        ],
        img: TCS,
        imgH: '60px',
        imgW: '55px',
        desc: <span> An IT services, consulting and business solutions SaaS organization that has been partnering
            with many of the world’s largest businesses for over 56 years, recognized as a benchmark of excellence
            in software development with unique Location Independent Agile™ delivery model .
            <br /><br />As a Software Engineer, I have been an integral part of large-scale government projects for the
            Election Commission of India. My contributions included mentoring and leading team with the implementation
            of complex modules such as analytical maps & Chatbot integrations, QR code scanner hardware integration,
            voter ID card designing using PDF-gen libraries, internationaliztion for 10+ languages, API integrations,
            Dark & Light theme management. I have led several subparts of the project, followed by strict agile/scrum
            methodologies to meet requirements and submission dates. Therefore, I have been awarded several times with
            titles such as "On the Spot Award", "Best Lead Award" and "Appreciation from Team".
            <br /><br />Proficiently converted Figma & Adobe XD designs into adaptive UI/UX & reusable components with tailwind CSS
            using latest design patterns & accessibility guidelines. Handled over 1.4 billion customers and large datasets with
            state management tools, high-performance service-oriented architecture, Unit, Integration & E2E testing, ensuring
            a smooth workflow and development lifecycle while maintaining security measures, validated JSON web tokens,
            managed sessions which increased data protection regulations.
        </span>
        // 'Led team & developed several React apps for the Election Commission of India, streamlined elections for ~1.4' +
        //     'billion users, managed grievances, ballot papers, PDF generation, vote counting, and other election-related parameters.\n' +
        //     ' Implemented H/W integration of QR code scanners, Redux Toolkit for seamless API integration facilitated single sign-on' +
        //     'using Keycloak user management system. Build optimized components, robust token tracking and session management to enhance security.',

    }
    ,
    {
        companyName: 'Cognizant Technology Solutions',
        date: 'April, 2021 - August, 2022',
        title: 'Software Developer',
        loc: 'Pune, India - Remote',
        techStack: [
            { name: 'ReactJs', icon: React },
            { name: 'NextJs', icon: Next },
            { name: 'Typescript', icon: Typescript },
            { name: 'JavaScript', icon: JavaScript },
            { name: 'Html5/CSS3', icon: HTMLCss },
            { name: 'Tailwind CSS', icon: Tailwind },
            { name: 'NodeJs', icon: Node },
            { name: 'SQL', icon: SQL },
            { name: 'Git', icon: Git },
            { name: 'PostMan', icon: Postman },
            { name: 'Jenkins', icon: Jenkins },
            { name: 'GraphQL', icon: GraphQL },
            { name: 'Vite', icon: Vite },
            { name: 'PHP', icon: PHP }
        ],
        img: CTS,
        imgH: '55px',
        imgW: '75px',
        desc: <span>It is a global leader in IT services, specializing in digital transformation, software engineering,
            AI, and cloud solutions. It excels in full-stack development, data analytics, and modernizing enterprise operations
            with cutting-edge technologies like microservices, big data, and hybrid cloud platforms.
            <br /><br />As a Software Developer, I took ownership of Life Sciences project and led team to build various
            cloud-based web apps collaboratively, ensuring optimized builds using Webpack bundler and Vite react tool
            in a fast-paced Agile environment. These projects involved integration of creative features like live workout
            sessions, webRTC video streaming, appointment booking, over 200 instructional videos, custom diet charts,
            personalized workout routines, and real-time fitness data tracking dashboard, featuring digital payments,
            transaction management, and multi-language support.
            <br /><br />Seamless integration of GraphQL & RESTful APIs, providing a visualizing dashboard for real-time
            data analysis with single sign-on & 2F authentication
            Implemented authentication and efficient caching using Async Storage and managed over 10K records.

        </span>
        /**

         
         */
        // 'Took ownersihp and led team to develop health-based web apps offering over 200 instructional videos, ' +
        //     'custom diet charts, personalized workout routines, and live webRTC video sessions. ' +
        //     'Conducted thorough testing using the React Testing Library/Jest to ensure smooth workflow. ' +
        //     'Worked with AWS services, backend with Python & PHP and developed several hybrid mobile apps as well using
        // React Native.',

    },
    {

        companyName: 'Innovatia Marketing & Technology',
        date: 'July, 2019 - April, 2021',
        title: 'Software Engineer',
        loc: 'Delhi, India - Hybrid',
        techStack: [
            { name: 'ReactJs', icon: React },
            { name: 'Typescript', icon: Typescript },
            { name: 'JavaScript', icon: JavaScript },
            { name: 'Html5/CSS3', icon: HTMLCss },
            { name: 'BootStrap', icon: BootStrap },
            { name: 'NodeJs', icon: Node },
            { name: 'AWS', icon: AWS },
            { name: 'Java', icon: Java },
            { name: 'Git', icon: Git },
            { name: 'Flask', icon: Flask },
            { name: 'Firebase', icon: Firebase },
            { name: 'SQL', icon: SQL },
            { name: 'PostMan', icon: Postman },
            { name: 'Python', icon: Python }
        ],
        img: INN,
        imgH: '52px',
        imgW: '82px',
        desc: <span>An organisation with the aim to grow startups, SaaS & SMEs by enriching their business with the
            combination of technology, strategy, and creativity. Their specialty falls in running high yielding Facebook
            advertising and developing flawless technology resulting in building a name in the list of leading
            digital marketing & Software development services in India.
            <br /><br />While working in this startup as a Software Engineer, I've developed diverse apps using
            frontend and backend technologies which enhanced my ability to deliver high-quality solutions under tight
            deadlines in a fast-paced environment. I have worked on various AWS such as Lambda functions, S3 storage,
            ECS instances, Redis Database, and DMS for migration, along with efficient designing and development of
            various complex projects concurrently.
            <br /><br />Developed several E-commerce & enterprise web apps with SEO techniques, contributed to DevOps
            best practices, including deployments, hosting, and role-based app authorizations. I worked collaboratively
            with the UI/UX team to implement custom-designed payment gateways, integration of third-party libraries,
            animations, styled-components using material design principles.

        </span>

    }
]