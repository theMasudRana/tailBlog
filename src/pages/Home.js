import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Todo from "../components/Todos";

const Home = () => {
	return (
		<div className="page-wrapper">
			<Banner />
			<Todo />
			<Posts />
		</div>
	);
};

export default Home;
