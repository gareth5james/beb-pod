import { Link } from "react-router-dom";
import fb from "../resources/Facebook.png"

function Foot() {
    return <footer className="footer">
            <p className="footer__buzz">No waiting list <span className="buzz__span">|</span> All ages <span className="buzz__span">|</span> All conditions <span className="buzz__span">|</span> New patients always welcome <span className="buzz__span">|</span> No GP referral necessary</p>
            <a target="blank" href="https://www.facebook.com/bebingtonpodiatry"><img id="fb" src={fb} alt="facebook logo"></img></a>
            <Link to="/contact" className="footer__link"><p>annjames.bebpod@btinternet.com<br/>
            0151 608 0927 (24hrs)</p></Link>
            <Link to="/files/privacy.pdf" target="_blank" download>Privacy Policy</Link>
    </footer>
   
}

export default Foot;