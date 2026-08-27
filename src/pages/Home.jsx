
import MenuLateral from "../components/MenuLateral.jsx";
import Aside from "../components/Aside.jsx";
import AreaProjetos from "../components/sections/AreaProjetos.jsx";
import SobreMim from "../components/sections/SobreMim.jsx";

const Home = () => {


    return(
        <>
            <Aside/>
            <MenuLateral/>
            <div className="flex flex-col pl-[120px] text-[var(--cor08)]">
                <div className="flex justify-center pl-[100px] h-[100vh] font-[Adam] flex-col text-[80px]">
                    <div className="h-[90px]">Front-end</div>
                    <div className="h-[90px]">back-end</div>
                    <div className="h-[90px]">developer Web</div>
                </div>
                
                <SobreMim/>
                <AreaProjetos/>

            </div>

        </>
    )
}

export default Home