"use client";
import { getAllCard, getCard } from "@/API/callAPI";
import { userConnect } from "@/API/callAPI";
import { useEffect, useState } from "react";

export default function Home() {
  const allcard = getCard(34541863);
  // const [user, setUser] = useState("");
  // useEffect(() => {
  //   async function fetchData() {

  //      await userConnect("steven6970@gmail.com", "yugioh").then(user => {
  //         setUser(user);
  //       }).catch(error => {
  //         alert(error)
  //       });
        

     
  //   }

  //     fetchData()

    
  // }, []);
  return <div>{user.userId}</div>;
}
