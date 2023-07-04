const Projects = ({title, liveview , livetext, sourcecode , subtitle, desc, arran, linklive,linkcode, image}) => {
    return (
        <div className="projectsingle">
           {
            arran == 'right2left' ? (
                <>
                <div className="projectsingle__image"> 
                <div style={{maxHeight:'400px', overflow:'hidden', borderRadius:'20px'}}>
                <img src={image} />
                </div>
                <div className="details__cta mini">
                    {liveview == 'yes' ? (
                        <a href={linklive} target="_blank">&uArr; {livetext}</a>
                    ) : ''}
                    {sourcecode == 'yes'? (
                        <a href={linkcode} target="_blank">&lt;/&gt; Source code</a>
                    ) : ''}
                    </div>
                </div>
                <div className="projectsingle__details"> 
                    <div className="details__caption">
                    <h3>{title}</h3>
                    <p className="subtitle">{subtitle}</p><br/>
                     <p className="desc">{desc}</p>
                    </div>
                    <div className="details__cta maxi">
                    {liveview == 'yes' ? (
                        <a href={linklive} target="_blank">&uArr; {livetext}</a>
                    ) : ''

                    }
                        
                    {sourcecode == 'yes'? (
                        <a href={linkcode} target="_blank">&lt;/&gt; Source code</a>
                    ) : ''}
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
                    {liveview == 'yes' ? (
                        <a href={linklive} target="_blank">&uArr; {livetext}</a>
                    ) : ''

                    }
                    {sourcecode == 'yes'? (
                        <a href={linkcode} target="_blank">&lt;/&gt; Source code</a>
                    ) : ''}
                    </div>
              </div>
              <div className="projectsingle__image">
              <div style={{maxHeight:'400px', overflow:'hidden', borderRadius:'20px'}}>
                <img src={image} alt="My Image"/>
              </div>
                
                <div className="details__cta mini">
                    <a href={linklive} target="_blank">&uArr; {livetext}</a>
                    {sourcecode == 'yes'? (
                        <a href={linkcode} target="_blank">&lt;/&gt; Source code</a>
                    ) : ''}
                    </div>
              </div>
                </>
            )
        }
        
        </div>
    );
}
export default Projects;