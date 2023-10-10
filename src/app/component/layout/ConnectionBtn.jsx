import Image from 'next/image'
export function ProfilBtn({connected}) {
  const ProfilBtn = () => {
    if (connected) {
      return (
        <div
          className={`connectBtn flex justify-center items-center h-11 bg-white rounded-full px-2`}
        >
          <p className="text-red-900 font-bold">Connexion</p>
          <Image height={32} alt="Icon Connexion" src="/images/profile-circle-light.webp" />{" "}
        </div>
      );
    } else {
      return (
        <div
          className={`profilBtn flex justify-center items-center h-11 bg-red-900 border-solid border-4 rounded-full px-1`}
        >
          <p className="text-white font-bold">Profil</p>
          <Image height={32} alt="Icon Profil" src="/images/profile-circle-fill-white.webp" />{" "}
        </div>
      );
    }
  };
  return ProfilBtn();
}
