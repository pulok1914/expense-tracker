function AllTransectionItem({transection,deleteTransection,editTransection}) {

    return (
        <tr  className="all-transection-item">
            <td className="all-transection-list-data">{transection.name}</td>
            <td className="all-transection-list-data">{transection.category}</td>
            <td className="all-transection-list-data">{transection.type}</td>
            <td className="all-transection-list-data">{transection.amount}</td>
            <td className="all-transection-list-data"><button  onClick={()=> editTransection(transection)} className="button">Edit</button></td>
            <td className="all-transection-list-data"><button  onClick={()=>deleteTransection(transection.id)} className="button">Delete</button></td>
        </tr>
    )
}

export default AllTransectionItem;