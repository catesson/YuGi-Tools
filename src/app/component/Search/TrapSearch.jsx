
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function TrapSearch({className, register}) {
    const { trapRace} = useContext(SearchContext)

    const SelectTrapRace = trapRace.map((element, index) => {
      return (<option key={index} value={`${element._id}`}>{element._id}</option>)
    })
    
     
  return (
    <div className={`${className} trapSearch`}>
      <select
        {...register("race.Trap")}
      >
        <option value=""></option>
        {SelectTrapRace}
      </select>{" "}
      <button type="submit">Submit</button>
    </div>
  );
}
