import React, { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="p-8">
      <div className="bg-gray-400 p-4 shadow-lg rounded-lg">
        <div className="text-center mb-4">
          {/* User Image */}
          <img
            src={
              user?.photoURL
                ? user.photoURL
                : "https://i1.sndcdn.com/avatars-000396781371-h4mpjo-t500x500.jpg"
            }
            alt="User Image"
            className="w-24 h-24 rounded-full mx-auto"
          />
        </div>
        <h2 className="text-slate-100 text-2xl font-bold mb-2">
          {user?.displayName ? user.displayName : "Guest"}
        </h2>
        <h2 className="text-slate-100 text-1xl font-bold mb-2">
          Email: {user?.email && user.email}
        </h2>
        <p className="text-slate-100 mb-4">
          Email Verification:{" "}
          {user?.emailVerified === true
            ? "Verified"
            : "Email isn't  verified!! Verify Please"}
        </p>
        <div className="flex justify-center space-x-4">
          {/* Social Media Links */}
          <a href="#" className="text-blue-600 hover:underline">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-indigo-600 hover:underline">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-blue-900 hover:underline">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
