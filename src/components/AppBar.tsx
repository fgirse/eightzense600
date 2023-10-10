import Link from "next/link";
import React from "react";
import SignInButton from "./LoginButton";

const AppBar = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <Link href={"/"}>Home</Link>
      <SignInButton />
    </div>
  );
};

export default AppBar;