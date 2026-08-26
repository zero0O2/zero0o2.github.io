import { Link } from "react-router-dom"
import { RiFullscreenFill } from "react-icons/ri"

const CardeProjetos = ({nomeProjeto,tituloProjeto,explicacaoProjeto,linkProjeto,imageProjeto,id}) => {

    const separadorDeLados = id % 2 == 0  

    return(
        <>
            <div className={`hover:scale-[1.008] duration-200 flex w-[97%] ${separadorDeLados ? "self-start" : "self-end"} h-[350px] bg-[var(--cor01)] hover:bg-[#212121]`}>
                <main className="w-full h-full p-[20px] gap-[20px] flex flex-col">
                    <aside>
                        <h1 className="font-[Adam] text-[20px]">{nomeProjeto}</h1>
                    </aside>
                    <span>
                        <h1 className="text-[18px]">{tituloProjeto}</h1>
                        <p className="text-[var(--cor03)] ">
                            {explicacaoProjeto}
                        </p>
                        <Link className="text-[var(--cor06)] hover:text-[var(--cor07)]" to={linkProjeto} target="_blank">{linkProjeto}</Link>
                    </span>
                </main>
                <picture onClick={()=>{
                    window.open(linkProjeto)

                }} className="group w-[40%] cursor-pointer relative hover:w-[70%] flex justify-end duration-200">
                    <div className="absolute w-full h-full backdrop-brightness-[80%] group-hover:opacity-0 duration-200 flex justify-center items-center text-[50px] text-[var(--cor06)]"><RiFullscreenFill /></div>
                    <img className="h-full object-cover duration-200 transition-all" src={imageProjeto} alt="" />
                </picture>
            </div>
        </>
    )
}

export default CardeProjetos
