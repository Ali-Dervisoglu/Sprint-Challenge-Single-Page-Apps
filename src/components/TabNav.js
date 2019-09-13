import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const TabNav = () => {
    return (
        <div>
            <Nav className="App">
            <NavItem>
                <Link to="/" className="Nav-link">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/characters" className="Nav-link">Characters</Link>
            </NavItem>
            <NavItem>
                <Link to="/locations" className="Nav-link">Locations</Link>
            </NavItem>
            <NavItem>
                <Link to="/episodes" className="Nav-link">Episodes</Link>
            </NavItem>
            </Nav>
        </div>
    )
}

// export default function TabNav() {

// };

export default TabNav;
