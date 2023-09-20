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
  const [searchFramType, setSearchFramType] = useState("");

  const resetParams = () => {
    const keyParams = [];
    //reset des paramètre en 2 boucle car ne supprime que le premier params si je le fais dans la même boucle.
    for (const key of params.keys()) {
      keyParams.push(key);
    }
    console.log(keyParams);
    for (const key of keyParams) {
      params.delete(key);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    event.preventDefault();
    resetParams();
    console.log(data);
    console.log(searchFramType);
    const searchData = data[searchFramType];
    //pour chaque données dans les champ du formulaires j'ajoute des params
    for (const cle in searchData) {
      if (searchData.hasOwnProperty(cle)) {
        params.set(cle, searchData[cle]);
      }
    }
    if (searchFramType == "Spell" || searchFramType == "Trap") {
      params.set("frameType", searchFramType);
    } else if (searchFramType == "Monster") {
      params.set("type", searchFramType);
    }

    search();
  };
  return (
    <form
      className="flex flex-col gap-y-3 flex-wrap searchForm justify-center items-center w-full sm:w-2/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-between lg:w-2/4 sm:w-full w-10/12 ">
        <input id="name" {...register("name")} placeholder="Your search" />
        <button type="submit" className={searchFramType == "" ? "" : "hidden"}>
          submit
        </button>
      </div>
      <div className="flex flex-row justify-between lg:w-2/4 sm:w-full w-10/12 px-2">
        <button
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Monster") {
              setSearchFramType("");
            } else {
              setSearchFramType("Monster");
            }
          }}
        >
          Monster
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Spell") {
              setSearchFramType("");
            } else {
              setSearchFramType("Spell");
            }
          }}
        >
          Spell{" "}
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();

            if (searchFramType == "Trap") {
              setSearchFramType("");
            } else {
              setSearchFramType("Trap");
            }
          }}
        >
          Trap{" "}
        </button>
      </div>

      <MonsterSearch
        className={searchFramType == "Monster" ? "" : "hidden"}
        register={register}
      />
      <MagicSearch
        className={searchFramType == "Spell" ? "" : "hidden"}
        register={register}
      />
      <TrapSearch
        className={searchFramType == "Trap" ? "" : "hidden"}
        register={register}
      />
    </form>
  );
}
