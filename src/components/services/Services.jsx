import './services.scss';
import {motion} from 'framer-motion'

const Services = () =>{

    const variants = {
        initial:{
            x:-500,
            y:100,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            y:0,
            transition:{
                duration:1,
                staggerChildren:0.1,
            }
        }
    }

    return(
        <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on making your website <br/>
                look good and interactive</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Website.</h1>
                    <button>WHAT I DO? </button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero molestias placeat, neque consectetur doloremque aut eligendi corrupti ea quas!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero molestias placeat, neque consectetur doloremque aut eligendi corrupti ea quas!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero molestias placeat, neque consectetur doloremque aut eligendi corrupti ea quas!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero molestias placeat, neque consectetur doloremque aut eligendi corrupti ea quas!</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;