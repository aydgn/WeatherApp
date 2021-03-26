import React, { useState, useEffect } from "react";
import "./App.css";
import useSWR from "swr";
import Header from "./components/Header";
import Input from "./components/Input";
import Loading from "./components/Loading";

const apiKey = "e1b4ce07c4d44753be4182931212503";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
	const [city, setCity] = useState("New York");

	useEffect(() => {});

	const { data, error } = useSWR(
		`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
		fetcher
	);
	// handle loading and error
	if (error) return <h1>failed to load</h1>;
	if (!data) return <Loading />;

	// render data
	return (
		<div className="app">
			<Header data={data} city={city} />
			<Input data={data} setCity={setCity} />
		</div>
	);
}

export default App;
