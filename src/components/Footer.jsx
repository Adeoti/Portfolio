import Resume from './DevAdeotiResume.pdf';
const Footer = () => {

    const linkedIn = "https://www.linkedin.com/in/adeoti-nurudeen-3ab237265";
    const githublink = "https://github.com/Adeoti";

    return (
        <div className="footer">
        <nav className="navbar">
            <div className="bridge">
                <div className="navs">
                <h3 className="logo"><span className="dot"></span> &lt;Adeoti/&gt;</h3>
                <ul>
                    <li><a href={Resume}>Resume</a></li>
                    <li><a href={githublink}>Github</a></li>
                    <li><a href={linkedIn}>LinkedIn</a></li>
                    <li><a href="#hero" className="go-up">&uarr;up</a></li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Footer;