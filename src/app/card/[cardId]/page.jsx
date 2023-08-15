/* eslint-disable @next/next/no-img-element */
import { getAllCard, getCard } from "../../../API/callAPI";
import { TypeCard } from "@/app/component/TypeCard";
import IconInfo from "@/app/component/IconInfo";
import { pClasseTaille } from "@/unit/classeName";

export default function pageCardId({ params, searchParams }) {
  const card = getCard(params.cardId);
  const type = card.type.toLowerCase();
  const image = card.card_images[0];
  let color = null;
  let levelRankLink = <IconInfo image="/images/level.webp" text={card.level} />;
  let statistic = (
    <div className="w-full  flex justify-around">
      <p className="my-1 text-sm font-bold  md:text-base">ATK : {card.atk}</p>
      <p className="my-1 text-sm  font-bold md:text-base">DEF : {card.def}</p>
    </div>
  );
  switch (card.frameType.toLowerCase()) {
    case "link":
      color = "#0021CF";
      levelRankLink = <p className="font-bold text-2xl">LINK-{card.linkval}</p>;
      statistic = <p className="text-center my-1 text-sm font-bold md:text-base">ATK : {card.atk}</p>;
      break;
    case "fusion":
      color = "#7000AD";
      break;
    case "xyz":
      color = "#242424";
      levelRankLink = <IconInfo image="/images/rank.webp" text={card.level} />;
      break;
    case "ritual":
      color = "#199EE1";
      break;
    case "synchro":
      color = "#E0E0E0";
      break;
    case "effect":
      color = "#C0730A";
      break;
    case "normal":
      color = "#E0DD03";
      break;
    case "trap":
      color = "#C6006F";
      break;
    case "spell":
      color = "#007504";
      break;
    case "effect_pendulum":
      color = "linear-gradient(#C0730A, #007504)";
      break;
    case "normal_pendulum":
      color = "linear-gradient(#E0DD03, #007504)";
      break;
    case "xyz_pendulum":
      color = "linear-gradient(#242424, #007504)";
      break;
    case "fusion_pendulum":
      color = "linear-gradient(#7000AD, #007504)";
      break;
    case "synchro_pendulum":
      color = "linear-gradient(#E0E0E0, #007504)";
      break;
  }

  //afficher les informations qui existe sur tout les types de carte
  const universalCardInfo = () => {
    const archeType = card.archetype ? (
      <p className="my-1 text-sm  text-center md:text-base">
        Archetype : {card.archetype}
      </p>
    ) : undefined;
    
    //consulte la banlist et en affiche le contenu
    const banlistInfo = (banlist) => {
      
      const banOcg = banlist.ban_ocg ? (
        <p className={pClasseTaille}> OCG : {banlist.ban_ocg}</p>
      ) : (
        <p className={pClasseTaille}> OCG : unbanned </p>
      );
      const banTcg = banlist.ban_tcg ? (
        <p className={pClasseTaille}> TCG : {banlist.ban_tcg}</p>
      ) : (
        <p className={pClasseTaille}> OCG : unbanned </p>
      );
      return (
        <div>
          <h4 className="text-base my-1 text-center md:text-lg font-bold">
            BANLIST
          </h4>
          {banOcg}
          {banTcg}
        </div>
      );
    };
    const banlist = card.banlist_info ? (
      banlistInfo(card.banlist_info)
    ) : (
      <p className={pClasseTaille}>Unbanned in OCG and TCG</p>
    );
    return (
      <div className="w-full flex flex-col justify-center items-center sm:gap-4 sm:flex-row lg:w-1/3 lg:flex-col">
        <div className="w-2/3 sm:w-1/3 lg:w-full  ">
          <img src={image.image_url} alt={card.name} />
        </div>
        <div className="w-2/3 mx-2 text-center sm:w-1/3 lg:w-full  ">
          <TypeCard color={color} text={card.type} />
          {archeType}
          {banlist}
        </div>
      </div>
    );
  };

  const extension = () => {
    if (card.card_sets) {
      const allExtension = card.card_sets.map((extention, index) => {
        const nom = extention.set_name ? extention.set_name : "no data";
        const code = extention.set_code ? extention.set_code : "no data";
        const rarity = extention.set_rarity ? extention.set_rarity : "no data";
        const price = extention.set_price ? extention.set_price : "no data";
        const tdClasse = "text-xs bg-white h-9 px-2 lg:text-sm 2xl:text-base";
        return (
          <tr key={index} className="border-solid border-b-2 border-gray-400">
            <td className={tdClasse}>{nom}</td>
            <td className={tdClasse}>{code}</td>
            <td className={tdClasse}>{rarity}</td>
            <td className={"whitespace-nowrap " + tdClasse}>{price + " €"}</td>
          </tr>
        );
      });

      return (
        <div className="rounded-lg overflow-hidden mt-5">
          <table className="w-full text-center  border-solid border-4 border-collapse border-red-900 text-sm border-spacing-5">
            <thead>
              <tr className=" bg-red-900 text-white h-9 ">
                <th className="p-0 h-9">Extension</th>
                <th className="p-0 h-9">Code</th>
                <th className="p-0 h-9">Rarity</th>
                <th className="p-0 h-9">Prix</th>
              </tr>
            </thead>
            <tbody>{allExtension}</tbody>
          </table>
        </div>
      );
    }
    return <p className="text-center text-red-900">This card is in 0 set</p>;
  };

  const specialCardInfo = () => {
    const h1Class = "text-xl font-bold md:text-2xl lg:text-3xl lg:py-2";
    const h2Class = "text-base font-light italic md:text-lg lg:text-xl";
    const pClass =
      " text-xs mt-5 py-3 px-8 text-justify md:text-sm lg:text-base";
    //valeur des information pour toutes les cartes par défaut
    let cardInfos = (
      <div>
        <div className="text-center">
          <h1 className={h1Class}>{card.name}</h1>
          <p className={pClass}>{card.desc}</p>
        </div>
        {extension()}
      </div>
    );

    // modifie la valeur des données retourner par défaut pour les adapter aux cartes monstres
    if (type.includes("monster")) {
      cardInfos = (
        <div>
          <div className="w-full flex justify-around py-5 lg:justify-between">
            {levelRankLink}
            <IconInfo
              image={`/images/${card.attribute.toLowerCase()}.png`}
              text={card.attribute}
            />
          </div>
          <div className="text-center">
            <h1 className={h1Class}>{card.name}</h1>
            <h2 className={h2Class}>Type : {card.race}</h2>
            <p
              className={pClass}
              dangerouslySetInnerHTML={{
                __html: card.desc.replace(/\r\n/g, "<br>"),
              }}
            ></p>
          </div>
          {statistic}
          {extension()}
        </div>
      );
    }
    // modifie la valeur des données retourner par défaut pour les adapter aux cartes magies et pièges
    else if (type.includes("spell") || type.includes("trap")) {
      const raceOfCard =
        card.race.toLowerCase() == "normal" ? (
          <p>{card.race + " " + card.type}</p>
        ) : (
          <IconInfo
            image={`/images/${card.race.toLowerCase()}.webp`}
            text={card.race + " " + card.type}
          />
        );
      cardInfos = (
        <div>
          <div className="w-full flex justify-center mb-5">{raceOfCard}</div>
          <div className="text-center">
            <h1 className={h1Class}>{card.name}</h1>
            <p className={pClass}>{card.desc}</p>
          </div>
          {extension()}
        </div>
      );
    }
    return <div className="w-full bg-opacity-20 bg-amber-800 rounded-3xl px-3  py-5 lg:w-2/3 lg:p-16">{cardInfos}</div>;
  };

  return (
    <div className="w-11/12 m-auto flex flex-col gap-6 items-center lg:flex-row h-auto ">
      {universalCardInfo()}
      {specialCardInfo()}
    </div>
  );
}
