import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header-area py-5 border-b-2 border-gray-100">
			<div className="container mx-auto">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-4">
						<h2 className="font-bold text-4xl">
							<Link to="/">TailBlog</Link>
						</h2>
					</div>
					<div className="col-span-8">
						<ul className="flex justify-end  space-x-10">
							<li>
								<Link className="menu-item" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="menu-item" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="menu-item" to="/contact">
									Contact
								</Link>
							</li>
							<li>
								<Link className="menu-item" to="/create-post">
									Create Post
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
