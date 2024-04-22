import { NavLink } from "react-router-dom";
import { ModalDiv } from "./mobileModal.styled";
import ButtonClose from "helpers/icons/x-modal.svg?react";

const MobileModal = ({ handleClickClose }) => {
  return (
    <ModalDiv>
      <div className="HeaderOfModal">
        <div className="UserContainer"></div>
        <ButtonClose className="ButtonClose" onClick={handleClickClose} />
      </div>
      <ul className="NavList">
        <li>
          <NavLink className="NavElement" to="/dictionary">
            Dictionary
          </NavLink>
        </li>
        <li>
          <NavLink className="NavElement" to="/recommend">
            Recommend
          </NavLink>
        </li>
        <li>
          <NavLink className="NavElement" to="/training">
            Training
          </NavLink>
        </li>
      </ul>
      <div className="Img" />
    </ModalDiv>
  );
};

export default MobileModal;
