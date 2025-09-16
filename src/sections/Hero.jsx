

import { Canvas } from "@react-three/fiber";
import { Model } from "../components/smol_ame_in_an_upcycled_terrarium_hololiveen";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";
//Media query line missing

const Hero = () => {


  const text = `I believe every project deserves both brains and aesthetics, 
        that’s why I code with precision and design with passion.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection subTitle={"404 No Bugs Found"} title={"Ujjawal Chauhan"} text={text} textColor={"text-black"} />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          {/* Floating Model */}
          <Float rotationIntensity={2} rotationAxis="x"  >
            <Model scale={1} castShadow position={[0, -0.5, 0]} />
          </Float>

          {/* Soft blurred shadow under the model */}
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.5}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
