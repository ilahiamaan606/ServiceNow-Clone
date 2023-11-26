export default function FooterList({ title, text }) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {text.map((element, index) => {
                    return (
                        <li key={index}>{element}</li>
                    )
                })}
            </ul>
        </div>
    )
}