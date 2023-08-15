import React from "react";
import { FaBell } from "react-icons/fa";
import avatar from "../../public/avatar.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="float-right">
      <div className="flex gap-5 items-center">
        <div className="text-2xl">
          <FaBell />
        </div>
        <div className="flex gap-2 items-center border border-indigo-600 mr-4 mt-2 rounded-lg px-5 py-2">
          <div>
            <Image src={avatar} alt="Profile Image"></Image>
          </div>
          <div>
            <h3>Welcome back,</h3>
            <h2>Vishnu Swaroop</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
