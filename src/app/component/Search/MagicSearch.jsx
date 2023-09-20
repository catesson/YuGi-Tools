
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function MagicSearch({className, register}) {
    const {magicRace} = useContext(SearchContext)
    const SelectMagicRace = magicRace.map((element, index) => {
      return (<option key={index} value={`${element._id}`}>{element._id}</option>)
    })
   
  return (
    <div className={`${className} magicSearch`}>
      <select
        {...register("race.Spell")}
      >
        <option value=""></option>
        {SelectMagicRace}
      </select>{" "}
      <button type="submit">Submit</button>
    </div>
  );
}
