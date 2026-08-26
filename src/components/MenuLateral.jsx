import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const MenuLateral = () => {
 return(
    <>
        <div className="fixed top-0 left-0 flex justify-center items-center bg-[var(--cor01)] p-[10px] w-[120px] h-[100%]">
            <div className="flex flex-col py-[20px] justify-between items-center bg-[var(--cor01)] w-[100%] h-[100%] shadow-[0px_0px_10px_black]">
                <div>
                    <img className="w-[80px] rounded-full" src="/imagens/profile.png" alt="logo Z" />
                </div>

                <div className="flex text-[30px] font-semibold text-[var(--cor07)] items-center justify-between w-[450px] rotate-[90deg]">
                    <div className="flex justify-center gap-[10px] items-center">
                        <h1>Zero</h1>
                        <div className="bg-[var(--cor06)] w-[100px] h-[2px]"></div>
                    </div>
                    <div className="flex justify-center gap-[10px] items-center">
                        <h1>JS Logics</h1>
                        <div className="bg-[var(--cor06)] w-[100px] h-[2px]"></div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-[20px]">
                    <Link className="text-[40px] text-[var(--cor06)]" to="https://github.com/zero0O2" target="_blank">
                        <FaGithub />
                    </Link>
                    <Link className="text-[40px] text-[var(--cor06)] " to="https://www.linkedin.com/in/carlos-daniel-79853b2a4/" target="_blank">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default MenuLateral