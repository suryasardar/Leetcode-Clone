import React from "react";
import PreferenceNav from "../Preference/PreferenceNav";
import Split from "react-split";
import { FaChevronUp } from "react-icons/fa6";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
type PlaygroundProps = {};

const Playground: React.FC<PlaygroundProps> = () => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative">
      <PreferenceNav />
      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value="const a=1;"
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="text-white px-5 py-2 text-sm font-medium leading  ">
          TestCases
          <hr className="bg-white w-16 px-3 my-1 h-0.5" />
          <div className="flex items-center space-x-2 ">
            <button className=" bg-dark-fill-2 rounded-lg my-1 text-lg px-3 font-medium hover:bg-dark-fill-3 ">
              Case 1
            </button>
            <button className=" bg-dark-fill-2 rounded-lg my-1 text-lg px-3 font-medium hover:bg-dark-fill-3">
              Case 2
            </button>
            <button className=" bg-dark-fill-2 rounded-lg my-1 text-lg px-3 font-medium hover:bg-dark-fill-3">
              Case 3
            </button>
          </div>
              </div>
              
      </Split>
      <div className="text-white px-4 py-2 flex items-center justify-between">
        <button className=" bg-dark-fill-2 flex items-center gap-2 py-2 px-4 rounded-lg text-sm hover:bg-dark-fill-3 ">
          Console{" "}
          <span>
            <FaChevronUp />
          </span>
        </button>
        <div className=" space-x-2 text-sm ">
          <button className=" bg-dark-fill-2 hover:bg-dark-fill-3 rounded-lg p-1.5">
            Run
          </button>
          <button className=" bg-dark-green-s hover:bg-dark-fill-3 rounded-lg p-1.5">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Playground;
