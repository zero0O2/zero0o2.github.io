
import MenuLateral from "../components/MenuLateral.jsx";
import Aside from "../components/Aside.jsx";
import AreaProjetos from "../components/sections/AreaProjetos.jsx";
import SobreMim from "../components/sections/SobreMim.jsx";
import AsideMobile from "../components/mobile/AsideMobile.jsx";

const Home = () => {


    return(
        <>
            <AsideMobile/>
            <MenuLateral/>
            <div className="flex flex-col pl-[120px] text-[var(--cor08)] max-[1000px]:p-[0_5px_0_5px] max-[1000px]:items-center">
                <div className="flex justify-center pl-[100px] h-[100vh] font-[Adam] flex-col text-[70px] max-[1000px]:text-[50px] max-[1000px]:text-center max-[1000px]:items-center max-[1000px]:pl-0">
                    <img className="min-[1000px]:hidden aspect-square object-cover h-[150px] w-[150px] rounded-[50%] duration-300 hover:rounded-[25%]" src="https://avatars.githubusercontent.com/u/148266981?v=4" alt="" />
                    <div className="">Front-end</div>
                    <div className="">back-end</div>
                    <div className="">developer Web</div>
                </div>
                
                <SobreMim/>
                <AreaProjetos/>

            </div>

        </>
    )
}

export default Home