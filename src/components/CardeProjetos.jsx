import { Link } from "react-router-dom"
import { RiFullscreenFill } from "react-icons/ri";

const CardeProjetos = ({}) => {

    return(
        <>
            <div className="hover:scale-[1.008] duration-200 flex w-full h-[350px] bg-[var(--cor01)] hover:bg-[#212121]">
                <main className="w-full h-full p-[20px] gap-[20px] flex flex-col">
                    <aside>
                        <h1 className="font-[Adam] text-[20px]">Simulix</h1>
                    </aside>
                    <span>
                        <h1 className="text-[18px]">Site de gerenciamento de tarefas e simulados.</h1>
                        <p className="text-[var(--cor03)] ">
                            O simulix é um site criado em <strong>React</strong> no front end e <strong>Node.js</strong> no back end utilizando mongoDB como banco de dados, o site e feito utilizando tecnologias como <strong>javascript</strong>, criptografia de senha e autenticação de usuario por meio de token jwt. <br />
                            Feito para criação de perguntas e repostas podendo usalas para revisões e testar seu conhecimento por meio de simulados, aonde o usuario pode filtrar por tipo, materia e de onde a questao é.
                        </p>
                        <Link className="text-[var(--cor06)] hover:text-[var(--cor07)]" to={"https://simulix-ghib.vercel.app"} target="_blank">https://simulix-ghib.vercel.app</Link>
                    </span>
                </main>
                <picture onClick={()=>{
                    window.open("https://simulix-ghib.vercel.app")

                }} className="group w-[40%] cursor-pointer relative hover:w-[70%] flex justify-end duration-200">
                    <div className="absolute w-full h-full backdrop-brightness-[80%] group-hover:opacity-0 duration-200 flex justify-center items-center text-[50px] text-[var(--cor06)]"><RiFullscreenFill /></div>
                    <img className="h-full object-cover duration-200 transition-all" src="/imagens/projetos/simulix.png" alt="" />
                </picture>
            </div>
        </>
    )
}

export default CardeProjetos
