import EngagementSection from "./EngagementSection"

export default function Engagement() {
    return (
        <div className="engagement-container">
            <h1>Our two engagement models</h1>
            <div>
                <EngagementSection
                    title="Managed Projects"
                    text="We do the heavy lifting on the technology front for your projects and blueprint"
                    image="managed projects.svg"></EngagementSection>
                <EngagementSection
                    title="Team Augmentation"
                    text="We act as your company's technology team so that you can focus on core business operations."
                    image="augmentation.svg"></EngagementSection>
            </div>

        </div>
    )
}