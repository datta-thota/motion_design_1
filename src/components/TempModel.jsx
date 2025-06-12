import React from "react";
import { useGLTF } from "@react-three/drei";
import cokeModel from "../assets/coke.glb"; // Correct path if you're bundling

const CokeModel = () => {
  const { scene } = useGLTF(cokeModel);

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

export default CokeModel;
