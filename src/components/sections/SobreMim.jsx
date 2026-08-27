import { useLayoutEffect, useState } from "react"

const SobreMim = () => {
    const [layoutCarregou,setLayoutCarregou] = useState(false)

    setTimeout(()=>{
        setLayoutCarregou(true)
    },[1000])


    return(
        <>
            <div className="flex relative w-[100%] h-[90dvh]">

                <p className="absolute right-[30px] top-[10px] text-[var(--cor04)] text-[13px]">Em desenvolvimento 27/08/2026</p>

                <div className=" flex justify-center w-[50%]">
                    <div className="max-w-[500px] py-[60px] w-full flex flex-col justify-between">
                        <header className="flex flex-col gap-[10px]">
                            <span>
                                <h1 className="font-[Antone] text-[40px]">ABOUT me</h1>
                                <div className={`${layoutCarregou ? "w-full" : "w-0"} rounded-[2px_70%] duration-[2s] h-[5px] bg-[var(--cor06)]`}></div>
                            </span>
                            <h2 className="text-[30px]">Carlos Daniel Abreu Moreira</h2>
                        </header>
                        <span className="text-[15px] flex flex-col gap-[10px]">
                            <p>Sou um jovem de 18 anos buscando ingressar no mercado de trabalho de desenvolvimento de softwares, estudo tecnologia desde 2022 que foi quando começei a ter gosto pela area.</p>
                            <p>Em 2023 ingressei em uma formaçao da escola de tecnologia <strong>Digital College</strong>, aonde cursei e completei em um ano e meio desenvolvimento FullStak com javascript, aonde tive conteudos como javascript, Node.js, Express, MySQL, Mongodb, React, trabalho em equipe e vercionamento c   om git.</p>
                            <p>Atualmente em 2026 estou cursando a faculdade de Analise e Desenvolvimento de Sistemas(ADS) pela Estacio 1° periodo</p>
                        </span>
                        <nav className="flex flex-col gap-[20px]">
                            <h1 className="font-[Antone] text-[18px] text-[var(--cor08)]">contato</h1>
                            <span className="flex flex-col text-[var(--cor06)] gap-[5px]">
                                <p>Email : carlosbatata195@gmail.com</p>
                                <p>Número : +55 85 8139-7779</p>
                            </span>
                        </nav>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="h-full py-[60px] w-full flex flex-col justify-between">
                        <div className=" flex flex-col gap-[20px]">
                            <header className="flex flex-col gap-[10px]">
                                <h1 className="text-[20px] ">Certificações e competências</h1>
                            </header>
                            <section className="w-full flex overflow-x-auto p-[20px] gap-[20px]">

                                <span className="flex-1 min-w-[350px] max-w-[450px] shadow-[0_0_20px_var(--cor01)] hover:bg-[var(--cor02)] cursor-pointer flex flex-col">
                                    <img className="object-cover object-center h-[200px] duration-200" src="/imagens/certificacoes/digitalCollege.png" alt="" />
                                    <div className="p-[20px] text-[15px] flex flex-col gap-[10px]">
                                        <h1 className="text-[17px] font-bold" >Certificado de conclusao - Digital College</h1>
                                        <p>O curso de Formação Full-Stack (com foco em JavaScript e tecnologias modernas) da Digital College prepara você para atuar no desenvolvimento completo de sites e aplicativos, desde a interface visual até os servidores e bancos de dados.</p>
                                    </div>
                                </span>
                                
                            </section>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default SobreMim