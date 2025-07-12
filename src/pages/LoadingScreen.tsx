import Pokedex from "../assets/pokedex.png";
import Style from "./loadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={Style.loadingScreen}>
        <img className={Style.loadingScreenImg} src={Pokedex} alt="Pokedex" />
    </div>
  );
};

export default LoadingScreen;