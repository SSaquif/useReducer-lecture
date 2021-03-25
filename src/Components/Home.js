import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h3>Home</h3>

      <h4>Part 1</h4>
      <Link to="/ex1"> Excercise 1 </Link>
      <Link to="/ex2"> Excercise 2 </Link>
      <Link to="/ex3"> Excercise 3 </Link>

      <h4>Part 2</h4>
      <Link to="/ex4"> Excercise 4 </Link>
      <Link to="/ex5"> Excercise 5 </Link>

      <h4>Part 3</h4>
      <Link to="/ex6"> Excercise 6 </Link>
      <Link to="/ex7"> Excercise 7 </Link>
    </>
  );
};

export default Home;
