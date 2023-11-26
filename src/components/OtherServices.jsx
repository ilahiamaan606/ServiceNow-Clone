import OtherServicesSection from "./OtherServicesSection"

export default function OtherServices(){
    return(
        <div className="otherservices-container">
            <h1>Other Services We Offer</h1>
            <div>
                <OtherServicesSection 
                image="new-icons-2023/e-commerce-icon.svg"
                title="E-commerce"
                text="Get innovative web designs for your online shopping platform." />
                <OtherServicesSection 
                image="new-icons-2023/low-no-code-icon.svg"
                title="Low-Code/No-Code Development"
                text="Swiftly develop high-tech solutions with minimal or no coding." />
                <OtherServicesSection 
                image="new-icons-2023/software-testing-icon.svg"
                title="Testing"
                text="Ensure high quality with top-tier testing and automated checks." />
                <OtherServicesSection 
                image="new-icons-2023/devops-icon.svg"
                title="DevOps"
                text="Trim costs via cloud infrastructure for maintenance and upgrades." />
                <OtherServicesSection 
                image="new-icons-2023/data-analysis-icon.svg"
                title="Data Analytics"
                text="Make the most of insights and savings through cloud-based analytics." />
                <OtherServicesSection 
                image="new-icons-2023/uiux-design-icon.svg"
                title="UI/UX Design"
                text="Engage users with impactful UI/UX for superior results in business." />
                <OtherServicesSection 
                image="new-icons-2023/emerging-technologies-icon.svg"
                title="Emerging Technologies"
                text="Future-proof your business supported by top data-driven solutions." />
                <OtherServicesSection 
                image="new-icons-2023/mobile-development-icon.svg"
                title="Mobile Development"
                text="Enhance your business with the latest iOS and Android mobile apps." />
                <OtherServicesSection 
                image="new-icons-2023/web-development-icon.svg"
                title="Web Development"
                text="Elevate your business with front-end and back-end tech solutions." />

            </div>
        </div>
    )
}