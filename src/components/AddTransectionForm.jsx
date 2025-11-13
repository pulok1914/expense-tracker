import { useState } from "react";

// src/components/AddTransactionForm.jsx
function AddTransactionForm({ handleSubmit }) {
  const [formData, SetFormData] = useState({
    name: "",
    amount: "",
    type: "income",
    category: "Food",
  })
  function handleChange(e){
    const {name,value} = e.target;
    SetFormData(prev=>({...prev,[name]:value,}))
  }

  function onSubmit(e){
    //stop defulat behaviour like reload
    e.preventDefault();
    //input validation
    if(!formData.name.trim() || !formData.amount.trim()) return alert("Please fill the form");
    //send data to Component where state should be changed
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


      <button className="button" type="submit">Save</button>
    </form>
  );
}

export default AddTransactionForm;
