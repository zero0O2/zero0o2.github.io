import { Link } from "react-router-dom"

const Aside = () => {
 return(
    <>
        <div class="absolute top-0 w-[100%] text-[var(--cor07)] pr-[60px] text-[20px] flex items-center justify-end h-[80px]">
            <Link to="/">
                 Work Experience
            </Link>
        </div>
    </>
 )
}

export default Aside