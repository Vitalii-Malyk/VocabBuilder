import { HomePageContainer } from "./homePage.styled";
import { ReactComponent as Logo } from "helpers/icons/CraftworkHome.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <HomePageContainer>
      <NavLink className="LogoContainer" to={!isLoggedIn && "register"}>
        <Logo />
        <h2 className="LogoTitle">VocabBuilder</h2>
      </NavLink>
    </HomePageContainer>
  );
};

export default HomePage;
