import { ModalContainer } from "./confirmModal.styled";
import { deleteWord } from "@redux/data/data-operation";
import { useDispatch, useSelector } from "react-redux";

const ConfirmModal = ({ handleClickClose }) => {
  const dispatch = useDispatch();
  const clickWordId = useSelector((state) => state.modal.clickWordId);

  const handleDeleteWord = () => {
    dispatch(deleteWord(clickWordId)).then((response) => {
      isNaN(response.payload) && handleClickClose();
    });
  };
  return (
    <ModalContainer>
      <h2 className="Title">
        Are you sure you want to delete {clickWordId.en}?
      </h2>
      <ul className="ListButton">
        <li className="ButtonYes" onClick={handleDeleteWord}>
          Yes
        </li>
        <li className="ButtonNo" onClick={() => handleClickClose()}>
          No
        </li>
      </ul>
    </ModalContainer>
  );
};

export default ConfirmModal;
