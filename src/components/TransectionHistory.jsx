import TransectionList from "./TransectioList";

function TransectionHistory({transections}) {
    return (
        <div className="transection-history">
            <h2 className="transection-history__heading">Last Transections</h2>
            <TransectionList transections={transections} />
        </div>
    )
}

export default TransectionHistory;
