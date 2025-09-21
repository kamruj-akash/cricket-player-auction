// import Banner from "./Components/Banner";
import { Suspense } from "react";
import Navbar from "./Components/Navbar";
import SelectedPlayer from "./Components/PlayerComponents/SelectedPlayer";
// import AvailablePlayer from "./Components/PlayerComponents/AvailablePlayer";

const fetchFile = "../public/Data/playerData.json";
const fetchPlayerData = async () => {
  const res = await fetch(fetchFile);
  return res.json();
};
const promiseData = fetchPlayerData();

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <div className="container mx-auto flex justify-between my-5 items-center">
        <p className="font-bold text-2xl text-[#131313]">Available Players</p>
        <div>
          <button className="btn bg-[#E7FE29] border-[#1313130c] border-e-0 rounded-e-none">
            Available
          </button>
          <button className="btn border-s-0 rounded-s-none">
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <span className="loading loading-ring w-[250px] "></span>
          </div>
        }
      >
        {/* <AvailablePlayer promiseData={promiseData}></AvailablePlayer> */}
        <SelectedPlayer></SelectedPlayer>
      </Suspense>
    </>
  );
}

export default App;
