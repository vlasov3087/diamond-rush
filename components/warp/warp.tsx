//@ts-nocheck
import {
  Canvas,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import * as THREE from "three";
import { FC, Suspense, useMemo, useRef } from "react";
import { BoxGeometry, BufferGeometry, MeshBasicMaterial, Points } from "three";

interface Stars {
  count: number;
}
const Stars: FC<{ count: number }> = ({ count }) => {
  const starsGeo = useRef<any>();
  const [vertices, colors] = useMemo<any>(() => {
    const vertices = [];
    const colors = [];
    let i = 0;

    while (i < count) {
      const star: any = new THREE.Vector3(
        Math.random() * 2000 - 1000,
        Math.random() * 1000 - 500,
        -Math.random() * 1000
      );
      star.velocity = 0.1;
      star.acceleration = 0.002;
      vertices.push(star);
      colors.push(new THREE.Color("#FFFFFF"));
      i++;
    }
    return [vertices, colors];
  }, [count]);

  const starTexture = useLoader(THREE.TextureLoader, "/images/star.png");

  useFrame(() => {
    vertices.forEach((p: any) => {
      // p.velocity += p.acceleration;
      p.z += p.velocity;

      if (p.z > -300) {
        p.z = -Math.random() * 1000 - 500;

        // p.velocity = 0;
      }
    });

    if (starsGeo.current) {
      starsGeo.current.verticesNeedUpdate = true;
    }
  });
  return (
    <>
      <points>
        <geometry ref={starsGeo} vertices={vertices} colors={colors} />
        <pointsMaterial
          color={"#fff"}
          vertexColors
          size={3}
          map={starTexture}
        />
      </points>
    </>
  );
};
const Warp = () => {
  return (
    <Canvas style={{ background: "black" }}>
      <Suspense fallback={null}>
        <Stars count={1000} />
      </Suspense>
      {/* <ambientLight /> */}
    </Canvas>
  );
};

export default Warp;
