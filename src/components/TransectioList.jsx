import TransectionItem from "./TransectionItem"

function TransectionList({transections}) {
    return (
        <ul className="transecton-list">
            {transections.map( transection=>
                <TransectionItem key={transection.id} transection={transection} />
            )}
        </ul>
    )
}

export default TransectionList;