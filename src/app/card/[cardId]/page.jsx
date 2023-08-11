/* eslint-disable @next/next/no-img-element */
import { getAllCard, getCard } from "../../../API/callAPI";
import { TypeCard } from "@/app/component/TypeCard";
import IconInfo from "@/app/component/IconInfo";

export default function pageCardId({ params, searchParams }) {
  const card = getCard(params.cardId);
  const type = card.type.toLowerCase();
  const image = card.card_images[0];
  let color = null;
  let levelRankLink = <IconInfo image="/images/level.webp" text={card.level} />;
  let statistic = <div className="w-full  flex justify-around"><p>ATK : {card.atk}</p>
  <p>DEF : {card.def}</p></div>;
  switch (card.frameType.toLowerCase()) {
    case "link":
      color = "#0021CF";
      levelRankLink = <p className="font-bold text-2xl">LINK-{card.linkval}</p>;
      statistic = <p className="text-center">ATK : {card.atk}</p>;
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
      <p className="ml-3 text-xl text-center">Archetype : {card.archetype}</p>
    ) : undefined;

    //consulte la banlist et en affiche le contenu
    const banlistInfo = (banlist) => {
      const banOcg = banlist.ban_ocg ? (
        <p> OCG : {banlist.ban_ocg}</p>
      ) : (
        <p> OCG : unbanned </p>
      );
      const banTcg = banlist.ban_tcg ? (
        <p> TCG : {banlist.ban_tcg}</p>
      ) : (
        <p> OCG : unbanned </p>
      );
      return (
        <div className="text-center mt-4 ">
          <h4>Banlist</h4>
          {banOcg}
          {banTcg}
        </div>
      );
    };
    const banlist = card.banlist_info ? (
      banlistInfo(card.banlist_info)
    ) : (
      <p className="text-center">Unbanned in OCG and TCG</p>
    );
    return (
      <div className="w-1/3 flex flex-col content-center">
        <img src={image.image_url} alt={card.name} />
        <TypeCard color={color} text={card.type} />
        {archeType}
        {banlist}
      </div>
    );
  };

  const specialCardInfo = () => {
    if (type.includes("monster")) {
      return (
        <div className="w-2/3 p-16">
          <div className="w-full  flex justify-between">
            {levelRankLink}
            <IconInfo
              image={`/images/${card.attribute.toLowerCase()}.png`}
              text={card.attribute}
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl">{card.name}</h1>
            <h2 className="text-xl font-light italic">Type : {card.race}</h2>
            <p className="text-l px-8 text-justify" dangerouslySetInnerHTML={{ __html: card.desc.replace(/\r\n/g, '<br>') }}></p>
          </div>
          {statistic}
        </div>
      );
    } else if (type.includes("spell") || type.includes("trap")) {
      const raceOfCard =
        card.race.toLowerCase() == "normal" ? (
          <p>{card.race + " " + card.type}</p>
        ) : (
          <IconInfo
            image={`/images/${card.race.toLowerCase()}.webp`}
            text={card.race + " " + card.type}
          />
        );
      return (
        <div className="w-2/3 p-16">
          <div className="w-full flex justify-between">{raceOfCard}</div>
          <div className="text-center">
            <h1 className="text-5xl">{card.name}</h1>
            <p className="text-l mt-5 px-8 text-justify">{card.desc}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-11/12 m-auto flex flex-row h-auto ">
      {universalCardInfo()}
      {specialCardInfo()}
    </div>
  );
}
