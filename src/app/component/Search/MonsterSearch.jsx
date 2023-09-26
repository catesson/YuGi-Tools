import { useContext } from "react";
import { SearchContext } from "./SearchContext";

export function MonsterSearch({ className, register }) {
  const { monsterRace, attribute, frameTypeMonster } =
    useContext(SearchContext);

  const SelectMonsterAttribute = attribute.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });
  const SelectMonsterRace = monsterRace.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });
  const SelectMonsterFrameType = frameTypeMonster.map((element, index) => {
    return (
      <option key={index} value={`${element._id}`}>
        {element._id}
      </option>
    );
  });

  return (
    <div className={`monsterSearch ${className} `}>
      <div className="label-input">
        <label htmlFor="Monster.level">Level / Rank</label>
        <input
        id="Monster.level"
          type="number"
          placeholder="Level/Rank"
          {...register("Monster.level", { min: 0, max: 12 })}
        />
      </div>
      <div className="label-input">
        <label htmlFor="Monster.scale">Pendulum scale</label>
        <input
        id="Monster.scale"
          type="number"
          placeholder="Pendulum scale"
          {...register("Monster.scale", { min: 0, max: 12 })}
        />
      </div>
      <div className="label-input">
        <label htmlFor="Monster.Categories">Cards Type</label>
        <select
          {...register("Monster.Categories")}
          id="Monster.Categories"
          placeholder="Categories"
        >
          <option value=""></option>
          {SelectMonsterFrameType}
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="Monster.attribute">Attribute</label>
        <select
          {...register("Monster.attribute")}
          id="Monster.attribute"
          placeholder="Attribute"
        >
          <option value=""></option>
          {SelectMonsterAttribute}
        </select>
      </div>
      <div className="label-input">
        <label htmlFor="Monster.race">Monster Type</label>
        <select {...register("Monster.race")} id="Monster.race">
          <option value="" placeholder="type"></option>
          {SelectMonsterRace}
        </select>
      </div>
    </div>
  );
}
