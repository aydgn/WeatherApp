import { useState } from "react";
import GetLocation from "./GetLocation";
const Input = ({ data, setCity, error }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<div className="flex justify-center px-3 mt-10">
				<input
					type="search"
					className="w-full p-3 border rounded shadow sm:w-auto"
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
					className="p-3 border shadow"
					onClick={() => {
						setCity(inputValue);
					}}
				>
					🔍
				</button>
			</div>

			<GetLocation setCity={setCity} />
		</>
	);
};

export default Input;
