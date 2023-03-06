import heroimg from '../images/hero.png';
import Resume from './DevAdeotiResume.pdf';
const Hero = () => {
    return(
        <header className="header" id="hero">
            <div className="bridge">
                <div className="hero">
                    <section className="hero__intro">
                        <h3>Hey,  <br/>I'm <span className="linemark">Adeoti</span> Nurudeen.</h3>
                        
                        <p>
                            A Frontend Developer with over 9 years of coding and design experience.
                        </p><br/><br/>
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