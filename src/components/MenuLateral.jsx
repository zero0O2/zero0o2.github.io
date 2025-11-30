import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const MenuLateral = () => {
 return(
    <>
        <div class="fixed top-0 left-0 flex justify-center items-center bg-[var(--cor01)] p-[10px] w-[120px] h-[100%]">
            <div class="flex flex-col py-[20px] justify-between items-center bg-[var(--cor01)] w-[100%] h-[100%] shadow-[0px_0px_10px_black]">
                <div>
                    <img class="w-[80px] rounded-full" src="../../public/imagens/profile.png" alt="logo Z" />
                </div>

                <div class="flex text-[30px] font-semibold text-[var(--cor07)] items-center justify-between w-[450px] rotate-[90deg]">
                    <div class="flex justify-center gap-[10px] items-center">
                        <h1>Zero</h1>
                        <div class="bg-[var(--cor06)] w-[100px] h-[2px]"></div>
                    </div>
                    <div class="flex justify-center gap-[10px] items-center">
                        <h1>JS Logics</h1>
                        <div class="bg-[var(--cor06)] w-[100px] h-[2px]"></div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center gap-[20px]">
                    <Link class="text-[40px] text-[var(--cor06)] " to="https://github.com/zero0O2">
                        <FaGithub />
                    </Link>
                    <Link class="text-[40px] text-[var(--cor06)] " to="https://www.linkedin.com/in/carlos-daniel-79853b2a4/">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default MenuLateral