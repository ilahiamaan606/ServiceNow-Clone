export default function SolutionsList({ text1, text2, text3 }) {
    return (
        <div>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                {text3 ? <li>{text3}</li> : null}

            </ul>
        </div>
    )
}