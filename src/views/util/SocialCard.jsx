import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";
import "./SocialCard.css";

export default function SocialCard() {
    return (
        <div className="socialCard">
            <a href="#" className="socialItem">
                <FaFacebook className="socialIcon" />
                facebook
            </a>
            <a href="#" className="socialItem">
                <FaInstagram className="socialIcon" />
                instagram
            </a>
            <a href="#" className="socialItem">
                <FaWhatsapp className="socialIcon" />
                whatsapp
            </a>
            <a href="#" className="socialItem">
                <FaLinkedin className="socialIcon" />
                linkedin
            </a>
        </div>
    );
}
