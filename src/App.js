import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Header from "./components/Header";
import Input from "./components/Input";

const apiKey = process.env.REACT_APP_API_KEY;
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function App() {
  const [city, setCity] = useState("İstanbul");
  const [open, setOpen] = useState(false);
  const getCurrentLocation = (lat, long) => {
    if ("geolocation" in navigator) {
      /* Eğer cihazda GPS özellikleri aktifse tahmini kordinantlarını alıyoruz. */
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}`
        )
          .then((response) => response.json())
          .then((city) => setCity(city.location.region));
      });
    } else {
      console.log("Not Available");
      alert("We your location data in order to use this feature.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const { data, error } = useSWR(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
    fetcher
  );

  return (
    <div className="flex flex-col">
      <Header
        data={data}
        error={error}
        city={city}
        open={open}
        setOpen={setOpen}
      />
      <Input
        data={data}
        setCity={setCity}
        error={error}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
