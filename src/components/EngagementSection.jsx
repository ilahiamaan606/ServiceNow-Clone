export default function EngagementSection({title,text,image}){
    return(
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}