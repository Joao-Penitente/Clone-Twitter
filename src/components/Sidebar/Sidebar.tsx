import TwitterLogo from "../../assets/logo.svg";
import "./Sidebar.css";
import {
    Bell,
    BookmarkSimple,
    DotsThreeCircle,
    Envelope,
    FileText,
    Hash,
    House,
    Pencil,
    User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Sidebar() {
    return (
        <aside className="sidebar">
            <img className="logo" src={TwitterLogo} alt="Logo" />
            <nav className="main-navigation">
                <NavLink to="/">
                    <House weight="fill" />
                    <span>Home</span>
                </NavLink>
                <a href="">
                    <Hash />
                    <span>Explorar</span>
                </a>
                <a href="">
                    <Bell />
                    <span>Notifications</span>
                </a>
                <a href="">
                    <Envelope />
                    <span>Messages</span>
                </a>
                <a href="">
                    <BookmarkSimple />
                    <span>Bookmarks</span>
                </a>
                <a href="">
                    <FileText />
                    <span>Lists</span>
                </a>
                <a href="">
                    <User />
                    <span>Profile</span>
                </a>
                <a href="">
                    <DotsThreeCircle />
                    <span>More</span>
                </a>
            </nav>
            <button className="new-tweet" type="button">
                <Pencil />
                <span>tweet</span>
            </button>
        </aside>
    )

}