import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export const NavBarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md" style={{ backgroundColor: "rgb(79,121,66)" }}>
        <NavbarBrand>Grocery Management System</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/grocerylist">Grocery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addlist">Add Grocery List</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/groceryitem">Grocery Item</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;