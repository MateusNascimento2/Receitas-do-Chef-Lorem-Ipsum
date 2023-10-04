/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";

const LetterSearch = () => {
    const [searchData, setSearchData] = useState('')
    const { letter } = useParams();

    //função que vai receber a letra na qual o usuário clicou e vai pegar todas as receitas que começam com essa letra
    const searchByFirstLetter = async (letter) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            const data = response.data;
            setSearchData(data || []);
            console.log(searchData)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (letter) {
            searchByFirstLetter(letter)
        }
    }, [letter])

    return (
        <>
            <section>
                <div className="p-8 pb-0 mb-8">
                    <h1 className="text-4xl font-bold mb-4 text-orange-600 text-center">Receitas por Letra</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-8 mb-8">
                    <Link to={"/by-letter/A"} onClick={() => searchByFirstLetter('a')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">A</Link>
                    <Link to={"/by-letter/B"} onClick={() => searchByFirstLetter('b')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">B</Link>
                    <Link to={"/by-letter/C"} onClick={() => searchByFirstLetter('c')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">C</Link>
                    <Link to={"/by-letter/D"} onClick={() => searchByFirstLetter('d')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">D</Link>
                    <Link to={"/by-letter/E"} onClick={() => searchByFirstLetter('e')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">E</Link>
                    <Link to={"/by-letter/F"} onClick={() => searchByFirstLetter('f')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">F</Link>
                    <Link to={"/by-letter/G"} onClick={() => searchByFirstLetter('g')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">G</Link>
                    <Link to={"/by-letter/H"} onClick={() => searchByFirstLetter('h')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">H</Link>
                    <Link to={"/by-letter/I"} onClick={() => searchByFirstLetter('i')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">I</Link>
                    <Link to={"/by-letter/J"} onClick={() => searchByFirstLetter('j')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">J</Link>
                    <Link to={"/by-letter/K"} onClick={() => searchByFirstLetter('k')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">K</Link>
                    <Link to={"/by-letter/L"} onClick={() => searchByFirstLetter('l')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">L</Link>
                    <Link to={"/by-letter/M"} onClick={() => searchByFirstLetter('m')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">M</Link>
                    <Link to={"/by-letter/N"} onClick={() => searchByFirstLetter('n')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">N</Link>
                    <Link to={"/by-letter/O"} onClick={() => searchByFirstLetter('o')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">O</Link>
                    <Link to={"/by-letter/P"} onClick={() => searchByFirstLetter('p')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">P</Link>
                    <Link to={"/by-letter/Q"} onClick={() => searchByFirstLetter('q')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Q</Link>
                    <Link to={"/by-letter/R"} onClick={() => searchByFirstLetter('r')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">R</Link>
                    <Link to={"/by-letter/S"} onClick={() => searchByFirstLetter('s')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">S</Link>
                    <Link to={"/by-letter/T"} onClick={() => searchByFirstLetter('t')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">T</Link>
                    <Link to={"/by-letter/U"} onClick={() => searchByFirstLetter('u')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">U</Link>
                    <Link to={"/by-letter/V"} onClick={() => searchByFirstLetter('v')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">V</Link>
                    <Link to={"/by-letter/W"} onClick={() => searchByFirstLetter('w')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">W</Link>
                    <Link to={"/by-letter/X"} onClick={() => searchByFirstLetter('x')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">X</Link>
                    <Link to={"/by-letter/Y"} onClick={() => searchByFirstLetter('y')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Y</Link>
                    <Link to={"/by-letter/Z"} onClick={() => searchByFirstLetter('z')} className="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all">Z</Link>
                </div>
            </section>
            <section className="px-8">
                <div className='md:flex flex-wrap gap-3 justify-center items-center lg:grid lg:grid-cols-3 lg:gap-5'>
                    {searchData.meals ? (
                            searchData.meals.map((receita, i) => (
                                <Card
                                    key={i}
                                    id={receita.idMeal}
                                    img={receita.strMealThumb}
                                    nomeReceita={receita.strMeal}
                                    descricaoReceita={receita.strInstructions}
                                    link toYoutube={receita.strYoutube}
                                />
                            ))
                        ) : (
                            <p>Nenhum resultado encontrado.</p>
                        )}
                </div>
            </section>
        </>
    )
}

export default LetterSearch