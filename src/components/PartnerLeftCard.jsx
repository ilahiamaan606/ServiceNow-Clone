export default function PartnerLeftCard({image,title,text}) {
    return (
        <div className="partnerleftcard">
            <img src={image} alt="Circular Image" />
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}