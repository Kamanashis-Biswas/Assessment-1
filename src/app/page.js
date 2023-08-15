import Image from "next/image";
import avatar from "../../public/avatar.png";
import star from "../../public/star.png";
import star2 from "../../public/star_2.png";
import logo from "../../public/logo.png";

const ProfilePage = () => {
  return (
    <div className="mt-28">
      <div>
        <div className="bg-[#1E2875] h-[85px] md:h-[169px] rounded-lg mx-5">
          <h2 className="text-white text-2xl ml-3 pt-3">My Profile</h2>
        </div>
        <div className="px-5 mt-10">
          <div className="md:flex gap-10">
            <div className="md:w-1/2">
              <div className="flex justify-between items-center mb-5">
                <Image
                  className="rounded-full w-[90px] h-[90px]"
                  src={avatar}
                  alt="Profile Image"
                ></Image>
                <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                  Upload Photo
                </button>
              </div>
              <div className="border-slate-400 border-2 p-3 rounded-lg mb-5">
                <div className="mb-4">
                  <h2>Your Name</h2>
                  <div className="flex items-center justify-between">
                    <h3>Vishnu Swaroop</h3>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <h2>Email</h2>
                  <div className="flex items-center justify-between">
                    <h3>email@gmail.com</h3>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <h2>Phone</h2>
                  <div className="flex items-center justify-between">
                    <h3>+9149652845732</h3>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-slate-400 border-2 p-3 rounded-lg mb-5">
                <div className="flex items-center justify-between mb-3">
                  <h2>
                    About <span className="text-[#1E2875]">Vishnu</span>
                  </h2>
                  <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                    Edit
                  </button>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam
                  vel congue luctus. Leo diam cras neque mauris ac arcu elit
                  ipsum dolor sit amet consectetur.
                </p>
              </div>
              <div className="border-slate-400 border-2 p-3 rounded-lg mb-10">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2>Skills</h2>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                  <div>
                    <h2 className="mb-5">NextJS</h2>
                    <h2>Typescript</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div>
                <div className="border-slate-400 border-2 p-3 rounded-lg mb-5 flex gap-5 items-center justify-between">
                  <div>
                    <h2 className="text-lg font-medium mb-2">
                      Professional Details
                    </h2>
                    <p className="w-2/3">
                      This are the professional details shown to users in the
                      app.
                    </p>
                  </div>
                  <div>
                    <Image
                      className="w-[48px] h-[48px] mr-10"
                      src={star}
                      alt="Star"
                    ></Image>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-medium mb-2">Certification</h2>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                  <div className="border-slate-400 border-2 rounded-full p-5 mb-5">
                    <div className="flex items-center">
                      <Image
                        className="ml-8 md:ml-16"
                        src={star2}
                        alt="Star"
                      ></Image>
                      <div className="ml-20 md:ml-40 text-center">
                        <h2>Python</h2>
                        <p>Coding Ninjas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-lg font-medium mb-2">Experience</h2>
                      <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                        Edit
                      </button>
                    </div>
                    <div className="border-slate-400 border-2 rounded-lg p-5 mb-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <h2>7 years (2014-2021)</h2>
                          <p>Oruphones</p>
                        </div>
                        <div>
                          <h2>Full-time</h2>
                          <p>--Full Stack Developer</p>
                        </div>
                        <div>
                          <Image src={logo} alt="logo"></Image>
                        </div>
                      </div>
                    </div>
                    <div className="border-slate-400 border-2 rounded-lg p-5 mb-5">
                      <div className="flex justify-between items-center">
                        <div>
                          <h2>6 months (2014)</h2>
                          <p>Oruphones</p>
                        </div>
                        <div>
                          <h2>Intern</h2>
                          <p>--Full Stack Developer</p>
                        </div>
                        <div>
                          <Image src={logo} alt="logo"></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg font-medium mb-2">Education</h2>
                    <button className="bg-slate-300 px-4 py-1 rounded-2xl">
                      Edit
                    </button>
                  </div>
                  <div className="border-slate-400 border-2 rounded-lg p-5 mb-5">
                    <div>
                      <h2>IIT HYDERABAD</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2>(2010-2014)</h2>
                      <p className="mr-44">Btech</p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Erat auctor a
                        aliquam vel congue luctus. Leo diam cras neque mauris ac
                        arcu elit ipsum dolor sit amet consectetur.
                      </p>
                    </div>
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

export default ProfilePage;
