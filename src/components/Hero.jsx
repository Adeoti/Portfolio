import heroimg from '../images/hero.png';
import Resume from './DevAdeotiResumej.pdf';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHeart} from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return(
        <header className="header" id="hero">
            <div className="bridge">
                <div className="hero">
                    <section className="hero__intro">
                        <motion.h3
                        initial={{x:-100, y:-200, scale:0.4}}
                        animate={{x:0, y:0, scale:1}}
                        transition={{duration:1}}>Hey,  <br/>I'm <span className="linemark">Adeoti</span> Nurudeen.</motion.h3>
                        
                        <motion.p
                        initial={{x:410}}
                        animate={{x:0}}
                        transition={{duration:1.2}}>
                            A Fullstack Developer, with expertise in PHP, Laravel, and WordPress Development. Coding and Designing for over 9 years.
                        </motion.p><br/><br/>
                        <a href={Resume} className="cta">
                       <FontAwesomeIcon icon={faHeart} /> Resume</a>
                        
                        
                        &nbsp;
                        
                    </section>
                    <img src={heroimg} className="hero__img" />
                        
                </div>
            </div>
        </header>
    );
}
export default Hero;