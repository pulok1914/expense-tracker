import { useEffect, useState } from "react";

// src/components/AddTransactionForm.jsx
function AddTransactionForm({ initialvalues, handleSubmit }) {
  const [formData, SetFormData] = useState(
    initialvalues ||{name: "",amount: "",type: "income",category: "Food",}
    )
    console.log("initial",initialvalues)
       console.log("formdata",initialvalues)
  //prefil while editing
  useEffect(()=>{
    if(initialvalues){
      SetFormData({
        id: initialvalues.id,
        name: initialvalues.name,
        amount: initialvalues.amount.toString(),
        type: initialvalues.type || "income",
        category: initialvalues.category || "Food",
      })
    }
  },[initialvalues])

  function handleChange(e){
    const {name,value} = e.target;
    SetFormData(prev=>({...prev,[name]:value,}))
  }

  function onSubmit(e){
    e.preventDefault();
    console.log(formData)

    if(!formData.name.trim() || !formData.amount.trim()) return alert("Please fill the form");

    handleSubmit(formData)
  }

  return (
    <form className="add-trnx-form" onSubmit={onSubmit}>
      <label>Description: <input name="name" type="text" value={formData.name} onChange={handleChange} /></label>
      

      <label>Amount: <input name="amount" type="number" value={formData.amount} onChange={handleChange} /></label>
      

      <label>Type: 
        <label><input type="radio" name="type" value="income" checked={formData.type === "income"} onChange={handleChange} /> Income</label>
        <label><input type="radio" name="type" value="expense" checked={formData.type === "expense"} onChange={handleChange} /> Expense</label>
      </label>


      <label>Category: 
        <select name="category" value={formData.category} onChange={handleChange}>
        <option>Food</option>
        <option>Cloth</option>
        <option>Cigerrette</option>
        <option>Trip</option>
      </select>
      </label>


      <button className="button" type="submit">{initialvalues?"Update":"Save"}</button>
    </form>
  );
}

export default AddTransactionForm;
