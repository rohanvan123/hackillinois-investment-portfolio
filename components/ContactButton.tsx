import { useUserData } from "@/hooks/user";
import { useState } from "react";
import SignOutIcon from "./Icons/SignOutIcon";
import router from "next/router";
import { getAuth } from "firebase/auth";

const ContactButton = () => {
  const { userData } = useUserData();
  const [displayPopup, setDisplayPopup] = useState(false);
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
      // Additional logout logic or navigation after sign out
    } catch (error) {
      // Handle error if necessary
    }
  };

  const closePopup = () => {
    setDisplayPopup(false);
  };
  console.log(displayPopup);

  return (
    <>
      <button
        className="w-[40px] h-[40px] bg-gray-700 mt-[20px] mr-[20px] rounded-full text-white"
        onClick={() => setDisplayPopup(!displayPopup)}
      >
        {userData ? `${userData.firstName[0]}${userData.lastName[0]}` : ""}
      </button>
      {displayPopup && (
        <div className="popup-container absolute top-0 right-0 z-50 border-gray-700 border-[2px] mt-[70px] mr-[20px] rounded-[10px] w-[250px] bg-white">
          {/* Your contact form content goes here */}
          <div className="display flex flex-row mt-[10px]">
            <div
              className="w-[40px] h-[40px] bg-gray-700 mr-[20px] rounded-full text-white flex flex-row items-center justify-center ml-[20px] mt-[2px]"
              onClick={() => setDisplayPopup(!displayPopup)}
            >
              {userData
                ? `${userData.firstName[0]}${userData.lastName[0]}`
                : ""}
            </div>
            <div className="flex flex-col">
              <div>
                {userData ? `${userData.firstName} ${userData.lastName}` : ""}
              </div>
              <div className="text-[14px]">
                {userData ? userData.email : ""}
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] border-gray-700 border-[1px] mt-[12px]"></div>
          <button
            className="display flex flex-row pb-[5px]"
            onClick={handleSignOut}
          >
            <div className="ml-[20px] mt-[5px]">
              <SignOutIcon />
            </div>
            <div className="text-[18px] mt-[5px] ml-[30px]">Sign Out</div>
          </button>
        </div>
      )}
    </>
  );
};

export default ContactButton;
