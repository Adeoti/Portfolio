import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import MyProjects from "./Myprojects";
import Skills from "./Skills";

const Home = () =>{
    return (
        <div>
            <Hero/>
            <Aboutme/>
            <MyProjects/>
            <Skills/>
            <Contact/>
            <Footer />
        </div>
    );
}

export default Home;