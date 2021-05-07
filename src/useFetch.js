import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const abortController = new AbortController();
		fetch(url, { signal: abortController.signal })
			.then((response) => {
				if (!response.ok) {
					throw Error("Could not fetch data from the server.");
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(null);
			})
			.catch((error) => {
				if (error.name === "AbortError") {
					console.log("Fetch aborted.");
				} else {
					setError(error.message);
					setIsPending(false);
				}
			});
	}, [url]);
	return { data, isPending, error };
};

export default useFetch;
