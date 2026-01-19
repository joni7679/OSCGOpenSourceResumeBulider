import React, { useContext, useEffect, useState } from "react";
import { LogOut, User } from "lucide-react";
import { IoIosLogOut } from "react-icons/io"
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/Firebase";
import { AuthContext } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  const toggle = () => setIsOpen(!isOpen);

  const profileData = [
    { name: "profile", icon: User, path: 'profile' },
    { name: "logout", icon: IoIosLogOut, handelogOut: handelogOut },
  ];

  useEffect(() => {
    if (user) {
      setData(user);
      console.log("data", user?.email);
    } else {
      setData(null);
    }
  }, [user]);

  function handelogOut() {
    signOut(auth).then(() => {
      console.log("User signed out successfully.");
      toast.success("User signed out successfully.");
      navigate(`/`)
    }).catch((error) => {
      console.error("Error signing out:", error);
      toast.warn("Error signing out:");
    });
  }

  return (
    <>
      <div className="w-full px-8 py-5 shadow-md bg-white text-black flex justify-between items-center relative">
        <Link to={`/`} className="text-xl capitalize font-semibold" >resume bulider</Link>
        <div>
          <h1 className="text-md font-semibold text-gray-500">Welcome {data?.email || "Guest"} our Resume bulider</h1>
        </div>
        <div
          onClick={toggle}
          className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer rounded-full bg-[#DDD6FE] hover:scale-105 transition-transform">
          <User className="text-2xl text-[#702CDA]" />
        </div>

        {isOpen && (
          <div className="absolute top-[110%] right-8 w-44 bg-white shadow-xl rounded-xl py-2 border border-gray-100 z-50">
            {profileData.map((val, index) => {
              const { name, path, icon: Icon } = val;
              return (
                <Link
                  key={index}
                  onClick={() => {
                    if (path) navigate(`/${path}`);
                    if (handelogOut) handelogOut();
                  }}
                  className={`px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer transition-colors ${name === "logout"
                    ? "text-red-500 border-t border-gray-200"
                    : "text-gray-700"
                    }`}>
                  <Icon className="text-lg" />
                  <p className="capitalize font-medium">{name}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
