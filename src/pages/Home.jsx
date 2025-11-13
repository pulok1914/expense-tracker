import { useState } from "react";
import { Link } from "react-router-dom";
import { useTransection } from "../context/TransectionContext";
import Container from "../components/Container"
import HomeHero from "../components/HomeHero";
import TransectionHistory from "../components/TransectionHistory";
import Button from "../components/Button";
import ModalWrapper from "../components/ModalWrapper";
import AddTransactionForm from "../components/AddTransectionForm";


function Home(){
    const {transections,setTransections} = useTransection();
    const [showModal,setShowModal] = useState(false)

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


    function closeModal(){
        setShowModal(false)
    }
    function openModal(){
        setShowModal(true)
    }
    function addTransection(newTransection){
        const newData = {
            id: Date.now().toString(),
            ...newTransection,
            amount: Number(newTransection.amount),
        }
        setTransections(prev => [...prev,newData])
        setShowModal(false)
    }

    return(
        <>
        {showModal &&
            (<ModalWrapper closeModal={closeModal}>
                <AddTransactionForm handleSubmit={addTransection} />
            </ModalWrapper>
            )}
            <Container>
                <HomeHero calculateTotalIncome={calculateTotalIncome} calculateTotalExpense={calculateTotalExpense} />
                <TransectionHistory transections={transections} />
                <Button addTransection={openModal} />
                <Link to="/all-transection">See All Transection </Link>
            </Container> 
        </>
    )
}


export default Home;