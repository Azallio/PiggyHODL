import "tailwindcss"
import "../css/page-components-css/footer.css"
import { NavLink } from "react-router";

function Footer() {
    return (
        <>
            <footer>
                <p>©piggyHODL all rights reserved</p>
                <section className="privatePolicyContainer">
                    <NavLink to="https://telegram.org/tos/mini-apps">
                        <span className="termsOfUse">Terms of use</span>
                    </NavLink>
                    <NavLink to="https://telegram.org/tos/mini-apps">
                        <span className="privatePolicy">Privacy policy</span>
                    </NavLink>
                </section>
            </footer>
        </>
    )
}

export default Footer;