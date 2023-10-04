import IngredientCard from "../components/IngredientCard";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchForIngredientsPage = () => {
    const [searchInput, setSearchInputValue] = useState('');
    const [initialIngredientList, setInitialIngredientList] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);

    //função que vai pegar a lista de todos os ingredientes
    useEffect(() => {
        const getIngredientList = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
                const data = response.data;
                setInitialIngredientList(data.meals);
            } catch (error) {
                console.log(error);
            }
        }

        getIngredientList();
    }, []);

    const handleInputValue = (e) => {
        setSearchInputValue(e.target.value);
    }


    //função que vai filtrar a lista de ingredientes de acordo com o que o usuário digitar
    useEffect(() => {
        const filterItemsFromList = (query) => {
            const items = initialIngredientList.filter((ingredient) =>
                ingredient.strIngredient.toLowerCase().includes(query.toLowerCase())
            );
            setIngredientList(items);
        };

        if (searchInput.trim() === '') {
            setIngredientList(initialIngredientList);
        } else {
            filterItemsFromList(searchInput);
        }
    }, [searchInput, initialIngredientList]);

    return (
        <>
            <main className="max-w-[1200px] mx-auto">
                <section className="px-8 mt-6">
                    <h1 className="text-center text-orange-600 text-4xl font-bold mb-4">Ingredientes</h1>
                    <input
                        type="text"
                        className="py-2 px-1 w-full border-[1px] border-orange-400 rounded-sm"
                        placeholder="Pesquise pelo ingrediente"
                        value={searchInput}
                        onChange={handleInputValue}
                    />
                </section>
                <section className="px-8 my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredientList.length > 0 ? (
                        ingredientList.map((ingredient, i) => (
                            <IngredientCard key={i} ingredienteNome={ingredient.strIngredient} />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado.</p>
                    )}
                </section>
            </main>
        </>
    );
}

export default SearchForIngredientsPage;

