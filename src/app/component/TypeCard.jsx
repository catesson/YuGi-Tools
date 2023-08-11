

export function TypeCard({color, text}){
    return (
        <div className="flex flex-row justify-center my-4">
            <div className="w-5 h-6 rounded-md" style={{background : color}}></div>
            <p className="ml-3 text-xl">{text}</p>
        </div>
    )
}