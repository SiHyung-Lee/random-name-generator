import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [isGenerated, setIsGenerated] = useState(false);
  const [name, setName] = useState([]);
  const [limit, setLimit] = useState(1);

  const handleGeneratingName = (event) => {
    event.preventDefault();
    handleLimitUpdate();
    console.log(`count : ${count}, limit : ${limit}`);
    if (count > 10 || limit > 10 || count + limit > 10) {
      alert("You can generate only 10 names");
      return;
    }

    fetch("/data.json")
      .then((response) => response.json())
      .then(({ given_names, surnames }) => {
        const randomSurnames = getRandomElement(surnames, count);
        const randomGivenNames = getRandomElement(given_names, count);
        setName(
          randomSurnames.map(
            (surname, index) => `${surname} ${randomGivenNames[index]}`,
          ),
        );
        setIsGenerated(true);
      })
      .catch((error) => console.log(error));
  };

  const getRandomElement = (array, count) => {
    return [...array].sort(() => Math.random() - 0.5).slice(0, count);
  };

  const handleLimitUpdate = () => {
    setLimit((prev) => prev + count);
  };
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div className="flex justify-center items-center w-screen min-h-screen py-10 bg-cyan-700">
        <form
          onSubmit={handleGeneratingName}
          className="w-1/2 min-w-fit p-5 rounded-xl bg-cyan-950 text-cyan-100 shadow-2xl"
        >
          <p className="mb-5 text-xl text-center text-cyan-100">
            How many times would you like to generate(up to 10)
          </p>
          <div className="relative h-10 py-1.5 pl-3 pr-32 mb-5 rounded-xl bg-cyan-900">
            <input
              type="number"
              className="w-full h-full bg-transparent"
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
            />
            <button
              type="submit"
              className="absolute top-0.5 bottom-0.5 right-0.5 box-border rounded-xl px-4 bg-cyan-950 uppercase"
            >
              Generate
            </button>
          </div>
          <div className="w-full min-h-10 p-3 rounded-xl bg-cyan-900">
            {isGenerated ? (
              name.map((person, index) => <p key={index}>{person}</p>)
            ) : (
              <p>
                <span className="uppercase">Click on generate button</span>{" "}
                Rushil Aggarwal
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
