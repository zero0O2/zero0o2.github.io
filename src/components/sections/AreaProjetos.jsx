import CardeProjetos from "../CardeProjetos.jsx";
import projetosdb from "../../assets/json/projetosdb.json"

const AreaProjetos = () => {

    return(
        <>
            <div className="bg-[var(--cor05)] relative">

                <p className="absolute right-[30px] top-[10px] text-[var(--cor04)] text-[13px]">Em desenvolvimento 27/08/2026</p>

                <header className="w-full p-[30px] ">
                    <h1 className="font-[Adam] text-[30px]">Projetos</h1>
                </header>
                <main className="flex p-[0_15px_30px_15px] flex-col gap-[40px]">
                    
                    {projetosdb?.map((e,index)=>(

                        <CardeProjetos key={index}
                            id={index}
                            nomeProjeto={e.nome}
                            tituloProjeto={e.titulo}
                            explicacaoProjeto={e.explicacao}
                            linkProjeto={e.link}
                            imageProjeto={e.image}
                            />
                    ))}

                </main>
            </div>

        </>
    )
}

export default AreaProjetos