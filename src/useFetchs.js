import { useState, useEffect } from "react";
import axios from "axios";
const useFetchs = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				const responseData = response.data;
				setData(responseData);
			})
			.catch((error) => {
				setError(true);
			});
	}, [url]);

	return { data, error };
};

export default useFetchs;
