import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Profile | Assignment",
  description: "Assignment for Full Stack Developer",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex container mx-auto">
          <div>
            <Sidebar></Sidebar>
          </div>
          <div className="w-full bg-slate-100">
            <div>
              <Navbar></Navbar>
            </div>
            <div> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
