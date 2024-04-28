import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
    {
        id: 1,
        title: "Social Media App",
        img: "/Social-Media-App.png",
        desc: "The Social Media App project is a modern platform for seamless social networking. It features user authentication with secure JWT and bcrypt, real-time updates using Socket.io, and a responsive design built with Material-UI. The backend, powered by Node.js, employs Express for routing, bcrypt for password hashing, and MySQL for data storage. The frontend, developed with React, utilizes React Router DOM for routing, React Query for state management, and Material-UI for UI components. Additionally, Socket.io facilitates real-time communication. With a focus on user experience and efficient data management, the app offers a rich interface and real-time interaction for its users.",
        github: 'https://github.com/SlaviHristev/React-Responsive-Social-Media-App',
    },
    {
        id: 1,
        title: "Blog App",
        img: "/Blog App.png",
        desc: "Blog App is a full-stack application built with Next.js 14, featuring a blog website. It incorporates Next.js 14, App Router, Server Actions, MongoDB, and Auth.js for authentication. Key features include user authentication with GitHub profiles, authorization for restricted routes, an admin panel for post and user management, and the ability for admins to create and delete posts. The application includes various pages such as homepage, about, contact, blog, register, login, and admin pages.",
        github: 'https://github.com/SlaviHristev/Next.js-Full-Stack-App',
    },
    {
        id: 1,
        title: "Freelance4U",
        img: "/Freelance4u.png",
        desc: "Freelance4U is a platform akin to Fiverr, connecting freelancers and clients for collaboration and transactions. It offers user authentication, real-time chat, gig creation, purchasing, gig management, and responsive design features.",
        github: 'https://github.com/SlaviHristev/React-Freelance-Website-Project',
    }
]

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref});

    const y = useTransform(scrollYProgress, [0, 1], [-600, 600])

    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <div className="imgContainer"  ref={ref}>
                    <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.github}><button>See Demo</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio;