import {useState} from 'react';
const Navbar = () => {

    const [menutoggle, setMenutoggle] = useState(false);

    const fireToggle = () => {
      setMenutoggle(!menutoggle);
    }
    


    const linkedIn = "https://www.linkedin.com/in/adeoti-nurudeen-3ab237265";
    const githublink = "https://github.com/Adeoti";
    return (
        <div className="MainNav">
        <nav className="navbar">
            <div className="bridge">
                <div className="navs">
                <h3 className="logo"><span className="dot"></span> &lt;Adeoti/&gt;</h3>
                <div className="navlinka desktop">
                <ul>
                    <li><a href="DevAdeotiResume.pdf" download>Resume</a></li>
                    <li><a href={githublink}>Github</a></li>
                    <li><a href={linkedIn}>LinkedIn</a></li>
                </ul>
                </div>
                {menutoggle && 
                (<div className="navlinka mobile">
                <ul>
                    <li><a href="DevAdeotiResume.pdf" download>Resume</a></li>
                    <li><a href={githublink}>Github</a></li>
                    <li><a href={linkedIn}>LinkedIn</a></li>
                </ul>
                    <div className='closer-padding'><button onClick={fireToggle} className="navcloser">&times;</button></div>
                </div>)}
                <a className="menu-handler" onClick={fireToggle} href="#">Menu</a>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;