import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full md:h-[175vh] text-gray-300 bg-[#0a192f]  pt-96 sm:pt-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4 text-lg">
            Unveil the magic behind captivating user experiences – each project
            is a testament to my dedication to transforming ideas into
            interactive realities that resonate.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <span className="text-2xl font bold text-white">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                              bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
