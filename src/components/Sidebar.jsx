import React from "react";
import NavLink from "@/components/NavLink";

const navLinks = [
  {
    path: "/",
    title: "My Profile",
  },
  {
    path: "/my-connection",
    title: "My Connection",
  },
];

const Sidebar = () => {
  return (
    <div>
      <aside className="mr-10 p-2 text-center w-[245px]">
        <h1 className="mt-5 broder border py-2 px-4 rounded-xl mb-10">
          Dashboard
        </h1>
        <ul>
          {navLinks.map(({ path, title }) => (
            <li className="my-6" key={path}>
              <NavLink
                className="px-3 py-2"
                exact
                activeClassName="text-[#1A1558] border border-[#413B89] py-2 px-3 rounded-xl"
                href={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
