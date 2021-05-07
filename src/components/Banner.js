import useFetch from "../useFetch";
const Banner = () => {
	const { data: bannerData } = useFetch("http://localhost:8000/banner");
	return (
		<div className="banner-area py-32 bg-gray-200">
			<div className="container mx-auto">
				{bannerData.map((banner, index) => (
					<div className="banner-content" key={index}>
						<h2 className="text-4xl font-bold">{banner.title}</h2>
						<p className="mt-2">{banner.description}</p>
						<ul>
							{banner.tcList.map((listItem, index) => (
								<li key={index}>{listItem}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Banner;
