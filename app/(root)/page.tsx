import Hello from "../../components/Hello";

const Home = () => {
  console.log("server component");
  return (
    <main>
      <div className="text-5xl underline">Welcome to next js</div>
      <Hello />
    </main>
  );
};

export default Home;
