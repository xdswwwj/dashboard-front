import React from "react";
import OpenLayersMap from "./map/OpenLayersMap";

const HomeComponent: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
      <OpenLayersMap />
    </div>
  );
};

export default HomeComponent;
