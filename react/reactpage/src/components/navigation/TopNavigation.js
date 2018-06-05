import React from 'react';
import { Menu, DropdownItem } from 'semantic-ui-react';
import {link} from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const TopNavigation = (props) => (
    <Menu secondary pointing>
        <Menu.Item as={link} to="/dashboard"> Dashboard </Menu.Item>

        <Menu.Menu position="right"></Menu.Menu>
            <Dropdown>
                <DropdownItem> logout </DropdownItem>
            </Dropdown>
    </Menu>
);

export default TopNavigation;