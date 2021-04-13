import Loading from "./Loading";
import Error from "./Error";

const Header = ({ data, error, city, open, setOpen }) => {
	if (error) return <Error city={city} />;
	if (!data) return <Loading />;
	return (
		<header className="flex flex-col items-center justify-center font-thin text-center text-white bg-gradient-to-b from-green-400 to-blue-500 h-96">
			<button onClick={() => setOpen(!open)} className="p-1 border rounded">
				Change City
			</button>
			<div className="px-10 py-5 bg-white shadow-sm rounded-xl bg-opacity-5">
				<h1 className="text-9xl">{data.current.temp_c}&#176;</h1>
				<span className="capitalize ">
					{data.location.name} - {data.location.country}
				</span>
				<div>{data.current.condition.text}</div>

				<div>
					<img
						src={`https://${data.current.condition.icon}`}
						alt={`${data.location.name} - ${data.current.condition.text}`}
						title={`${data.location.name} - ${data.current.condition.text}`}
						className="inline"
					></img>
				</div>
			</div>
		</header>
	);
};

export default Header;
