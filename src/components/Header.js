import Loading from "./Loading";

const Header = (props) => {
	if (props.error)
		return (
			<div className="flex flex-col items-center justify-center p-20">
				<h1 className="p-3 text-5xl">😟</h1>
				Şehir bulunamadı.
			</div>
		);
	if (!props.data) return <Loading />;
	return (
		<header className={`p-12 text-center font-thin`}>
			<h1 className="text-9xl">{props.data.current.temp_c}&#176;</h1>
			<span className="capitalize ">{props.city}</span>
		</header>
	);
};

export default Header;
