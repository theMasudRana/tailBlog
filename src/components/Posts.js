import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [isPending, setIsPending] = useState(true);
	useEffect(() => {
		fetch("http://localhost:8000/posts")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setPosts(data);
				setIsPending(false);
			});
	}, []);
	return (
		<div className="container mx-auto pt-20 pb-20">
			<SectionTitle title="Recent Posts" />
			{isPending && (
				<div className="loading-message bg-green-400 text-white rounded-md p-3 mb-8 text-lg font-medium">
					<h1>Loading...</h1>
				</div>
			)}
			<div className="grid grid-cols-4 gap-4">
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
										<a
											className="text-2xl capitalize font-medium transition duration-300  hover:text-indigo-600"
											href=""
										>
											{post.title}
										</a>
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
								<a href="/" className="button">
									Read More
								</a>
							</div>
						</article>
					))}
			</div>
		</div>
	);
};

export default Posts;
