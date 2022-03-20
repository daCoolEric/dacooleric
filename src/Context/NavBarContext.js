import { useState, useContext, createContext } from "react";

const NavBarContext = createContext();

// This syntax is to create custom hooks
export const useNavBar = () => useContext(NavBarContext);

function NavBarContextProvider(props) {
  const active = {
    color: "#f0860c",
  };
  const inActive = {
    color: "#fff",
  };

  const [color1, setColor1] = useState(active);
  const [color2, setColor2] = useState(inActive);
  const [color3, setColor3] = useState(inActive);
  const [color4, setColor4] = useState(inActive);
  const [color5, setColor5] = useState(inActive);
  const [visibility, setVisibility] = useState("hidden");
  const [width, setWidth] = useState("0vw");
  const [transition, setTransition] = useState("0.4s");
  const [color, setColor] = useState("#fff");
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setVisibility("visible");
    setWidth("100vw");
    setColor("#fff");
    setTransition("0.4s");
    setIsOpen(true);
  };

  const closeMenu = () => {
    setVisibility("hidden");
    setColor("#000");
    setWidth("0vw");
    setTransition("0.4s");
    setIsOpen(false);
  };

  const changeColor = (param) => {
    switch (param) {
      case "home":
        setColor1(active);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
        break;
      case "about":
        setColor1(inActive);
        setColor2(active);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
        break;
      case "works":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(active);
        setColor4(inActive);
        setColor5(inActive);
        break;
      case "resume":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(active);
        setColor5(inActive);
        break;
      case "contact":
        setColor1(inActive);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(active);
        break;

      default:
        setColor1(active);
        setColor2(inActive);
        setColor3(inActive);
        setColor4(inActive);
        setColor5(inActive);
    }
  };

  //logics
  const value = {
    color1,
    color2,
    color3,
    color4,
    color5,
    visibility,
    width,
    transition,
    color,
    isOpen,
    changeColor,
    openMenu,
    closeMenu,
  };
  return (
    <NavBarContext.Provider value={value}>
      {props.children}
    </NavBarContext.Provider>
  );
}

export default NavBarContextProvider;
