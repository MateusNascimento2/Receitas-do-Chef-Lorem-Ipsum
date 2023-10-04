import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = (props) => {
    
    return (
        <div className="bg-white shadow rounded-lg mb-10 hover:scale-105 transition-all md:w-[49.1%] lg:w-full">
            <Link to={`/recipe/${props.id}`}><img src={props.img} alt="imagem do alimento" className="h-48 object-cover w-full mb-2 rounded-t-lg" /></Link>
            <div className="p-4">
                <p className="text-center font-bold">{props.nomeReceita}</p>
                <p className="mb-8 h-36 inline-block overflow-hidden">{props.descricaoReceita}</p>
                <a href={props.linkYoutube} target="_blank" rel="noreferrer" className="p-2 bg-orange-600 text-white mt-5 rounded-md hover:brightness-90 lg:p-3">Youtube</a>
            </div>
        </div>
    )
}

export default Card;