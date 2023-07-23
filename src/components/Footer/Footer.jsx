import './Footer.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
function Footer(){
return (
    <div className="footer">
        
        <div className='contentImages'>
        <div className='blur fotter-blur-left'></div>
        <div className='blur fotter-blur-rigth'></div>
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div className='logo'> 
            <img src={logo} alt="" />
        </div>
    </div>
)

}
export default Footer