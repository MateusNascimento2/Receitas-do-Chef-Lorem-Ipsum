import banner from '../assets/banner.jpg';
import Card from "../components/Card";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [receitasRandom, setReceitasRandom] = useState([]);
    const [searchInput, setSearchInputValue] = useState('');
    const [searchData, setSearchData] = useState('');
    const [showRandomRecipes, setShowRandomRecipes] = useState(true);

    //funcão que vai chamar 10x a API para gerar 10 receitas aleatórias
    useEffect(() => {
        const getRandomRecipes = async () => {
            try {
                const recipes = [];
                for (let i = 0; i < 10; i++) {
                    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
                    const randomRecipe = response.data;
                    recipes.push(randomRecipe);
                }
                setReceitasRandom(recipes);
            } catch (error) {
                console.log(error);
            }
        };

        getRandomRecipes();
    }, []);

    const handleInputValue = (e) => {
        setSearchInputValue(e.target.value);
    }

    //função que vai fazer a pesquisa de receitas de acordo com o valor do input
    const onButtonClick = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
            const data = response.data;
            setSearchData(data);

            if (searchInput === '') {
                setShowRandomRecipes(true)
            } else {
                setShowRandomRecipes(false);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className='w-full mb-8'>
                <div className='relative'>
                    <img src={banner} alt="banner de alimentos" className="opacity-90 brightness-50 w-full max-h-[700px]" />
                    <div className='absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] '>
                        <div className='mb-3 flex gap-2 justify-center'>
                            <input type="text" placeholder='Pesquisar por receitas' className='rounded-full px-4 md:w-3/4' value={searchInput} onChange={handleInputValue} />
                            <button onClick={onButtonClick} className='bg-orange-600 border-[1px] border-white p-[6px] rounded-full text-white hover:scale-105 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col justify-center text-center gap-2 text-white'>
                            <h2 className='text-2xl font-bold md:text-3xl'>Qual o seu tipo favorito de cozinha ?</h2>
                            <h3 className='text-xl font-light md:text-2xl'>Personalize sua experiência</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-5 xl:max-w-[1400px] xl:mx-auto xl:px-5'>
                <div className='mb-10'>
                    <h2 className='text-2xl uppercase mb-2 font-bold'>Sugestões</h2>
                    <div className='bg-orange-600 w-16 h-[2px]'></div>
                </div>
                <div className='md:flex flex-wrap gap-3 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-5'>
                    {showRandomRecipes ? (
                        receitasRandom.map((receita, i) => (
                            <Card
                                key={i}
                                id={receita.meals[0].idMeal}
                                img={receita.meals[0].strMealThumb}
                                nomeReceita={receita.meals[0].strMeal}
                                descricaoReceita={receita.meals[0].strInstructions}
                                linkYoutube={receita.meals[0].strYoutube}
                            />
                        ))
                    ) : (
                        searchData.meals ? (
                            searchData.meals.map((receita, i) => (
                                <Card
                                    key={i}
                                    id={receita.idMeal}
                                    img={receita.strMealThumb}
                                    nomeReceita={receita.strMeal}
                                    descricaoReceita={receita.strInstructions}
                                    linkYoutube={receita.strYoutube}
                                />
                            ))
                        ) : (
                            <p>Nenhum resultado encontrado.</p>
                        )
                    )}
                </div>
            </section>
        </>
    )
}

export default Hero;