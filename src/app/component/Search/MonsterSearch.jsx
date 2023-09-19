
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function MonsterSearch({className, searchName}) {
    const {monsterRace, attribute, params, search} = useContext(SearchContext)
    const [searchLevelRank, setSearchLevelRank] = useState("");
    const [searchAttribute, setSearchAttribute] = useState("");
    const [searchRace, setSearchRace] = useState("");
    
    const {
        register,
        formState: { errors },
      } = useForm()
      const SelectMonsterAttribute = attribute.map((element, index) => {
        return (<option key={index} value={`${element._id}`}>{element._id}</option>)
      })
      const SelectMonsterRace = monsterRace.map((element, index) => {
        return (<option key={index} value={`${element._id}`}>{element._id}</option>)
      })
      const onSubmit = (event) => {
        
        event.preventDefault()
       
        search();
               
      };
  return (
    <div className={`monsterSearch ${className} f`}>
      <input
        type="number"
        placeholder="Level"
        {...register("LV", { min: 0, max: 12 })}
        onChange={(event) => setSearchLevelRank(event.target.value)}
      />
      <select
        {...register("attribute")}
        id=""
        placeholder="Attribute"
        onChange={(event) => setSearchAttribute(event.target.value)}
      >
        <option value=""></option>
        {SelectMonsterAttribute}
      </select>
      <select
        {...register("race")}
        id=""
        onChange={(event) => setSearchRace(event.target.value)}
      >
        <option value="" placeholder="type"></option>
        {SelectMonsterRace}
      </select>{" "}
      <button type="submit" onClick={onSubmit}>Submit</button>
    </div>
  );
}
