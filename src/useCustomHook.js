import { useState, useEffect } from "react";
import axios from "axios";

const useCustomHook = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(true);
	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				const slicedData = response.data.slice(0, 10);
				setData(slicedData);
			})
			.then((error) => {
				setError(false);
			});
	}, [url]);
	return { data, error };
};

export default useCustomHook;
