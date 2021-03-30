import Loading from "./Loading";
import Error from "./Error";

const Header = ({ data, error, city }) => {
	if (error) return <Error city={city} />;
	if (!data) return <Loading />;
	return (
		<header
			className="flex flex-col items-center justify-center p-10 font-thin text-center text-white bg-blue-400"
			style={{ height: "50vh" }}
		>
			<div className="px-10 py-5 bg-blue-500 shadow-sm rounded-xl bg-opacity-20">
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
