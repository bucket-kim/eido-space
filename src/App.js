import "./App.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div className="h-full ">
        <div className="absoulte flex justify-between text-white text-[12px] p-8 font-NimbusSansL ">
          <Logo />

          <div className="flex flex-col items-end ">
            <div>Welcom to Eidolon your new digital galary.</div>
            <div>
              Contact us at <span>connect@eidolon.com</span>
            </div>
            <div>Created using Web3</div>
            <div>Axe coming 5.9.2024</div>
            <div>Join the collective</div>
            <div>
              Follow us on social media <span>@eidolon</span>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 text-white flex justify-between p-8">
          <div className="">
            <div>#0001</div>
            {/* <div>Name of the piece</div>
            <div>By Eidolon</div> */}
          </div>
          <button>Buy</button>
        </div>
      </div>
      <Scene />
    </>
  );
}

export default App;
