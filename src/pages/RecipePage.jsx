import RecipeTemplate from "../components/RecipeTemplate";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
    const [receitaData, setReceitaData] = useState('');
    const { id } = useParams();

    //função que vai buscar uma receita de acordo com o ID recebido na url da api
    useEffect(() => {
        const getReceitaData = async () => {
            try {
                if (id) {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                    const data = response.data;
                    setReceitaData(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getReceitaData();
    }, [id])

    console.log(receitaData.meals);

    return (
        <>
            <main className="max-w-[1200px] mx-auto">
                {receitaData.meals ? (
                    receitaData.meals.map((receita, i) => (
                        <RecipeTemplate
                            key={i}
                            nome={receita.strMeal}
                            img={receita.strMealThumb}
                            categoria={receita.strCategory}
                            pais={receita.strArea}
                            tags={receita.strTags}
                            ingrediente1={receita.strIngredient1}
                            ingrediente2={receita.strIngredient2}
                            ingrediente3={receita.strIngredient3}
                            medida1={receita.strMeasure1}
                            medida2={receita.strMeasure2}
                            medida3={receita.strMeasure3}
                            instrucoes={receita.strInstructions}
                            youtube={receita.strYoutube}
                            original={receita.strSource}
                        />
                    ))
                ) : (
                    <p>Carregando...</p>
                )}
            </main>
        </>
    )
}

export default RecipePage;