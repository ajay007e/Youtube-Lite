import React, { useContext, useEffect, useRef } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

import SkeletonVideoCard from "../shared/SkeletonVideoCard";

const Feed = () => {
  const { loading, setLoading, setLoadMore, networkError, searchResults } =
    useContext(Context);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        document.getElementById("gallery").scrollHeight <
          window.innerHeight + document.getElementById("gallery").scrollTop &&
        !loading
      ) {
        setLoading(true);
        setLoadMore(true);
        console.log("loading gallery", loading);
      }
    };

    ref.current?.addEventListener("scroll", handleScroll);
    return () => ref.current?.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div
        ref={ref}
        id="gallery"
        className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black"
      >
        {networkError && <h2 className="text-white text-center">error</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResults?.map((item) => {
            if (item.type !== "video") return false;
            return <VideoCard key={item?.video?.videoId} video={item?.video} />;
          })}

          {loading && (
            <>
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
              <SkeletonVideoCard />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
