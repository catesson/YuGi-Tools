
import { useContext } from "react";
import { SearchContext } from "./SearchContext";


export function MonsterSearch({className, register}) {
    const {monsterRace, attribute} = useContext(SearchContext)
 
    

      const SelectMonsterAttribute = attribute.map((element, index) => {
        return (<option key={index} value={`${element._id}`}>{element._id}</option>)
      })
      const SelectMonsterRace = monsterRace.map((element, index) => {
        return (<option key={index} value={`${element._id}`}>{element._id}</option>)
      })
   
  return (
    <div className={`monsterSearch ${className} `}>
      <input
        type="number"
        placeholder="Level"
        {...register("Monster.LV", { min: 0, max: 12 })}
      />
      <select
        {...register("Monster.attribute")}
        id=""
        placeholder="Attribute"
      >
        <option value=""></option>
        {SelectMonsterAttribute}
      </select>
      <select
        {...register("Monster.race")}
        id=""
    
      >
        <option value="" placeholder="type"></option>
        {SelectMonsterRace}
      </select>{" "}
     
    </div>
  );
}
