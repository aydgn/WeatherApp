const Header = (props) => {
	return (
		<header className={`p-3 text-center font-thin`}>
			<h1 className="text-9xl">{props.data.current.temp_c}&#176;</h1>
			<span className="capitalize ">{props.city}</span>
		</header>
	);
};

export default Header;
