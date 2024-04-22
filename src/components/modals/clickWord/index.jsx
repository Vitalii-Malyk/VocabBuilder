import { useDispatch, useSelector } from "react-redux";
import { ClickWordContainer } from "./clickWord.styled";
import Pencil from "helpers/icons/pencil-green.svg?react";
import Trash from "helpers/icons/trash-green.svg?react";
import {
  openModalConfirmation,
  openModalEdit,
} from "@redux/modals/modal-slice";

const ClickWord = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const clickWordCoordinates = useSelector(
    (state) => state.modal.clickWordCoordinates
  );

  const handleDeleteWord = () => {
    handleClickClose();
    dispatch(openModalConfirmation());
  };

  const handleEditClick = () => {
    handleClickClose();
    dispatch(openModalEdit());
  };
  return (
    <ClickWordContainer x={clickWordCoordinates.x} y={clickWordCoordinates.y}>
      <li className="Element" onClick={handleEditClick}>
        <Pencil />
        Edit
      </li>
      <li className="Element" onClick={handleDeleteWord}>
        <Trash />
        Delete
      </li>
    </ClickWordContainer>
  );
};

export default ClickWord;
