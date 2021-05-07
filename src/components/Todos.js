import useFetchs from "../useFetchs";
const Todo = () => {
	const { data: todo, error } = useFetchs(
		"https://jsonplaceholder.typicode.com/todos"
	);
	return (
		<div className="container mx-auto">
			{error && <p>Data could not be fetch from the API.</p>}
			{todo &&
				todo.map((todo) => (
					<div key={todo.id}>
						<p>{todo.title}</p>
					</div>
				))}
		</div>
	);
};

export default Todo;
