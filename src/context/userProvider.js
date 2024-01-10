"use client";
import React, { useState, useEffect } from "react";
import UserContext from "./userContext";
import { currentUser } from "@/services/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    async function call() {
      try {
        const currUser = await currentUser();

        setUser({ ...currUser });
      } catch (error) {
        console.log(error);
        
        setUser(undefined);
      }
    }
    if(!user){
      call();
    }



    
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}{" "}
    </UserContext.Provider>
  );
};

export default UserProvider;
