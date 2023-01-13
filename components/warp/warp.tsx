//@ts-nocheck
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { FC, Suspense, useEffect, useMemo, useRef } from "react";

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
      const star = new THREE.Vector3(
        Math.random() * 2000 - 1000,
        Math.random() * 1000 - 500,
        -Math.random() * 1000
      );
      star.velocity = 0.5;
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

      if (p.z > -500 && p.x < 250 && p.x > -250 && p.y < 250 && p.y > -250) {
        p.z = -Math.random() * 1000 - 1000;
      } else if (
        p.z > 0 &&
        (p.x >= 250 || p.x <= -250 || p.y >= 250 || p.y <= -250)
      ) {
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
      <points
        onAfterRender={() => {
          const loader = document.getElementById("globalLoader");
          if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
          }
        }}
      >
        <geometry ref={starsGeo} vertices={vertices} colors={colors} />
        <pointsMaterial
          color={"#fff"}
          vertexColors
          size={1.5}
          map={starTexture}
        />
      </points>
    </>
  );
};
const Warp = () => {
  useEffect(() => {}, []);
  return (
    <Canvas style={{ background: "black" }}>
      <Suspense fallback={null}>
        <Stars count={2000} />
      </Suspense>
      {/* <ambientLight /> */}
    </Canvas>
  );
};

export default Warp;
