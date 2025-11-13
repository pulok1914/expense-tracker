import { useTransection } from "../context/TransectionContext";
import Container from "../components/Container";
import AllTransectionList from '../components/AllTransectionList'

function AllTransection() {
    const {transections,setTransections} = useTransection()
    return (
        <Container>
            <h1 className="all-transection-heading">All Transections</h1>
            <AllTransectionList transections={transections} setTransections={setTransections} />
        </Container>
    )
}

export default AllTransection