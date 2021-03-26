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
					`https://api.weatherapi.com/v1/current.json?key=e1b4ce07c4d44753be4182931212503&q=${lat},${long}`
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
					className="w-full p-3 border rounded shadow sm:w-auto"
					placeholder="Type a city &crarr;"
					autoFocus
					onChange={(e) => {
						console.log(e.target.value);
						setInputValue(e.target.value);
					}}
					onKeyPress={(e) => {
						if (e.code === "Enter" && e.target.value !== "") {
							props.setCity(e.target.value);
						}
					}}
				></input>
				<button
					className="p-3 border shadow"
					onClick={() => {
						props.setCity(inputValue);
					}}
				>
					Search
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
