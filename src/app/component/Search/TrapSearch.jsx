
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";


export function TrapSearch({className, searchName}) {
    const {params, search, trapRace} = useContext(SearchContext)
    const [searchRace, setSearchRace] = useState("")
    const SelectTrapRace = trapRace.map((element, index) => {
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
        params.set("frameType", "trap")
        search();
      };
  return (
    <div className={`${className} trapSearch`}>
      <select
        {...register("trapRace")}
        id=""
        onChange={(event) => setSearchRace(event.target.value)}
      >
        <option value=""></option>
        {SelectTrapRace}
      </select>{" "}
      <button type="submit" onClick={onSubmit}>Submit</button>
    </div>
  );
}
