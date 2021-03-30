const Loading = () => {
	return (
		<div
			className="flex flex-col items-center justify-center p-10 font-thin text-center text-white bg-blue-400 "
			style={{ height: "50vh" }}
		>
			<span className="p-1 text-9xl justify-self-center animate-spin">⏳</span>
		</div>
	);
};

export default Loading;
