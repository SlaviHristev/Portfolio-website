import './services.scss';
import {motion} from 'framer-motion'

const Services = () =>{
    return(
        <motion.div className='services'>
            <motion.div className="textContainer">
                <p>I focus on making your website <br/>
                look good and interactive</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><b>Unique</b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><b>For Your</b> Website.</h1>
                    <button>WHAT I DO? </button>
                </div>
            </motion.div>
            <motion.div className="listContainer"></motion.div>
        </motion.div>
    )
}

export default Services;