import Skillsicons from './Skillicons';
import html5icon from '../skillimages/html.png';
import css3icon from '../skillimages/css-3.png';
import jquery from '../skillimages/jqueryicon.png';
import reacticon from '../skillimages/react.png';
import bootstrapicon from '../skillimages/bootstrap.png';
import JavaScripticon from '../skillimages/js.png';
import giticon from '../skillimages/giticonnew.png';
import photoshopicon from '../skillimages/photoshop.png';
import sassicon from '../skillimages/sass.png';
import Wordpressimg from '../skillimages/wordpress.png';
import phpicon from '../skillimages/php.png';
import tailwindimg from '../skillimages/tailwindlogoimg.png';
import laravelimg from '../skillimages/laravel-icon.png';

const  Skills  = () => {
    return(
        <div className="skills">
            <div className="bridge">
                <div className="skills__panes">
                  <div className="skills__pane__left">
                  <h3>Skills &amp; Tools</h3>
                    <p>
                       By the way, here are the tools I often use.
                    </p>
                  </div>
                  <div className="skills__pane__right">
                    <a href="#contact" className="cta">&rArr; contact me</a>
                  </div>
                </div>
                
                <div className="skills__cards">
                    <Skillsicons icon={phpicon} text="PHP"/> 
                    <Skillsicons icon={Wordpressimg} text="Wordpress"/>
                    <Skillsicons icon={html5icon} text="HTML5"/>
                    <Skillsicons icon={css3icon} text="CSS 3"/>
                    <Skillsicons icon={JavaScripticon} text="JavaScript"/>
                    <Skillsicons icon={reacticon} text="React"/>
                    <Skillsicons icon={tailwindimg} text="Tailwind CSS"/>
                    <Skillsicons icon={bootstrapicon} text="Bootstrap"/>
                    <Skillsicons icon={jquery} text="JQuery"/>
                    <Skillsicons icon={giticon} text="Git"/>
                    
                    <Skillsicons icon={sassicon} text="SaSS"/>
                    <Skillsicons icon={photoshopicon} text="Photoshop"/>
                    <Skillsicons icon={laravelimg} text="Laravel"/>
                    

               </div>

            </div>
        </div>
    );
}
export default Skills;