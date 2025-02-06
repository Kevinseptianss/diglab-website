import { Link } from "react-router-dom";
import coma from "../assets/coma.png";
import COLORS from "./color";

const Footer = () => {
  return (
    <div className="crique-light">
      <div className="flex flex-row">
        <div className="p-10 flex-1">
          <p className="font-bold">Address :</p>
          <p>
            Perumahan Baliview Puri Legian D9/22, <br />
            Cireundeu Raya, Ciputat Timur, Tangerang <br />
            Selatan, Banten 15419
          </p>
        </div>
        <div className="p-10 flex-1">
          <div>
            <p className="font-bold">Follow Us :</p>
            <p>Instagram Tiktok</p>
          </div>
        </div>
        <div className="p-10 flex-1">
          <div>
            <p className="font-bold">Let&apos;s Work Together :</p>
            <Link to='/reachout'>
              <div
                style={{ backgroundColor: COLORS.blue }}
                className="flex flex-row px-8 py-2"
              >
                <img src={coma} className="w-10 h-10" />
                <h1
                  style={{ color: COLORS.green }}
                  className="text-3xl font-semibold"
                >
                  GET IN TOUCH!
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
