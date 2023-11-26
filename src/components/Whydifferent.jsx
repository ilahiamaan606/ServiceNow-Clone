export default function Whydifferent({ image, text }) {
    return (
        <div className="whydifferent-section">
            <img src={image} alt="Circular Image" className="circle-image" />
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    );
}