"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  const { data: session } = useSession();
  return (
    <div className="ml-auto flex gap-2">
      {session?.user ? (
        <>
          <p className="text-slate-300"> {session.user.name}</p>
          <button className="text-white bg-slate- 600" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <button className="text-slate-600 bg-white" onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default LoginButton;