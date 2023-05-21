import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

  const [packageValue, setPackageValue] = useState(0);
  const [totalTrip, setTotalTrip] = useState(0);

  const packageHotelTour = [
    { id: 2, price: 3159 },
    { id: 3, price: 2450 },
    { id: 4, price: 2095 },
    { id: 5, price: 1882 },
    { id: 6, price: 1740 },
    { id: 7, price: 1639 },
    { id: 8, price: 1563 },
    { id: 9, price: 1504 },
    { id: 10, price: 1457 },
  ];
  const addTokyoDisney = totalTrip + 300;
  const addMtFujiTour = totalTrip + 250;

  const packageButtonHandler = (event) => {
    const buttonValue = parseInt(event.target.value);
    event.target.id === '1' && (setTotalTrip(buttonValue) && setPackageValue(buttonValue));
    event.target.id === '2' && (setTotalTrip(buttonValue) && setPackageValue(buttonValue));
    event.target.id === '3' && (setTotalTrip(buttonValue) && setPackageValue(buttonValue));
  };
  
  const tripPaxHandler = (event) => {
    const buttonValue = parseInt(event.target.value);
    setTotalTrip(packageValue + buttonValue);
  };

  return (
    <div className="bg-slate-700 h-screen">
      {/* Header stuff ya know */}
      <div className="flex justify-center">
        <img src={logo} className="mt-10 h-20 w-20 animate-bounce" alt="logo" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-xs font-mono text-white">
          app abg dzul - delete sehari
        </h1>
      </div>
      
      {/* all the other stuff here - delete later */}
      <div className="text-white font-mono text-sm mt-3 p-5">
        <p className="font-bold text-lg italic">Calculator Tokyo 4H3M</p>
        <p>----------------------</p>
        <p className="mb-2">Package:</p>
        <button value={1100} id="1" onClick={packageButtonHandler} className="focus:outline-none focus:ring focus:ring-slate-400 px-4 py-2 mr-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-black rounded-md text-xs">
          Tour
        </button>
        <button value={2200} id="2" onClick={packageButtonHandler} className="focus:outline-none focus:ring focus:ring-slate-400 px-4 py-2 mr-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-black rounded-md text-xs">
          Tour + Hotel
        </button>
        <button value={3300} id="3" onClick={packageButtonHandler} className="focus:outline-none focus:ring focus:ring-slate-400 px-4 py-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-black rounded-md text-xs">
          Tour + Hotel + Flight
        </button>
        <p className="mt-4">Anggaran kos penginapan RM 150/malam</p>
        <p>Anggaran kos tiket penerbangan RM 1500/two-way</p>
        <p className="my-2">----------------------</p>
        <p className="mb-2">Bilangan Ahli Dewasa</p>
        <div>
          {packageHotelTour.map((item) => (
            <button id={item.id} value={item.price} onClick={tripPaxHandler} className="bg-slate-300 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-400 text-black px-3 py-2 mr-2 rounded-md">
              {item.id}
            </button>
          ))}
        </div>
        <p className="my-2">----------------------</p>

        <div className="flex">
          <div>
            <p>Tokyo Disney</p>
            <p>Additional Cost RM300</p>
          </div>
          <div>
            <button className="ml-4 mt-2 focus:outline-none focus:ring focus:ring-slate-400 px-4 py-2 mr-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-black rounded-md text-xs">
              Add
            </button>
          </div>
        </div>

        <p className="my-2">----------------------</p>

        <div className="flex">
          <div>
            <p>Mt Fuji Tour</p>
            <p>Additional Cost RM250</p>
          </div>
          <div>
            <button className="ml-4 mt-2 focus:outline-none focus:ring focus:ring-slate-400 px-4 py-2 mr-2 bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-black rounded-md text-xs">
              Add
            </button>
          </div>
        </div>

        <p className="my-2">----------------------</p>
        <p className="text-xs">
          *Harga sebenar pakej adalah dalam mata wang Yen. Kiraan ini mengikut
          nilai tukaran 1 Yen = RM 0.038 pada 11/11/2019
        </p>
        <p className="my-2">----------------------</p>

        <p>Total</p>
        <p className="text-end text-3xl font-bold">RM {totalTrip}</p>
      </div>
    </div>
  );
}

export default App;
