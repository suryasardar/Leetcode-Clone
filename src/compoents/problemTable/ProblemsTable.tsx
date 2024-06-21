import React, { useState } from "react";
import { problems } from "@/MockProblem/problem";
import { BsCheckCircle, BsYoutube } from "react-icons/bs";

import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { doc } from "firebase/firestore";
type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [youtubeplayer, setyoutubeplayer] = useState({
    isopen: false,
    videoId: "",
  });
  
  return (
    <>
      <tbody className="text-white">
        {problems.map((doc, idx) => {
          const difficultycolor =
            doc.difficulty === "Easy"
              ? "text-dark-green-s"
              : doc.difficulty === "Medium"
              ? "text-yellow-500"
              : "text-red-600";
          return (
            <tr
              className={`${idx % 2 == 1 ? "bg-dark-layer-2" : ""}`}
              key={doc.id}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize={"18"} width="18" />
              </th>
              <td className="px-4 py-4">
                <Link
                  className="hover:text-gray-600 cursor-pointer"
                  href={`/problem/${doc.id}`}
                >
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultycolor}`}>
                {doc.difficulty}
              </td>
              <td className="px-4 py-4">{doc.category}</td>
              <td className="px-6 py-4">
                {doc.videoId ? (
                  <AiFillYoutube
                    fontSize={"18"}
                    className=" cursor-pointer hover:text-red-700"
                    onClick={()=>setyoutubeplayer({isopen:true,videoId:doc.videoId as string})}
                  />
                ) : (
                  <p>coming soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>

      {youtubeplayer.isopen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center ">
          <div className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <IoClose
                  fontSize={"35"}
                  className="cursor-pointer absolute -top-16 right-0"
                  onClick={()=>setyoutubeplayer({isopen:false,videoId:''})}
                />
                <YouTube
                  videoId={youtubeplayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  );
};
export default ProblemsTable;
