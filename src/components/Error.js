function Error({ city }) {
	return (
		<header className="flex flex-col items-center justify-center font-thin text-white bg-red-600 h-96">
			<h1 className="p-5 text-8xl animate-bounce ">😭</h1>
			<p className="border-t-2">{city} not found.</p>
		</header>
	);
}

export default Error;
