const Skillsicons = ({icon, text}) => {
    const iconStyle = {
        width:'80px',
        minHeight:'80px',
        
    };
    return (
        <>
            <div className='skills__card__set'>
                <img src={icon} style={iconStyle}/>
                <p style={{textAlign:'center', fontWeight:'bold'}}>{text}</p>
            </div>
        </>
    );
}
export default Skillsicons;