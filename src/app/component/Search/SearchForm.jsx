"use client";

import { SearchContext } from "./SearchContext";
import { useContext, useState } from "react";

export function SearchForm() {
  const { search, params, race, attribute } = useContext(SearchContext);
  const [searchName, setSearchName] = useState("");
  const [searchLevelRank, setSearchLevelRank] = useState("");
  const [searchAttribute, setSearchAttribute] = useState("");
  const [searchType, setSearchType] = useState("");


  const handleNameChange = (event) => {
    setSearchName(event.target.value); // Met à jour l'état local avec la valeur de l'élément <input>
  };
  const handleLevelRankChange = (event) => {
    setSearchLevelRank(event.target.value); // Met à jour l'état local avec la valeur de l'élément <input>
  };
  const handleAttributeChange = (event) => {
    setSearchAttribute(event.target.value); // Met à jour l'état local avec la valeur de l'élément <input>
  };
  const handleTypeChange = (event) => {
    setSearchType(event.target.value); // Met à jour l'état local avec la valeur de l'élément <input>
  };

  const SelectMonsterAttribute = attribute.map((element, index) => {
    return (<option key={index} value={`${element._id}`}>{element._id}</option>)
  })
  const SelectMonsterRace = race.map((element, index) => {
    return (<option key={index} value={`${element._id}`}>{element._id}</option>)
  })

  return (
    <form action="">
      <label htmlFor="name">name</label>
      <input
        type=""
        placeholder="Name"
        name="searchCards"
        value={searchName}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Level"
        name="LV"
        min={0}
        max={12}
        value={searchLevelRank}
        onChange={handleLevelRankChange}
      />
      <select name="Attribute" id="" placeholder="Attribute"onChange={handleAttributeChange}>
        <option value="" ></option>
        {SelectMonsterAttribute}
      </select>
  <select name="Race" id="" onChange={handleTypeChange}>
    <option value="" placeholder="type" ></option>{SelectMonsterRace}</select> 
     

      <button
        name="submitSearchForm"
        onClick={(event) => {
          event.preventDefault();
          params.set("name", searchName);
          params.set("level", searchLevelRank);
          params.set("attribute", searchAttribute);
          params.set("race", searchType);
          search();
        }}
      >
        Submit
      </button>
    </form>
  );
}
