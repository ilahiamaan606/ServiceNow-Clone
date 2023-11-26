export default function OtherServicesSection({image,title,text}) {
    return (
        <div className="otherservicessection-card">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>

        </div>
    )
}