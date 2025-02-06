/* eslint-disable react/prop-types */
import logo3 from "./assets/logo3.png";
import COLORS from "./components/color";
import { Link } from "react-router-dom";

const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="crique-light modal-overlay"
      style={{ backgroundColor: COLORS.blue }}
    >
      <div className="flex flex-row justify-between p-10">
        <Link to="/" onClick={onClose}>
          <img src={logo3} className="w-30 h-20" alt="Logo" />
        </Link>
        <div onClick={onClose}>
          <h1 className="text-5xl text-white">X</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link
          to="/vision"
          className="text-7xl p-5"
          style={{
            color: COLORS.green,
            borderBottom: 1,
            borderColor: "white",
            borderStyle: "solid",
            width: "100%",
            textAlign: "center",
          }}
          onClick={onClose}
        >
          ABOUT
        </Link>
        <Link
          to="/works"
          className="text-7xl p-5"
          style={{
            color: COLORS.green,
            borderBottom: 1,
            borderColor: "white",
            borderStyle: "solid",
            width: "100%",
            textAlign: "center",
          }}
          onClick={onClose}
        >
          WORKS
        </Link>
        <Link
          to="/experience"
          className="text-7xl p-5"
          style={{
            color: COLORS.green,
            borderBottom: 1,
            borderColor: "white",
            borderStyle: "solid",
            width: "100%",
            textAlign: "center",
          }}
          onClick={onClose}
        >
          SERVICE
        </Link>
        <Link
          to="/reachout"
          className="text-7xl p-5"
          style={{
            color: COLORS.green,
            borderBottom: 1,
            borderColor: "white",
            borderStyle: "solid",
            width: "100%",
            textAlign: "center",
          }}
          onClick={onClose}
        >
          GET IN TOUCH
        </Link>
      </div>
    </div>
  );
};

export default MenuModal;
