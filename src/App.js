import React, { useState, useEffect } from "react";
import "./App.css";
import useSWR from "swr";
import Header from "./components/Header";
import Input from "./components/Input";

const apiKey = "e1b4ce07c4d44753be4182931212503";
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
	useEffect(() => {});

	const { data, error } = useSWR(
		`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
		fetcher
	);

	return (
		<div className="flex flex-col app">
			<Header data={data} error={error} city={city} />
			<Input data={data} setCity={setCity} error={error} />
		</div>
	);
}

export default App;
