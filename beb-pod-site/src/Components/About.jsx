import ann from "../resources/ann-square.webp"
import jen from "../resources/jen.png"
import annette from "../resources/annette-square.webp"
import elaine from "../resources/elaine-square.webp"
import rob from "../resources/rob-square.webp"
import annie from "../resources/annie-square.webp"
import janice from "../resources/janice.png"

function About() {
    return <main>
        <h2>About Us</h2>
        <h3>Podiatrists</h3>
        <ul className="app__about__pod">
            <li className="app__about__name">Ann <br/>CH07590<br/><img className="app__about__name__image" src={ann} alt="Ann"/></li>
            <li className="app__about__name">Jen <br/>CH35614<br/><img className="app__about__name__image" src={jen} alt="Jen"/></li>
            <li className="app__about__name">Annette <br/>CH31290<br/><img className="app__about__name__image" src={annette} alt="Annette"/></li>   
        </ul>
        <h3>Staff</h3>
        <ul className="app__about__staff">
            <li className="app__about__name">Rob<br/><img className="app__about__name__image" src={rob} alt="Rob"/></li>
            <li className="app__about__name">Elaine<br/><img className="app__about__name__image" src={elaine} alt="Elaine"/></li>
            <li className="app__about__name">Janice<br/><img className="app__about__name__image" src={janice} alt="Janice"/></li>
        </ul>
        <p>
            All our podiatrists are HCPC (Health & Care Professions Council) registered.<br/><br/>
        </p>
        <h4>We are members of the:</h4>
        <p>
            Royal College of Podiatry,  Diabetes UK, Independent Diabetes Trust, Merseyside branch of the Royal College of Podiatry, Versus Arthritis, Heart Matters, British Heart Foundation, Stroke Association, the Wirral Private Podiatry Practitioners Group, FDUK and UK Podiatry, Coeliac UK, IBS Network, Osgo & International Association of Dermoscopy.<br/><br/>
            All our podiatrists attend mandatory quarterly CPD (continuing professional development) conferences at Arrowe Park Hospital organised by  the Merseyside branch of the Royal College of Podiatry and any other approved by the Royal College of Podiatry courses in subjects not covered in our mandatory programme but which we are interested in throughout the year. During covid lockdown, we continued this process via Zoom.
        </p>
    </main>
}

export default About;