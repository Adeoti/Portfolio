import Projects from "./Projects";
import qrcodeimage from '../images/qrcodehatchsitelong.png';
import qsaleswebsite from  '../images/qsalesimgb.png';
import asdiimg from '../images/asdiimg.png';
import scriptpress from '../images/scriptpress-by-adeoti.jpg';
import whatsappify from '../images/whatsappify-by-adeoti.jpg';
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
                
                    <Projects sourcecode="yes" livetext="See Doc" liveview="yes" title="WhatsAppify Plugin" image={whatsappify} subtitle="A WordPress Plugin that facilitates single and multiple agent customer support for a business" desc="I built this open source WP plugin to help companies boost their conversion rate, by enabling easy WhatsApp chat features on their website." arran="left2right" linkcode="https://github.com/Adeoti/whatsappify" linklive="https://dev-adeoti.gitbook.io/whatsappify-plugin-docs/"/>
                    <Projects sourcecode="yes" livetext="See Doc" liveview="yes" title="ScriptPress Plugin" image={scriptpress} subtitle="A Fast WordPress Plugin to insert custom scripts to wordpress sites" desc="I coded and released this WP plugin in order to allow developers to safely insert custom css and javascript codes to their WordPress websites." arran="right2left" linkcode="https://github.com/Adeoti/scriptpress" linklive="https://dev-adeoti.gitbook.io/scriptpress-plugin-docs/"/>
                    <Projects sourcecode="yes" livetext="See Live" liveview="yes" title="Q-Sales Official Website" image={qsaleswebsite} subtitle="The official Website of Q-Sales" desc="I got hired (on contract) in 2022 to re-create a responsive website for Q-Sales Technology. And I built it with REACT and SASS" arran="left2right" linkcode="https://github.com/Adeoti/qsaleswebsite" linklive="https://getqsales.com/"/>
                    <Projects sourcecode="no" livetext="See Live" liveview="yes" title="ASDI International Site" image={asdiimg} subtitle="The official website of a global organization" desc="Back in 2021, I got hired as a freelancer to build the official website  of this organization. I built the site using WORDPRESS, PHOTOSHOP and CSS." arran="right2left" linkcode="" linklive="https://asdi-international.org/"/>
                    <Projects sourcecode="yes" livetext="See Live" liveview="yes" title="QR-Code Hatch" image={qrcodeimage} subtitle="A free web app to generate custom QR codes" desc="I built this open source web app that generates QR-Codes on the fly; without having to sign up or login. I built the app with HTML, CSS, JQUERY, ETC." arran="left2right" linkcode="https://github.com/Adeoti/Qrcode-hatch" linklive="https://www.qrcode-hatch.com/"/>
                  
                </div>
          
            </div>
            </div>
    );
}
export default MyProjects;