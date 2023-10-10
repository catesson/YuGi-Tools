export function ProfilBtn({connected}) {
  const ProfilBtn = () => {
    if (connected) {
      return (
        <div
          className={`connectBtn flex justify-center items-center h-11 bg-white rounded-full px-2`}
        >
          <p className="text-red-900 font-bold">Connexion</p>
          <img className=" h-8" src="/images/profile-circle-light.webp" />{" "}
        </div>
      );
    } else {
      return (
        <div
          className={`profilBtn flex justify-center items-center h-11 bg-red-900 border-solid border-4 rounded-full px-1`}
        >
          <p className="text-white font-bold">Profil</p>
          <img className=" h-8" src="/images/profile-circle-fill-white.webp" />{" "}
        </div>
      );
    }
  };
  return ProfilBtn();
}
