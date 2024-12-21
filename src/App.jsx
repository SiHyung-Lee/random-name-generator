import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(3);
  const [isGenerated, setIsGenerated] = useState(false);
  const [name, setName] = useState([]);

  const handleGeneratingName = () => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((data) => {
        const surnames = getRandomElement(data.surnames, count);
        const givenNames = getRandomElement(data.given_names, count);
        setName(
          surnames.map((surname, index) => `${surname} ${givenNames[index]}`),
        );
        setIsGenerated(true);
      })
      .catch((error) => console.log(error));
  };

  const getRandomElement = (array, count) => {
    return [...array].sort(() => Math.random() - 0.5).slice(0, count);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-cyan-700">
        <div className="w-1/2 p-5 rounded-xl bg-cyan-950 text-cyan-100 shadow-2xl">
          <p className="mb-5 text-xl text-center text-cyan-100">
            How many times would you like to generate(up to 10)
          </p>
          <div className="relative h-10 py-1.5 pl-3 pr-32 mb-5 rounded-xl bg-cyan-900">
            <input
              type="number"
              className="w-full h-full bg-transparent"
              value={count}
              onChange={(event) => setCount(event.target.value)}
            />
            <button
              type="button"
              className="absolute top-0.5 bottom-0.5 right-0.5 box-border rounded-xl px-4 bg-cyan-950 uppercase"
              onClick={handleGeneratingName}
            >
              Generate
            </button>
          </div>
          <div className="w-full min-h-10 p-3 rounded-xl bg-cyan-900">
            {isGenerated ? (
              name.map((person, index) => <p key={index}>{person}</p>)
            ) : (
              // name.map((person, index) => <p key={index}>{person}</p>)
              <p>
                <span className="uppercase">Click on generate button</span>{" "}
                Rushil Aggarwal
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
