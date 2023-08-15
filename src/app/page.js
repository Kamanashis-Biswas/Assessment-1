import Image from "next/image";
import avatar from "../../public/avatar.png";

const ProfilePage = () => {
  return (
    <div className="mt-28 ">
      <div>
        <div className="bg-[#1E2875] h-[85px] md:h-[169px] rounded-lg md:mr-10">
          <h2 className="text-white text-2xl ml-3 pt-3">My Profile</h2>
        </div>
        <div className="px-5 mt-3">
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
                <div>Prof Details</div>
                <div>Certification</div>
                <div>Exprence</div>
                <div>Education</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
