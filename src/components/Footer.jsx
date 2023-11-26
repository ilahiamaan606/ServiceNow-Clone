import FooterList from "./FooterList";
import Button from "./Button";

export default function Footer() {
    return (
        <>
            <div className="footer-container">

                <div className="footer-image">
                    <img src="logo-icon-blue.svg" alt="" />
                    <h3>Reviewed On</h3>
                    <div>
                        <img src="clutch-star-footer.png" alt="" />
                        <img src="glassdoor-footer.png" alt="" />
                    </div>
                </div>

                <div className="footerlist-container">
                    <FooterList
                        title="Business"
                        text={["Industries",
                            "Services",
                            "Case Studies",
                            "Security",
                            "Referral Program",
                            "Partner with us"]}></FooterList>
                    <FooterList
                        title="Engineers"
                        text={["Why Ajackus?",
                            "Culture",
                            "Benefits",
                            "Locations",
                            "Referral Program",
                            "Grow with us",
                            "Partnership Program"]}></FooterList>
                    <FooterList
                        title="Browse"
                        text={["Company",
                            "Clients",
                            "Technologies",
                            "Tools",
                            "Blog"]}></FooterList>
                </div>

                <Button text="Partner With Us"></Button>
            </div>
            <div className="last">
                <div>
                    <h4>©2023 Ajackus. All Rights Reserved.</h4>
                </div>
                <div>
                    <h4>Cookie Policy</h4>
                    <h4>Privacy Policy</h4>
                    <h4>Terms & Conditions</h4>
                </div>

            </div>
        </>
    )
}