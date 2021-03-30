import Loading from "./Loading";

const Header = (props) => {
	if (props.error)
		return (
			<header className="font-thin text-center p-11">
				<h1 className="p-5 text-8xl">😟</h1>
				<span>{props.city} not found.</span>
			</header>
		);
	if (!props.data) return <Loading />;
	return (
		<header className="flex flex-col items-center justify-center p-10 mb-10 font-thin text-center text-white bg-blue-400">
			<div className="px-10 py-5 bg-blue-500 rounded-xl bg-opacity-20">
				<h1 className="text-9xl">{props.data.current.temp_c}&#176;</h1>
				<span className="capitalize ">
					{props.data.location.name} - {props.data.location.country}
				</span>
				<div>{props.data.current.condition.text}</div>

				<div>
					<img
						src={`https://${props.data.current.condition.icon}`}
						alt={`${props.data.location.name} - ${props.data.current.condition.text}`}
						title={`${props.data.location.name} - ${props.data.current.condition.text}`}
						className="inline"
					></img>
				</div>
			</div>
		</header>
	);
};

export default Header;
