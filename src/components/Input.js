const input = (props) => {
	function getLocation(lat, long) {
		if ("geolocation" in navigator) {
			/* Eğer cihazda GPS özellikleri aktifse tahmini kordinantlarını alıyoruz. */
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log("Latitude: ", position.coords.latitude);
				console.log("Longitude: ", position.coords.longitude);
				lat = position.coords.latitude;
				long = position.coords.longitude;
				console.log(lat, long);

				fetch(
					`http://api.weatherapi.com/v1/current.json?key=e1b4ce07c4d44753be4182931212503&q=${lat},${long}`
				)
					.then((response) => response.json())
					.then((city) => props.setCity(city.location.region));
			});
		} else {
			console.log("Not Available");
		}
	}
	return (
		<div className="text-center ">
			<input
				className="border p-3 rounded shadow"
				placeholder="Select a city"
				onKeyPress={(e) => {
					if (e.code === "Enter") {
						props.setCity(e.target.value);
					}
				}}
			></input>
			<button className="border p-3" onClick={getLocation}>
				📍 Get my location
			</button>
		</div>
	);
};

export default input;
