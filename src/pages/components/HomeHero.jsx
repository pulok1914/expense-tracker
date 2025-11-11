function HomeHero(){
    return (
        <div className="home-hero">
            <h1 className="home-hero__heading">Expense Tracker</h1>
            <p className="home-hero__balance">Balance: $1250</p>
            <div className="home-hero__income-wrapper">
                <p className="home-hero__income">Income: $3000</p>
                <p className="home-hero__expense">Expense: $1750</p>
            </div>
        </div>          
    )
}

export default HomeHero;