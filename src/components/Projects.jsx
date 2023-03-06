const Projects = ({title, subtitle, desc, arran, linklive,linkcode, image}) => {
    return (
        <div className="projectsingle">
           {
            arran == 'right2left' ? (
                <>
                <div className="projectsingle__image"> 
                <img src={image} />
                <div className="details__cta mini">
                    <a href={linklive}>&uArr; See Live</a>
                        <a href={linkcode}>&lt;/&gt; Source code</a>
                    </div>
                </div>
                <div className="projectsingle__details"> 
                    <div className="details__caption">
                    <h3>{title}</h3>
                    <p className="subtitle">{subtitle}</p><br/>
                     <p className="desc">{desc}</p>
                    </div>
                    <div className="details__cta maxi">
                    <a href={linklive}>&uArr; See Live</a>
                        <a href={linkcode}>&lt;/&gt; Source code</a>
                    </div>
                 </div>
              
       
                </>
            ) : (
                <>
                <div className="projectsingle__details"> 
                    <div className="details__caption">
                    <h3>{title}</h3>
                    <p className="subtitle">{subtitle}</p><br/>
                    <p className="desc">{desc}</p>  
                    </div>
                    <div className="details__cta maxi">
                    <a href={linklive}>&uArr; See Live</a>
                        <a href={linkcode}>&lt;/&gt; Source code</a>
                    </div>
              </div>
              <div className="projectsingle__image">
                <img src={image} alt="My Image"/>
                <div className="details__cta mini">
                    <a href={linklive}>&uArr; See Live</a>
                        <a href={linkcode}>&lt;/&gt; Source code</a>
                    </div>
              </div>
                </>
            )
        }
        
        </div>
    );
}
export default Projects;