import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "flag-icon-css/css/flag-icon.min.css";
import "../App.css";
import LanguageIcon from "@material-ui/icons/Language";
const ln = <LanguageIcon style={{ color: "#6f4f28" }} />;

function Flag() {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={ln}
        variant="white"
        size="sm"
        bsPrefix="drop"
      >
        <Dropdown.Item href="#/action-1">
          <span className="flag-icon flag-icon-us mx-2" />
          English
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <span className="flag-icon flag-icon-am mx-2" />
          Հայերեն
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <span className="flag-icon flag-icon-ru mx-2" />
          Русский
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Flag;
