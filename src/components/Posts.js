import SectionTitle from "./SectionTitle";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
const Posts = () => {
	const { data: posts, isPending, error } = useFetch(
		"http://localhost:8000/posts"
	);
	return (
		<div className="container mx-auto pt-20 pb-20 px-4 lg:px-0 ">
			<SectionTitle title="Recent Posts" />
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
			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
				{posts &&
					posts.map((post) => (
						<article
							className="post-item shadow-md rounded-md"
							key={post.id}
						>
							<img src={post.imgURL} alt={post.title} />
							<div className="post-content p-6">
								<div className="post-header mb-4">
									<h1 className="mb-3">
										<Link
											className="text-2xl capitalize font-medium transition duration-300  hover:text-indigo-600"
											to={`/posts/${post.id}`}
										>
											{post.title}
										</Link>
									</h1>
									<p className="flex place-center font-normal text-gray-500">
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
								</div>
								<p className="text-gray-700">{post.content}</p>
								<Link
									to={`/posts/${post.id}`}
									className="button"
								>
									Read More
								</Link>
							</div>
						</article>
					))}
			</div>
		</div>
	);
};

export default Posts;
