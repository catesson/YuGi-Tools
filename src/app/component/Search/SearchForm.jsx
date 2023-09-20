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
    console.log(data);
    console.log(searchFramType);

    //pour chaque données dans les champ du formulaires j'ajoute des params
    for (const cle in data) {
      if (data.hasOwnProperty(cle)) {
        if (cle != "race") {
          params.set(cle, data[cle]);
        } else {
          const { race } = { ...data };
          
          params.set(cle, race[searchFramType] ? race[searchFramType] : "" );
        }
      }
    }
    params.set("frameType", searchFramType)
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

            resetParams();
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
            resetParams();
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
            resetParams();
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
