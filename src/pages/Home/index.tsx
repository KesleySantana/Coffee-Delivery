import { Aside } from "./components/Aside";
import { Shop } from "./components/Shop";
import { HomeContainer } from "./styled";



export function Home() {
    return(
        <HomeContainer>
         <Aside />
         <Shop />
        </HomeContainer>
    )
}