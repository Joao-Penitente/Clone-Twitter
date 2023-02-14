import { Sparkle } from "phosphor-react";
import "./Header.css";

interface HeaderProps {
    title: string;
}

export function Header(props: HeaderProps){
    return (
        <header className="timeline-header">
            {props.title}
            <Sparkle />
        </header>
    )
}