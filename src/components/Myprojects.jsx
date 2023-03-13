import Projects from "./Projects";
import appimage1 from '../images/app1.jpg';
import appimage2 from  '../images/app2.jpg';
import portfolioimage from '../images/portcapture.jpg';
import qrcodeimage from '../images/qrcode.jpg';
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
                    <Projects title="Talkzat App" image={appimage1} subtitle="A text-to-speech web app" desc="I built this app using th combination of HTML5, CSS3, Javascript, react, and the Google TTS API" arran="left2right" linkcode="#" linklive="#"/>
                    <Projects title="Linkwarp" image={appimage2} subtitle="A URL shortener web app" desc="I built the interface of this app with React jsx, HTML5, CSS BEM, and the Font Awesome Liibrary. I handled the interactivity using the elegant react hooks and I integrated an API to power the functionality. " arran="right2left" linkcode="#" linklive="#"/>
                    <Projects title="DicIt " image={appimage1} subtitle="A full-functioning dictionary web app" desc="I created this app with react, and styled it with CSS3, using the CSS preprocessor. I then powered its functionality with the open source dictionary API." arran="left2right" linkcode="https://github.com/Adeoti/dictionary" linklive="https://tourmaline-flan-7245d6.netlify.app/"/>
                    <Projects title="Discord Landing Page" image={appimage1} subtitle="A better version of the discord landing page" desc="This is a clone of the popular discord official website. I built this project from the scratch using the combination of react, material ui, photoshop, CSS3 (BEM), and framer motion." arran="right2left" linkcode="#" linklive="#"/>
                    <Projects title="QR-Code Hatch" image={qrcodeimage} subtitle="A free web app to generate custom QR codes" desc="For simplicity, I structured this project with HTML5, and styed it using the combination of css3 and Bootstrap. I then handled the interactiveness with jQuery, and the functionality with a javascript library." arran="left2right" linkcode="https://github.com/Adeoti/Qrcode-hatch" linklive="https://www.qrcode-hatch.com/"/>
                    <Projects title="My Portfolio" image={portfolioimage} subtitle="A single page website (this particular one)" desc="I build this SPA website with react and styled it with CSS3, following the BEM methodology. I handled the smooth animations with Framer Mption, and powered the contact for with Javascript and the emailjs library of react." arran="right2left" linkcode="https://github.com/Adeoti/Portfolio" linklive=""/>
                    <Projects title="Easybank" image={appimage1} subtitle="A reponsive and interactive banking landing page" desc="I coded this landing page with the react.I gave it a balanced styling and responsiveness with CSS3 BEM and SaSS. For a great user experience, I handled page navigations with the react router." arran="left2right" linkcode="#" linklive="#"/>
                </div>

            </div>
        </div>
    );
}
export default MyProjects;