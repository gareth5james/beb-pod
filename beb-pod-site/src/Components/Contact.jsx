function Contact() {
    return <main>
        <div className="app__contact">
        <div className="app__contact__address">
        <h2>Located at:</h2>
        <p>
        Bebington Podiatry<br/>
        270 Heath Road<br/>
        Higher Bebington<br/>
        Wirral<br/>
        Merseyside<br/>
        CH63 2HQ<br/><br/>
        annjames.bebpod@btinternet.com<br/>
        0151 608 0927 (24hrs)</p>
        </div>
        <div className="app__hours">
            <ul className="app__hours__list">
                <li className="app__hours__list__day"><span className="day">Monday:</span><span className="hours">0930 - 1230 | 1330 - 1700 | 1800 - 1930</span></li>
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
        Please wash your hands on entry in the sink indicated by your podiatrist. We are still
        checking temperatures too.<br/><br/>
        Wear a face covering - we are a health facility committed to the safety of our patients
        and staff and entry will be refused if you are not wearing a face covering.<br/><br/>
        Please DO NOT ATTEND if you have/have symptoms of covid 19</p>
        <form className="contact__form" action="mailto:gareth5james@yahoo.co.uk" method="post" enctype="text/plain">
        <p><label htmlFor="Name">Name: </label><input type="text" name="Name"/></p>
        <p><label htmlFor="Email">Email: </label><input type="text" name="Email"/></p>
        <p><label htmlFor="Message">Message: </label><textarea name="Message" rows="2" cols="40"/></p>
        <p><label></label><button type="submit">Submit</button></p>
        </form>
    </main>
}

export default Contact;