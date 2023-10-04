import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useParams } from 'react-router-dom';
import axios from "axios";


const ByIngredientPage = () => {
    const [ receitaData, setReceitaData] = useState('');
    const { ingredient } = useParams();

    //função que vai buscar a receita de acordo com o valor que vem da variável ingredient
    useEffect(() => {
        const getReceitaData = async () => {
            try {
                if (ingredient) {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                    const data = response.data;
                    setReceitaData(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getReceitaData();
    }, [ingredient])

    console.log(receitaData);

    return(
        <>
            <main className="max-w-[1200px] mx-auto">
                <section className="px-8 my-8">
                    <h1 className="text-4xl text-orange-600 font-bold">Receitas com {ingredient}</h1>
                </section>
                <section className="px-8 md:flex flex-wrap gap-3 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-5">
                    {receitaData.meals ? (
                        receitaData.meals.map((receita, i) => (
                            <Card 
                                key={i}
                                id={receita.idMeal}
                                img={receita.strMealThumb}
                                nomeReceita={receita.strMeal}
                            />
                        ))
                    ) : (
                        <p>Carregando...</p>
                    )}
                </section>
            </main>
        </>

    )
}

export default ByIngredientPage;