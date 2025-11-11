import Container from "./components/Container"
import HomeHero from "./components/HomeHero";
import TransectionHistory from "./components/TransectionHistory";
import Button from "./components/Button";

function Home(){
    return(
        <Container>
            <HomeHero />
            <TransectionHistory />
            <Button />
        </Container>
    )
}

export default Home;