import Logo from "./Logo";

function MenuItem({ links }) {
    let navLinks = links.map((link) => {
        return (
            <li key={link}>
                <a href="#">{link}</a>
            </li>
        );
    });
    return navLinks;
}

function Header() {
    return (
        <header className="header flex">
            <Logo />
            <ul className="nav_menu flex">
                <MenuItem links={["Features", "Team", "Sign In"]} />
            </ul>
        </header>
    );
}

export default Header;
