import { useState } from "react";
const Input = (props) => {
	const [inputValue, setInputValue] = useState("");
	function getLocation(lat, long) {
		if ("geolocation" in navigator) {
			/* Eğer cihazda GPS özellikleri aktifse tahmini kordinantlarını alıyoruz. */
			navigator.geolocation.getCurrentPosition(function (position) {
				lat = position.coords.latitude;
				long = position.coords.longitude;
				console.log(lat, long);

				fetch(
					`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}`
				)
					.then((response) => response.json())
					.then((city) => props.setCity(city.location.region));
			});
		} else {
			console.log("Not Available");
		}
	}
	return (
		<>
			<div className="flex items-center justify-center px-3">
				<input
					type="search"
					className={`w-full p-3 border rounded shadow sm:w-auto `}
					placeholder="Search a city"
					onBlur={(e) => {
						e.target.select();
					}}
					autoFocus
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					onKeyPress={(e) => {
						if (e.code === "Enter" && e.target.value !== "") {
							props.setCity(e.target.value);
							e.target.value = "";
						}
					}}
				></input>
				<button
					type="reset"
					className="p-3 border shadow"
					onClick={() => {
						props.setCity(inputValue);
					}}
				>
					🔍
				</button>
			</div>
			<div className="flex flex-col items-center justify-center p-3">
				<span>or</span>
				<button
					className="w-full p-3 mx-3 border shadow sm:w-auto"
					onClick={getLocation}
				>
					📍 Get my location
				</button>
			</div>
		</>
	);
};

export default Input;
