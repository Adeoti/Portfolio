import heroimg from '../images/hero.png';
import Resume from './DevAdeotiResume.pdf';
import {motion as m} from 'framer-motion';
const Hero = () => {
    return(
        <header className="header" id="hero">
            <div className="bridge">
                <div className="hero">
                    <section className="hero__intro">
                        <m.h3
                        initial={{x:-100, y:-200, scale:0.4}}
                        animate={{x:0, y:0, scale:1}}
                        transition={{duration:1}}>Hey,  <br/>I'm <span className="linemark">Adeoti</span> Nurudeen.</m.h3>
                        
                        <m.p
                        initial={{x:400}}
                        animate={{x:0}}
                        transition={{duration:1.2}}>
                            A Frontend Developer with over 9 years of coding and design experience.
                        </m.p><br/><br/>
                        <a href={Resume} className="cta">&hearts; Resume</a>
                        &nbsp;
                        
                    </section>
                    <img src={heroimg} className="hero__img" />
                        
                </div>
            </div>
        </header>
    );
}
export default Hero;