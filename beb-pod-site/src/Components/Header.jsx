import left from "../resources/small-left-foot.webp"
import right from "../resources/small-right-foot.webp"
import feetLogo from "../resources/small-feet-logo.webp"

import { Link } from "react-router-dom"

function Header() {
    return <Link className="header__link" to="/"><header className="app__header">
        <h1><span>BEB</span><img className="app__header__letterImage" src={left} alt="small left foot"/><span>NGTON POD</span><img className="app__header__letterImage" src={right} alt="small right foot"/><span>ATRY</span><img className="app__header__logo" src={feetLogo} alt="feet logo"/></h1>
      </header>
      </Link>
}

export default Header;