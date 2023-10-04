const recipeTemplate = (props) => {

    return (
        <div className="px-8">
            <section className="mb-8 flex flex-col items-center">
                <h1 className="text-orange-600 text-3xl text-center my-5 font-bold">{props.nome}</h1>
                <img className="w-full max-h-[600px]" src={props.img} alt="imagem da receita" />
            </section>
            <section className="mb-8 md:grid md:grid-cols-3">
                <p><span className="font-bold text-xl">Categoria:</span> {props.categoria}</p>
                <p><span className="font-bold text-xl">Origem:</span> {props.pais}</p>
                <p><span className="font-bold text-xl">Tags:</span> {props.tags}</p>
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl">Ingredientes:</h2>
                <ol className="list-decimal ml-4">
                    <li>{props.ingrediente1}</li>
                    <li>{props.ingrediente2}</li>
                    <li>{props.ingrediente3}</li>
                </ol>
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl">Medidas:</h2>
                <ol className="list-decimal ml-4">
                    <li>{props.medida1}</li>
                    <li>{props.medida2}</li>
                    <li>{props.medida3}</li>
                </ol>
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl">Instruções:</h2>
                <p>{props.instrucoes}</p>
            </section>
            <section className="mb-8 flex gap-5 items-center">
                <a target="_blank" rel="noreferrer" className="p-2 bg-orange-600 text-white rounded-md" href={props.youtube}>Youtube</a>
                <a target="_blank" rel="noreferrer" className="text-blue-600" href={props.original}>Fonte Original</a>
            </section>
        </div>

    )
}

export default recipeTemplate;