import Loading from "./Loading";

const Header = (props) => {
	if (props.error)
		return (
			<header className="font-thin text-center p-11">
				<h1 className="p-5 text-8xl">😟</h1>
				<span className="">{props.city} not found.</span>
			</header>
		);
	if (!props.data) return <Loading />;
	return (
		<header className="p-12 font-thin text-center">
			<h1 className="text-9xl">{props.data.current.temp_c}&#176;</h1>
			<span className="capitalize">{props.city}</span>
		</header>
	);
};

export default Header;
