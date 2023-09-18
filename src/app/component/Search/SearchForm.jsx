"use client";
import { useForm } from "react-hook-form";
import { MonsterSearch } from "./MonsterSearch";
import { MagicSearch } from "./MagicSearch";
import { SearchContext } from "./SearchContext";
import { useContext, useState } from "react";
import "@/app/styles/form.css";

export function SearchForm() {
  const { search, params } = useContext(SearchContext);
  const [searchName, setSearchName] = useState("");
  const [searchFramType, setSearchFramType] = useState("");

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
    <form className="flex flex-row flex-wrap searchForm justify-center">
      <input
        {...register("name")}
        placeholder="Your search"
        onChange={(event) => setSearchName(event.target.value)}
      />

      <input
        {...register("checkbox")}
        type="radio"
        value="Monster"
        onClick={(event) => {
          if (searchFramType == "Monster") {
            event.target.checked = false;
            setSearchFramType("");
            params.set("level", "");
            params.set("attribute", "");
            params.set("race", "");
          } else {
            setSearchFramType(event.target.value);
          }
        }}
      />
      <input
        {...register("checkbox")}
        type="radio"
        value="Spell"
        onClick={(event) => {
          if (searchFramType == "Spell") {
            event.target.checked = false;
            setSearchFramType("");
          } else {
            setSearchFramType(event.target.value);
          }
        }}
      />
      <input
        {...register("checkbox")}
        type="radio"
        value="Trap"
        onClick={(event) => {
          if (searchFramType == "Trap") {
            event.target.checked = false;
            setSearchFramType("");
          } else {
            setSearchFramType(event.target.value);
          }
        }}
      />
      
      <button
        type="submit"
        onClick={onSubmit}
        className={searchFramType == "" ? "" : "hidden"}
      >
        submit
      </button>
      <MonsterSearch
        className={searchFramType == "Monster" ? "" : "hidden"}
        searchName={searchName}
      />
      <MagicSearch className={searchFramType == "Spell" ? "" : "hidden"}
        searchName={searchName} />
    </form>
  );
}
