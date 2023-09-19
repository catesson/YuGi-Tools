"use client";
import { useForm } from "react-hook-form";
import { MonsterSearch } from "./MonsterSearch";
import { MagicSearch } from "./MagicSearch";
import { TrapSearch } from "./TrapSearch";
import { SearchContext } from "./SearchContext";
import { useContext, useState } from "react";
import "@/app/styles/form.css";

export function SearchForm() {
  const { search, params } = useContext(SearchContext);
  const [searchName, setSearchName] = useState("");
  const [searchFramType, setSearchFramType] = useState("");

   const resetParams = () => {
    const keyParams = []
    //reset des paramètre en 2 boucle car ne supprime que le premier params si je le fais dans la même boucle. 
    for (const key of params.keys()) {
      keyParams.push(key)
    }
    for(const key of keyParams){
      params.delete(key)
    }
   }
  const {
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    
    event.preventDefault();
    params.set("name", searchName);
    search();
  };
  return (
    <form className="flex flex-col gap-y-3 flex-wrap searchForm justify-center w-full sm:w-2/3">
      <div className="flex flex-row justify-center ">
        <input
          id="name"
          {...register("name")}
          placeholder="Your search"
          onChange={(event) => setSearchName(event.target.value)}
        />
        <button
          type="submit"
          onClick={onSubmit}
          className={searchFramType == "" ? "" : "hidden"}
        >
          submit
        </button>
      </div>
      <div className="flex flex-row justify-between w-full">
        <button onClick={(event) => {
          
          event.preventDefault()
          resetParams()
            if (searchFramType == "Monster") {
              setSearchFramType("");
           
              
            } else {
              setSearchFramType("Monster");
            }}}>
          Monster
        </button>
  
        <button
          onClick={(event) => {

            event.preventDefault()   
            resetParams()
            if (searchFramType == "Spell") {
              setSearchFramType("");
            } else {
              setSearchFramType("Spell");
            }
          }}
        >Spell </button>
        <button
          
          onClick={(event) => {
            event.preventDefault()
            resetParams()
            if (searchFramType == "Trap") {
              setSearchFramType("");
            } else {
              setSearchFramType("Trap");
            }
          }}
        >Trap </button>
      </div>
      
        <MonsterSearch
          className={searchFramType == "Monster" ? "" : "hidden"}
          searchName={searchName}
        />
        <MagicSearch
          className={searchFramType == "Spell" ? "" : "hidden"}
          searchName={searchName}
        />
        <TrapSearch
          className={searchFramType == "Trap" ? "" : "hidden"}
          searchName={searchName}

        />

    </form>
  );
}
