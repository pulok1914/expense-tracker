function TransectionItem({transection}){
    return (
        <li className="transection-list__item">
            <p className="transection-list__item-name"><span>{transection.name}</span> <span>${transection.amount}</span></p>
            <p className="transection-list__item-category">Category: {transection.category}</p>
         </li>
    )
}

export default TransectionItem;