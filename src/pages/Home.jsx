import { useState } from "react";
import Container from "./components/Container"
import HomeHero from "./components/HomeHero";
import TransectionHistory from "./components/TransectionHistory";
import Button from "./components/Button";


function Home(){
    const [transections, setTransections] = useState([
        {id: "2103", name: "Grocery Shopping", type: "expense", category: "Food", amount: 40},
        {id: "2107", name: "Freelance project", type: "income", category: "Food", amount: 400},
        {id: "2254", name: "Winter Shopping", type: "expense", category: "Cloth", amount: 100},
    ])

    function calculateTotalIncome(){
        const totalIncome = transections
        .filter(t=>t.type ==="income")
        .reduce((sum,t) => sum+t.amount, 0)
        return totalIncome;
    }

    function calculateTotalExpense(){
        const totalExpense = transections
        .filter(t=>t.type === "expense")
        .reduce((sum,t)=> sum+t.amount, 0) 
        return totalExpense;
    }

    return(
        <Container>
            <HomeHero calculateTotalIncome={calculateTotalIncome} calculateTotalExpense={calculateTotalExpense} />
            <TransectionHistory transections={transections} />
            <Button />
        </Container>
    )
}

export default Home;