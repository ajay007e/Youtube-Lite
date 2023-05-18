import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";


const SkeletonVideoCard = () => {
  return (
    <Link to="/">
      <div className="flex flex-col mb-8">
        <div className=" h-52 md:h-48 md:rounded-xl overflow-hidden">
          <Skeleton
            style={{ borderRadius: "1rem" }}
            baseColor="#6e7073"
            highlightColor="#7f7f7f"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex text-white mt-2">
          <div className="flex items-start">
            <Skeleton
              circle="true"
              baseColor="#6e7073"
              highlightColor="#7f7f7f"
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="mb-2">
              <Skeleton
                baseColor="#6e7073"
                highlightColor="#7f7f7f"
                width={200}
                height={20}
              />
            </span>

            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <Skeleton
                baseColor="#6e7073"
                highlightColor="#7f7f7f"
                width={100}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkeletonVideoCard;

