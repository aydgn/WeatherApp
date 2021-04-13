import { useState } from "react";
import GetLocationButton from "./GetLocationButton";
const Input = ({ data, setCity, open, setOpen }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<div id="input" className={open ? "block" : "hidden"}>
				<div className="flex flex-col w-full px-3 mx-auto mt-10 sm:w-max ">
					<div className="flex mb-5">
						<input
							type="search"
							className="w-full p-3 border shadow-sm sm:w-auto"
							placeholder="Search a city"
							onBlur={(e) => {
								e.target.select();
							}}
							autoFocus
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
							onKeyPress={(e) => {
								if (e.code === "Enter" && e.target.value !== "") {
									setCity(e.target.value);
									e.target.value = "";
								}
							}}
						></input>
						<button
							type="reset"
							className="p-3 border shadow-sm hover:ring-1"
							onClick={() => {
								setCity(inputValue);
							}}
						>
							🔍
						</button>
					</div>
					<GetLocationButton setCity={setCity} />
				</div>
			</div>
		</>
	);
};

export default Input;
