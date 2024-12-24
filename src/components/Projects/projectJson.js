import HTMLCss from '../../assets/techs/html_css.svg'
import JavaScript from '../../assets/techs/javascript.svg'
import React from '../../assets/techs/react.png'
import Angular from '../../assets/techs/angular.svg'
import Typescript from '../../assets/techs/typescript.svg'
import Java from '../../assets/techs/java.svg'
import Jenkins from '../../assets/techs/jenkins.png'
import Git from '../../assets/techs/git.svg'
import Node from '../../assets/techs/node.svg'
import Tailwind from '../../assets/techs/tailwind.svg'
import AWS from '../../assets/techs/aws.svg'
import SQL from '../../assets/techs/sql.svg'
import MUI from '../../assets/techs/mui.svg'
import BootStrap from '../../assets/techs/bootstrap.svg'
import Postman from '../../assets/techs/postman.svg'
import AyuvyaIcon from '../../assets/projects/ayuvyaFavicon.png'
import HfIcon from '../../assets/projects/hfIcon.png'
import ExpTreeIcon from '../../assets/projects/expTreeIcon.png'
import ExpTreeImg from '../../assets/projects/expTreeImage.png'
import AyuvyaImg from '../../assets/projects/AyuvyaImage.png'
import HFImg from '../../assets/projects/HFImage.png'
import Vercel from '../../assets/techs/vercel.png'

export const projectJson = [

    {
        projName: 'Expression Tree Generator',
        projIcon: ExpTreeIcon,
        projShortDesc: 'Short discription here for not more than 2 lines only.',
        projShortDesc: 'Generate a binary tree of an arithmetic expression.',
        projTech: [{ name: 'ReactJs', icon: React },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'Html5/CSS3', icon: HTMLCss },
        { name: 'NodeJs', icon: Node, },
        { name: 'Git', icon: Git, },
        { name: 'Vercel', icon: Vercel, },
        ],
        projDesc: <span>Expression Tree Generator is an interactive tool for generating and visualizing expression trees from
            mathematical expressions.<br /><br />
            It's perfect for developers, students, and educators to understand and analyze expression
            structures easily.</span>,
        img: ExpTreeImg,
        gitLink: 'https://github.com/upjotsingh/gen-expression-tree',
        demoLink: 'https://upjotsingh.github.io/gen-expression-tree/'
    },
    {
        projName: 'Ayuvya',
        projIcon: AyuvyaIcon,
        projShortDesc: 'E-commerce platform to sell 100% Ayurvedic products.',
        projTech: [{ name: 'ReactJs', icon: React },
        { name: 'Typescript', icon: Typescript },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'Html5/CSS3', icon: HTMLCss },
        { name: 'MUI', icon: MUI },
        { name: 'NodeJs', icon: Node },
        { name: 'SQL', icon: SQL },
        { name: 'Git', icon: Git, },
        { name: 'Postman', icon: Postman, }
        ],
        projDesc: <span>Ayuvya’s website offers a user-centric e-commerce platform for Ayurvedic health products, featuring
            a responsive design and easy navigation. It provides secure transactions, informative product details, and
            educational content to guide customers. <br /><br />Integrated user accounts allow order tracking, enhancing the shopping
            experience. The site effectively combines wellness resources and retail functionality for a comprehensive user experience.</span>,
        img: AyuvyaImg,
        gitLink: '',
        demoLink: 'https://ayuvya.com/'

    },
    {
        projName: 'Hello Fitness',
        projIcon: HfIcon,
        projShortDesc: 'Fitness app providing consultations & webRTC video workout sessions.',
        projTech: [{ name: 'ReactJs', icon: React },
        { name: 'Typescript', icon: Typescript },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'Html5/CSS3', icon: HTMLCss },
        { name: 'AWS', icon: AWS },
        { name: 'Git', icon: Git, },
        { name: 'BootStrap', icon: BootStrap },
        { name: 'NodeJs', icon: Node },
        { name: 'SQL', icon: SQL },

        { name: 'Postman', icon: Postman, }],
        projDesc: <span>Hello Fitness offers tailored fitness solutions, with a focus on running and holistic health for busy
            professionals. It provides various membership plans that include custom training programs, community access, and
            lifetime support.<br></br><br></br>
            Features include one-on-one coaching, live sessions, and workshops. Led by experienced athlete Ishan Sharma,
            It's a user-friendly platform, offering resources for users aiming for personal fitness goals.
        </span>,
        img: HFImg,
        gitLink: '',
        demoLink: 'https://hellofitness.in/'
    },

]