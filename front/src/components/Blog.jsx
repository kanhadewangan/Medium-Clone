import React from "react";

const Blog = () => {
  return (
    <>
      <div>
        <div className="h-full w-scren flex flex-row ">
          <div className="basis-2/3  h-full ">
            <h1 className="text-center font-stretch-100% text-4xl font-bold py-36">
              "Thoughts become words, words become stories, and stories shape
              the world. Let’s create something meaningful together."
            </h1>
            <h3 className=" font-md text-xl text-center">
              Postes on <span> 2021-09-01</span>
            </h3>
          </div>
        <div className="   py-[12vh]">
        <div className="basis-1/3  px-27 py-35 text-wrap  "> 
        <h3 className=" text-2xl font-semibold">Author</h3>
        <div className="h-10 w-10 mt-3 flex justify-center   items-center bg-zinc-400 rounded-full">
        
        <div className="text-3xl w-full ">
        <h1 className="  px-20 text-2xl font-bold">Jokester</h1>
        </div>
        
        <div className="w-full h-full mt-20 px-3 text-center   font-lignht text-nowrap text-base">  
            <h3 className=" text-base  "> Master Of mirth , purvery of pune</h3></div>
        </div>
    
            </div>
        


        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
