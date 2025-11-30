
import MenuLateral from "../components/MenuLateral.jsx";
import Aside from "../components/Aside.jsx";

const Home = () => {
    return(
        <>
            <Aside/>
            <MenuLateral/>
            <div class="flex flex-col pl-[120px] text-[var(--cor07)] ">
                <div class="flex justify-center  pl-[100px] h-[100vh] font-[Adam] flex-col text-[80px]">
                    <div class="h-[90px]">Front-end</div>
                    <div class="h-[90px]">back-end</div>
                    <div class="h-[90px]">developer Web</div>
                </div>
            </div>

        </>
    )
}

export default Home