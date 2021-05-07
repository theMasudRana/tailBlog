import { useState } from "react";

const Banner = () => {
	const [counter, setCounter] = useState(0);

	const handelIncrement = () => {
		setCounter((countValue) => countValue + 1);
	};
	const handelDecrement = () => {
		setCounter((countValue) => countValue - 1);
	};

	return (
		<div className="banner-area pt-10 pb-10 bg-gray-200">
			<div className="container mx-auto">
				<h1 className="text-center text-4xl font-bold">
					Welcome to TailBlog
				</h1>
				<p className="text-center mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Itaque eaque voluptas aut molestias vero nihil?
				</p>
				<div className="grid place-items-center grid-cols-3">
					<button
						onClick={handelIncrement}
						className="bg-indigo-500 px-5 py-2 text-white"
					>
						+
					</button>
					<p className="px-6">{counter}</p>
					<button
						onClick={handelDecrement}
						className="bg-red-600 px-5 py-2 text-white"
					>
						- Minus
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
