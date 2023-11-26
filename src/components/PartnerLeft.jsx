import PartnerLeftCard from "./PartnerLeftCard"

export default function PartnerLeft(){
    return(
        <div className="partner-left">
            <h1>Partner With Us</h1>
            <p>Reach out for inquiries or consultations.</p>
            <div>
                <PartnerLeftCard
                image="years in the industry.svg"
                title="12+"
                text="Years in the industry"></PartnerLeftCard>
                <PartnerLeftCard
                image="projects delivered.svg"
                title="300+"
                text="Projects Delivered"></PartnerLeftCard>
                <PartnerLeftCard
                image="end users.svg"
                title="500M+"
                text="End users impacted"></PartnerLeftCard>
            </div>
        </div>
    )
}