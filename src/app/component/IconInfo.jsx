/* eslint-disable @next/next/no-img-element */


export default function IconInfo({image, text}){
    return (
        <div className="flex ">
            <img className="w-8 h-8"src={`${image}`} alt={text} />
            <p className="ml-3 leading-8">{text}</p>
        </div>
    )
}