import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const Nav = props => (
    <NavLink exact {...props} activeClassName="active"
    />
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const locationLabel = createLabel('map', "Locations")
const episodeLabel = createLabel('video camera', "Episodes")

const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={'/'} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='characters' as={Nav} to={'/characters'} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={'/locations'} content={locationLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={'/episodes'} content={episodeLabel} /> },
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav;
