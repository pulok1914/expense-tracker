import { useState } from "react"
import AllTransectionItem from "./AllTransectionItem"
import ModalWrapper from "./ModalWrapper"
import AddTransactionForm from "./AddTransectionForm"

function AllTransectionList({transections,setTransections}){
    const [editingTransection, setEditingTransection] = useState(null)
    function deleteTransection(id) {
        setTransections(prev => prev.filter(transection => transection.id !== id))

    }
    function openEditModal(transection) { 
        setEditingTransection(transection)
    }

    function editTransection(editedTransection){
        console.log(editedTransection)
        setTransections(transections.map(transection=> transection.id===editedTransection.id?editedTransection:transection))
        setEditingTransection(null)
    }

    return (
        <>
        {editingTransection && (
            <ModalWrapper closeModal={()=> setEditingTransection(null)}>
                <AddTransactionForm initialvalues={editingTransection} handleSubmit={editTransection} />
            </ModalWrapper>
        )}
        <table border={1} className="all-Transection-list">
            <thead>
                <tr className="all-transection-list-row">
                    <th className="all-transection-list-data">Label</th>
                    <th className="all-transection-list-data">Category</th>
                    <th className="all-transection-list-data">Type</th>
                    <th className="all-transection-list-data">Amount ($)</th>
                    <th className="all-transection-list-data" colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {transections.map(transection => (
                    <AllTransectionItem 
                        key={transection.id} 
                        transection={transection} 
                        deleteTransection={deleteTransection} 
                        editTransection={openEditModal} 
                    />) 
                )}
            </tbody>
        </table>
    </>
    )
}

export default AllTransectionList