import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


  interface ProjectCardProps {
    imgUrl: string;
    title: string;
    gitUrl: string;
    previewUrl: string;
    description: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> =  ({ imgUrl, title, description, gitUrl, previewUrl }) => {

    const [showFull, setShowFull] = useState(false);
  
    const toggleDescription = () => {
      setShowFull(!showFull);
    };
  return (
    <div>
      

        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{
            backgroundImage: `url(${imgUrl})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat"  
          }}
        >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div>
      <p className="text-[#ADB7BE]">
        {showFull ? description : `${description.substring(0, 100)}...`}
      </p>
      {description.length > 100 && (
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline mt-2"
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
      </div>
    </div>
  );
};

export default ProjectCard;