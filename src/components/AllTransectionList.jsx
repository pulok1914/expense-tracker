function AllTransectionList(){
    return (
        <table border={1} className="all-Transection-list">
            <tr className="all-transection-list-row">
                <th className="all-transection-list-data">Label</th>
                <th className="all-transection-list-data">Category</th>
                <th className="all-transection-list-data">Type</th>
                <th className="all-transection-list-data">Amount ($)</th>
                <th className="all-transection-list-data" colspan="2">Actions</th>
            </tr>
            <tr className="all-transection-item">
                <td className="all-transection-list-data">Grocery Item</td>
                <td className="all-transection-list-data">Food</td>
                <td className="all-transection-list-data">Income</td>
                <td className="all-transection-list-data">20</td>
                <td className="all-transection-list-data"><button className="button">Edit</button></td>
                <td className="all-transection-list-data"><button className="button">Delete</button></td>
            </tr>

        </table>
    )
}

export default AllTransectionList