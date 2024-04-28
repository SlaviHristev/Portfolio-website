import './about.scss';
import { motion } from 'framer-motion'

const About = () => {
    return(


        <div className="about">
            <div className='textContainer'>
                <h1>About Me</h1>
                <p>Hello there! I'm Slavi Hristev, a passionate junior web developer with a knack for crafting engaging and interactive web experiences. Currently in my second year of studies at SoftUni, I'm dedicated to honing my skills and pushing the boundaries of what I can create with code.</p>
                <h2>Background</h2>
                <p>My journey into the world of web development began with a fascination for technology and a desire to create meaningful digital experiences. As a student at SoftUni, I've been fortunate to immerse myself in a dynamic learning environment where I've gained hands-on experience with a variety of web technologies.</p>
                <h2>Skills and Expertise</h2>
                <p>With a solid foundation in JavaScript, HTML, and CSS, I thrive on bringing ideas to life through clean and efficient code. I've also delved into the world of modern frameworks like React, backend development with Express, and database management with MongoDB. Continuously seeking to expand my skill set, I'm always eager to learn new technologies and stay updated with industry trends.</p>
                <h2>Practice Makes Perfect</h2>
                <p>In my free time, you'll often find me immersed in personal projects, experimenting with new concepts, and refining my coding skills. Whether it's building a sleek portfolio website, crafting a responsive web application, or diving into the intricacies of backend development, I'm constantly challenging myself to push beyond my comfort zone and grow as a developer.</p>
            </div>
            
            <div className='imageContainer'>
                <img src="/dev.png" alt="" />
            </div>
        </div>
    )
}

export default About;