import React, { useState, useEffect } from "react";
import "./App.css";
import useSWR from "swr";
import Header from "./components/Header";
import Input from "./components/Input";
import Loading from "./components/Loading";

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
	const [city, setCity] = useState("New York");

	useEffect(() => {});

	const { data, error } = useSWR(
		`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
		fetcher
	);
	// handle loading and error
	if (error)
		return (
			<div className="flex flex-col items-center justify-center py-48 ">
				<h1 className="p-3 text-5xl">😟</h1>
				Şehir bulunamadı.
				<a
					href="/"
					className="w-24 p-3 m-3 text-center text-blue-700 border rounded shadow"
				>
					Geri dön
				</a>
			</div>
		);
	if (!data) return <Loading />;

	// render data
	return (
		<div className="flex flex-col app">
			<Header data={data} city={city} />
			<Input data={data} setCity={setCity} />
		</div>
	);
}

export default App;
