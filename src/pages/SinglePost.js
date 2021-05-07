import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const SinglePost = () => {
	const { id } = useParams();
	const { data: post, isPending, error } = useFetch(
		"http://localhost:8000/posts/" + id
	);
	return (
		<div className="blog-post-details pt-20 pb-20">
			<div className="container mx-auto lg:px-64">
				{isPending && (
					<div className="loading-message bg-green-400 text-white rounded-md p-3 mb-8 text-lg font-medium">
						<h1>Loading...</h1>
					</div>
				)}
				{error && (
					<div className="loading-message bg-red-500 text-white rounded-md p-3 mb-8 text-lg font-medium">
						<h1>{error}</h1>
					</div>
				)}
				{post && (
					<article className="post">
						<img src={post.imgURL} alt="test" />
						<h1 className="text-2xl capitalize font-medium transition duration-300 mt-4">
							{post.title}
						</h1>
						<p className="flex place-center font-normal text-gray-500 mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							{post.author}
						</p>
						<p>{post.content}</p>
					</article>
				)}
			</div>
		</div>
	);
};

export default SinglePost;
