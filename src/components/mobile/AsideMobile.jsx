import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const AsideMobile = () => {
 return(
    <>
        <div className="w-[100%] h-[70px] fixed p-[5px_10px] bg-[var(--cor01)] z-30 top-0 flex items-center justify-between min-[1000px]:hidden">
            <div className="text-[18px] text-[var(--cor07)] ">
                <h1>Carlos Daniel</h1>
            </div>
            <div className="text-[24px] text-[var(--cor08)] font-[Adam]">
                <h1>ADS</h1>
            </div>
            <footer className="flex justify-center items-center gap-[10px]">
                <Link className="text-[30px] text-[var(--cor06)]" to="https://github.com/zero0O2" target="_blank">
                    <FaGithub />
                </Link>
                <Link className="text-[30px] text-[var(--cor06)] " to="https://www.linkedin.com/in/carlos-daniel-79853b2a4/" target="_blank">
                    <FaLinkedin />
                </Link>
            </footer>
        </div>
    </>
 )
}

export default AsideMobile