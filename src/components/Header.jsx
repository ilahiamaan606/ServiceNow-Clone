import Button from "./Button"

export default function Header() {
    return (
        <ol className="header">
            <li><img src="logo-icon-blue.svg" alt="Image here" /></li>
            <li>Industries</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Company</li>
            <li>Partner Platforms</li>
            <li>Blog</li>
            <li><Button text="Partner with us"></Button></li>
        </ol>
    )
}