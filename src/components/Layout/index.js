import React, { useState } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { history } from "../../store";

const Layout = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    history.push(`/${name}`);
    setActiveItem(name);
  };

  return (
    <Menu>
      <Menu.Item>
        <img src="/logo.png" />
      </Menu.Item>

      <Menu.Item
        name="projects"
        active={activeItem === "projects"}
        onClick={handleItemClick}
      >
        Projects
      </Menu.Item>

      <Menu.Item
        name="courses"
        active={activeItem === "courses"}
        onClick={handleItemClick}
      >
        Courses
      </Menu.Item>

      <Menu.Menu position="right">
        <Dropdown item text="User Name">
          <Dropdown.Menu>
            <Dropdown.Item>My Courses</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

export default Layout;
