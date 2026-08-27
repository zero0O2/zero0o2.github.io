import { useLayoutEffect, useState } from "react"

const SobreMim = () => {
    const [layoutCarregou,setLayoutCarregou] = useState(false)

    setTimeout(()=>{
        setLayoutCarregou(true)
    },[1000])


    return(
        <>
            <div className="flex w-[100%] h-[90dvh]">
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
                            <p>Em 2023 ingressei em uma formaçao da escola de tecnologia <strong>Digital College</strong>, aonde cursei e completei em um ano e meio desenvolvimento FullStak com javascript, aonde tive conteudos como javascript, Node.js, MySQL, Mongodb, React, trabalho em equipe e vercionamento git.</p>
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
                    
                </div> 
            </div>
        </>
    )
}

export default SobreMim