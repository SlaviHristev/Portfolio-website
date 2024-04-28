import './services.scss';
import { motion } from 'framer-motion'
const Services = () => {


    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }

    return (
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on making your website <br />
                    look good and interactive</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Website.</h1>
                    <button>WHAT I DO? </button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Development</h2>
                    <p>I specialize in building dynamic and responsive websites using modern web technologies such as HTML, CSS, JavaScript and frameworks like React.</p>
                    <button
                        onClick={() => {
                            const portfolioSection = document.getElementById('Portfolio');
                            portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Design</h2>
                    <p>I create visually appealing and user-friendly designs for websites, focusing on aesthetics, usability, and brand identity.</p>
                    <button
                        onClick={() => {
                            const portfolioSection = document.getElementById('Portfolio');
                            portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Frontend Development</h2>
                    <p>I develop the frontend of web applications, implementing user interfaces and interactions to deliver engaging and intuitive user experiences.</p>
                    <button
                        onClick={() => {
                            const portfolioSection = document.getElementById('Portfolio');
                            portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Backend Development</h2>
                    <p>I build robust and scalable backend systems to power web applications, utilizing technologies like Node.js, Express, and databases such as MongoDB or MySQL.</p>
                    <button
                        onClick={() => {
                            const portfolioSection = document.getElementById('Portfolio');
                            portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Go
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;