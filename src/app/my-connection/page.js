import React from "react";
import avatar from "../../../public/avatar.png";
import Image from "next/image";

export const metadata = {
  title: "My Connection | Assignment",
  description: "Next JSF",
};

const MyConnectionPage = () => {
  return (
    <div className="mt-28 ">
      <div>
        <div className="bg-[#1E2875] h-[85px] md:h-[169px] rounded-lg mx-5">
          <h2 className="text-white text-2xl ml-3 pt-3">My Connection</h2>
        </div>
        <div className="px-5 mt-10">
          <div className="md:grid grid-cols-3 gap-7">
            <div className="flex border-slate-400 border-2 p-3 rounded-lg mb-5 justify-between items-center">
              <div>
                <h2 className="mb-4">Vishnu Swaroop</h2>
                <p>Full stack developer</p>
                <p className="mb-10">@ Oruphones</p>
                <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                  Remove Connection
                </button>
              </div>
              <div>
                <Image
                  className="rounded-full w-[90px] h-[90px]"
                  src={avatar}
                  alt="Profile"
                ></Image>
              </div>
            </div>
            <div className="flex border-slate-400 border-2 p-3 rounded-lg mb-5 justify-between items-center">
              <div>
                <h2 className="mb-4">Vishnu Swaroop</h2>
                <p>Full stack developer</p>
                <p className="mb-10">@ Oruphones</p>
                <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                  Remove Connection
                </button>
              </div>
              <div>
                <Image
                  className="rounded-full w-[90px] h-[90px]"
                  src={avatar}
                  alt="Profile"
                ></Image>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div>
              <h2 className="text-xl font-light mb-8">
                People you can also connect
              </h2>
            </div>
            <div>
              <div className="md:grid grid-cols-3 gap-7">
                <div className="flex border-slate-400 border-2 p-3 rounded-lg mb-5 justify-between items-center">
                  <div>
                    <h2 className="mb-4">Vishnu Swaroop</h2>
                    <p>Full stack developer</p>
                    <p className="mb-10">@ Oruphones</p>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Remove Connection
                    </button>
                  </div>
                  <div>
                    <Image
                      className="rounded-full w-[90px] h-[90px]"
                      src={avatar}
                      alt="Profile"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyConnectionPage;
