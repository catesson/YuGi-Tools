import Image from 'next/image'
export default function LittleCard({name, image, id}){

    return (
        <div className="w-52 mx-3">
            <a href={`/card/${id}`}>
            <Image className="m-auto" style={{maxWidth:'168px', maxHeight:'246px'}} src={`${image.image_url_small}`} alt={name}/>
            <h2 className="text-center">{name}</h2>
</a>
        </div>
    )
}