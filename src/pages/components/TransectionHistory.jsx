import TransectionList from "./TransectioList";

function TransectionHistory() {
    return (
        <div className="transection-history">
            <h2 className="transection-history__heading">Last Transections</h2>
            <TransectionList />
        </div>
    )
}

export default TransectionHistory;