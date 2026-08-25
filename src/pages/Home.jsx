
import MenuLateral from "../components/MenuLateral.jsx";
import Aside from "../components/Aside.jsx";
import CardeProjetos from "../components/CardeProjetos.jsx";

const Home = () => {
    return(
        <>
            <Aside/>
            <MenuLateral/>
            <div class="flex flex-col pl-[120px] text-[var(--cor08)]">
                <div class="flex justify-center pl-[100px] h-[100vh] font-[Adam] flex-col text-[80px]">
                    <div class="h-[90px]">Front-end</div>
                    <div class="h-[90px]">back-end</div>
                    <div class="h-[90px]">developer Web</div>
                </div>

                <div className="bg-[var(--cor05)]">
                    <header className="w-full p-[30px] ">
                        <h1 className="font-[Adam] text-[30px]">Projetos</h1>
                    </header>
                    <main className="flex p-[0_15px_30px_15px] flex-col gap-[40px]">
                        
                        <CardeProjetos />

                        

                    </main>
                </div>

            </div>

        </>
    )
}

export default Home