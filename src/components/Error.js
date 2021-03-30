function Error({ city }) {
	return (
		<header
			className="flex flex-col p-10 font-thin text-center text-white bg-red-600"
			style={{ height: "50vh" }}
		>
			<h1 className="p-5 text-8xl animate-bounce">😭</h1>
			<p>{city} not found.</p>
		</header>
	);
}

export default Error;
