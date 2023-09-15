export function LifePoint({ lifePoint, name, onClick, className }) {
  if (lifePoint > 99999) {
    lifePoint = 99999
  }
  else if (lifePoint<0){
    lifePoint = 0
  }
  return (
    <div  className="flex flex-col cursor-pointer" onClick={onClick}>
      <div data-test-id={"lp " + name} className={`${className} w-96 h-44 border-8 flex items-center justify-center border-red-900 rounded-3xl`}>
        <p   className="text-9xl select-none">{lifePoint}</p>
      </div>
      <p className="text-center py-3 ">{name}</p>
    </div>
  );
}
