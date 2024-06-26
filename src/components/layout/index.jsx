import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "helpers/icons/Craftwork.svg?react";
import User from "helpers/icons/gridicons_user-2.svg?react";
import Burger from "helpers/icons/Nav.svg?react";
import { MainContainer } from "./layout.styled";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalMobile } from "@redux/modals/modal-slice";
import authOperations from "@redux/auth/auth-operations";
import Modals from "../modals";
import Footer from "../footer";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobileModalOpen = useSelector(
    (state) => state.modal.isModalOpenMobile
  );
  const isModalOpenAddWord = useSelector(
    (state) => state.modal.isModalOpenAddWord
  );
  const isModalOpenClickWord = useSelector(
    (state) => state.modal.isModalOpenClickWord
  );
  const isModalOpenConfirmation = useSelector(
    (state) => state.modal.isModalOpenConfirmation
  );
  const isModalOpenEdit = useSelector((state) => state.modal.isModalOpenEdit);
  const isModalOpenWellDone = useSelector(
    (state) => state.modal.isModalOpenWellDone
  );
  const userName = useSelector((state) => state.auth.name);

  const handleSubmit = () => {
    dispatch(authOperations.logOut()).then(navigate("/"));
  };

  return (
    <>
      <MainContainer>
        <NavLink to="/" className="LogoContainer">
          <Logo className="Logo" />
          <h2>VocabBuilder</h2>
        </NavLink>
        {userName && (
          <ul className="NavigationContainer">
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
        )}

        {userName && (
          <div className="RightSideHeader">
            <button className="ButtonLogOut" onClick={handleSubmit}>
              Log Out
            </button>
            <div className="UserContainer">
              <p className="UserName">{userName}</p>
              <span className="UserImag">
                <User />
              </span>
            </div>
            <Burger
              className="ButtonBurger"
              onClick={() => dispatch(openModalMobile())}
            />
          </div>
        )}
      </MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {(isMobileModalOpen ||
        isModalOpenAddWord ||
        isModalOpenClickWord ||
        isModalOpenConfirmation ||
        isModalOpenEdit ||
        isModalOpenWellDone) && <Modals />}
      <Footer />
    </>
  );
};

export default Layout;
