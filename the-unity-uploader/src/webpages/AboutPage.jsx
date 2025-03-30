import Navbar from "../common-components/Navbar"
import ryan from "../photos/1743295382029.jpg"
import daniel from "../photos/1735874434871.jpg"
import angel from "../photos/1740444203614.jpg"
import shevyn from "../photos/1713801616273.jpg"

import './AboutPage.css'
function AboutPage() {
    return(
    <>
        <div id = "all">
            <Navbar />
            <h1>
                About Page
            </h1>
            <h2>
                About:
            </h2>
            <h3>
                What the website is about: Learning all the steps to make, create, and deploy your Unity games.
            </h3>
            <h3>
                Why are we doing this? To help developers learn how to create Unity games in a single space.
            </h3>
            <h3>
                Who created this?
            </h3>
            <div id = "super">
                <div>
                    <img src = {ryan} alt = "Ryan Le" width = "200" height = "200"/>
                    <p>Ryan Le</p>
                </div>
                <div>
                    <img src = {daniel} alt = "Daniel Burnayev" width = "200" height = "200"/>
                    <p>Daniel Burnayev</p>
                </div>
                <div>
                    <img src = {angel} alt = "Angel" width = "200" height = "200"/>
                    <p>Angel</p>
                </div>
                <div>
                    <img src = {shevyn} alt = "Shevyn Buhary" width = "200" height = "200"/>
                    <p>Shevyn Buhary</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default AboutPage;