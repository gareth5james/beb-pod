import Map from "./Map";

function Contact() {
    return <main>
        <div className="app__contact">
        <div className="app__contact__address">
        <h2>Located at:</h2>
        <p>
        <a className="app__contact__link" target="blank" href="https://goo.gl/maps/Kaig3SVtM5owG5ay9">Bebington Podiatry<br/>
        270 Heath Road<br/>
        Higher Bebington<br/>
        Wirral<br/>
        Merseyside<br/>
        CH63 2HQ<br/><br/></a>
        annjames.bebpod@btinternet.com<br/>
        0151 608 0927 (24hrs)</p>
        </div>
        <div className="app__hours">
            <ul className="app__hours__list">
                <li className="app__hours__list__day"><span className="day">Monday:</span><span className="hours">0930 - 1230 | 1330 - 1700 | 1730 - 1930</span></li>
                <li className="app__hours__list__day"><span className="day">Tuesday:</span><span className="hours">0930 - 1230 | 1330 - 1700</span></li>
                <li className="app__hours__list__day"><span className="day">Wednesday:</span><span className="hours">0930 - 1230 | 1330 - 1700</span></li>
                <li className="app__hours__list__day"><span className="day">Thursday:</span><span className="hours">0930 - 1230 | 1330 - 1700</span></li>
                <li className="app__hours__list__day"><span className="day">Friday - Sunday:</span><span className="hours">Closed</span></li>
            </ul>
        </div>
        </div>
        <h2>At your appointment</h2>
        <p>Please attend on time - we are still staggering appointments to operate
        social distancing and allow thorough cleaning of each surgery between patients.<br/><br/>
        Please wash your hands on entry in the sink indicated by your podiatrist.<br/><br/>
        We request you wear a face covering - we are a health facility committed to the safety of our patients
        and staff.<br/><br/>
        Please DO NOT ATTEND if you have/have symptoms of covid 19</p>
        <h3>Email us</h3>
        <div className="contact__form">
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
        <p><label htmlFor="Name">Name: </label><input type="text" name="Name" required/></p>
        <p><label htmlFor="Email">Email: </label><input type="email" name="Email" required/></p>
        <p><label htmlFor="Phone">Phone: </label><input type="text" name="Phone" required/></p>
        <p><label htmlFor="Message">Message: </label><textarea name="Message" rows="4" cols="40" required/></p>
        <p><label></label><input type="submit" value="Submit message" /></p>
        </form>
        </div>
        <Map />
    </main>
}

export default Contact;