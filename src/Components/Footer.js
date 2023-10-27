import Logo from "./Logo";
import phoneIcon from "./icon-phone.svg";
import emailIcon from "./icon-email.svg";
import locationIcon from "./icon-location.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function FooterMenu({ items }) {
    let menuList = items.map((item) => {
        return <li>{item}</li>;
    });

    return <ul>{menuList}</ul>;
}

function Footer() {
    return (
        <footer className="footer grid">
            <div>
                <Logo />
                <div className="flex align_start">
                    <img src={locationIcon} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={phoneIcon} alt="" />
                    <span>+1-543-123-4567</span>
                </div>
                <div>
                    <img src={emailIcon} alt="" />
                    <span>example@fylo.com</span>
                </div>
            </div>
            <div className="footer_nav flex">
                <div>
                    <FooterMenu items={["About Us", "Jobs", "Press", "Blog"]} />
                </div>
                <div>
                    <FooterMenu items={["Contact Us", "Terms", "Privacy"]} />
                </div>
            </div>
            <div className="socials flex">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
    );
}

export default Footer;
