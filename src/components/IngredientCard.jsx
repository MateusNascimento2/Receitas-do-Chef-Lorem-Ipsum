import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const IngredientCard = (props) => {


    return (
        <Link to={`/by-ingredient/${props.ingredienteNome}`}>
            <div className="p-4 bg-white shadow rounded-md hover:scale-105 hover:transition-all">
                <p className="font-bold text-xl">{props.ingredienteNome}</p>
            </div>
        </Link>

    )
}

export default IngredientCard;