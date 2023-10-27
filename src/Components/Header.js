import Logo from "./Logo";

function MenuItem({ links }) {
    let navLinks = links.map((link, i) => {
        return (
            <li key={i}>
                <button>{link}</button>
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
