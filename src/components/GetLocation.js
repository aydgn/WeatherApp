const GetLocation = ({ setCity }) => {
	const getLocation = (lat, long) => {
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
	return (
		<div className="flex flex-col items-center justify-center flex-1">
			<span>or</span>
			<button className="w-full py-3 border shadow" onClick={getLocation}>
				📍 Get my location
			</button>
		</div>
	);
};

export default GetLocation;
