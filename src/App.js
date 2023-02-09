import "./App.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="h-full ">
        <div className="absoulte flex justify-between text-white text-[12px] p-8 pt-[6em] font-NimbusSansL">
          <Logo />

          <div className="flex flex-col items-end ">
            <TypeAnimation
              sequence={["Welcome to Eidolon your new digital galary."]}
              cursor={false}
              speed={60}
            />
            <div className="flex">
              <TypeAnimation
                sequence={[3400, "Contact us at "]}
                cursor={false}
                wrapper={"div"}
                speed={60}
              />
              <TypeAnimation
                sequence={[4000, "connect@eidolon.com"]}
                cursor={false}
                wrapper={"span"}
                className={"indent-1 text-blue-500"}
              />
            </div>
            <TypeAnimation
              sequence={[5400, "Created using Web3"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
            {/* <div>Created using Web3</div> */}
            <TypeAnimation
              sequence={[6500, "Axe coming 5.9.2024"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
            <TypeAnimation
              sequence={[7500, "Join the collective"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
            <TypeAnimation
              sequence={[8500, "Follow us on social media @eidolon "]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
          </div>
        </div>
        <div className="w-full absolute bottom-0 text-white flex justify-between p-8 pb-[6em]">
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
