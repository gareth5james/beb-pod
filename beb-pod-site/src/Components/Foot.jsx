import { Link } from "react-router-dom";

function Foot() {
    return <Link to="/contact" className="footer__link">
        <footer className="footer">
            <p className="footer__buzz">No waiting list <span className="buzz__span">|</span> All ages <span className="buzz__span">|</span> All conditions <span className="buzz__span">|</span> New patients always welcome <span className="buzz__span">|</span> No GP referral necessary</p>
            <p>annjames.bebpod@btinternet.com<br/>
            0151 608 0927 (24hrs)</p>
    </footer>
    </Link>
}

export default Foot;