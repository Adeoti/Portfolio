import Projects from "./Projects";
import qrcodeimage from '../images/qrcodehatchsitelong.png';
import qsalesapp from '../images/qsalesapp.png';
import qsaleswebsite from  '../images/qsalessiteimglong.png';
import asdiimg from '../images/asdiimg.png';
import dicitimg from '../images/dicitapp.png';
const  MyProjects  = () => {
    return(
      
        <div className="projects">
            <div className="bridge">
                <div className="projects__panes">
                  <div className="projects__pane__left">
                  <h3>My Recent Projects</h3>
                    <p>
                        Check out my selected recent projects
                    </p>
                  </div>
                  <div className="projects__pane__right">
                    <a href="#contact" className="cta">&rArr; contact me</a>
                  </div>

                </div>
                
                <div className="projects__cards">
                    
                    <Projects sourcecode="yes" title="Q-Sales Official Website" image={qsaleswebsite} subtitle="The official Website of Q-Sales" desc="I got hired in 2022 to re-create a responsive website for Q-Sales Technology. And I built it with REACT and SASS" arran="left2right" linkcode="https://github.com/Adeoti/qsaleswebsite" linklive="https://getqsales.com/"/>
                    <Projects sourcecode="no" title="ASDI International Site" image={asdiimg} subtitle="The official website of a global organization" desc="Back in 2021, I got hired as a freelancer to build the official website  of this organization. I built the site using WORDPRESS, PHOTOSHOP and CSS." arran="right2left" linkcode="" linklive="https://asdi-international.org/"/>
                    <Projects sourcecode="yes" title="QR-Code Hatch" image={qrcodeimage} subtitle="A free web app to generate custom QR codes" desc="I built this open source web app that generates QR-Codes on the fly; without having to sign up or login. I built the app with HTML, CSS, JQUERY, ETC." arran="left2right" linkcode="https://github.com/Adeoti/Qrcode-hatch" linklive="https://www.qrcode-hatch.com/"/>
                    <Projects sourcecode="yes" title="Q-Sales Inventory App" image={qsalesapp} subtitle="A web-based inventory application" desc="I was hired to design the interface and some key functionalities of the inventory application; from the main dashboard, to all various admin pages. I used HTML5, CSS3, jQUERY, Bootstrap, PHP, and MySQL." arran="right2left" linkcode="https://github.com/Adeoti/qsalesinventoryapp" linklive="https://github.com/Adeoti/qsalesinventoryapp"/> 
                    <Projects sourcecode="yes" title="DicIt" image={dicitimg} subtitle="A full-functioning dictionary web app" desc="I created this app with react, and styled it with CSS3, using the CSS BEM methodology. I then powered its functionality with the open source dictionary API." arran="left2right" linkcode="https://github.com/Adeoti/dictionary" linklive="https://dictit.netlify.app/"/>  
                
                </div>
          
            </div>
            </div>
    );
}
export default MyProjects;