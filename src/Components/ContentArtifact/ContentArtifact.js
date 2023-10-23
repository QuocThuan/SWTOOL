import React from "react";
import Totem from "./Totem";
import InfoPet from "./InfoPet";
import Artifact from "./Artifact";

const ContentArtifact = () => {
  return (
    <>
      <Totem />
      <div className="grid grid-cols-12 gap-3 text-center">
        <div className="col-span-6 bg-yellow-100 p-3">
          <InfoPet />
        </div>
        <div className="col-span-6 bg-pink-100 p-3">
          <Artifact />
        </div>
      </div>
    </>
  );
};

export default ContentArtifact;
