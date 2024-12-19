import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-cyan-700">
        <div className="w-1/2 p-5 rounded-xl bg-cyan-950 text-cyan-100 shadow-2xl">
          <p className="mb-5 text-xl text-center text-cyan-100">
            How many times would you like to generate(up to 10)
          </p>
          <div className="relative h-10 py-1.5 pl-3 pr-32 mb-5 rounded-xl bg-cyan-900">
            <input type="number" className="w-full h-full bg-transparent" />
            <button
              type="button"
              className="absolute top-0.5 bottom-0.5 right-0.5 box-border rounded-xl px-4 bg-cyan-950 uppercase"
            >
              Generate
            </button>
          </div>
          <div className="w-full min-h-10 p-3 rounded-xl bg-cyan-900">
            <p>
              <span className="uppercase">Click on generate button</span> Rushil
              Aggarwal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
