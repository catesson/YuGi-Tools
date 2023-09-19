
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function MagicSearch({className, searchName}) {
    const {params, search, magicRace} = useContext(SearchContext)
    const [searchRace, setSearchRace] = useState("")
    const SelectMagicRace = magicRace.map((element, index) => {
      return (<option key={index} value={`${element._id}`}>{element._id}</option>)
    })
    const {
        register,
        formState: { errors },
      } = useForm()
     
      const onSubmit = (event) => {
        event.preventDefault()
        params.set("name", searchName);
        params.set("race", searchRace);
        params.set("frameType", "spell")
        search();
      };
  return (
    <div className={`${className} magicSearch`}>
      <select
        {...register("magicRace")}
        id=""
        onChange={(event) => setSearchRace(event.target.value)}
      >
        <option value=""></option>
        {SelectMagicRace}
      </select>{" "}
      <button type="submit" onClick={onSubmit}>Submit</button>
    </div>
  );
}
