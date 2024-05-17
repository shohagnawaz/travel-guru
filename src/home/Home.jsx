import Navbar from "../shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                    <h2 className="text-5xl text-white">COX`S BAZAR</h2>
                    <p>Cox`s Bazar is a city, fishing port, tourism centre 
                        and district headquarters in southeastern Bangladesh. 
                        It is famous mostly for its long natural sandy beach, 
                        and it...
                    </p>
                    <button className="btn btn-secondary">Booking</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;