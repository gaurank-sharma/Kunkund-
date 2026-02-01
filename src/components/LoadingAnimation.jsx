// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Text, Plane } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";

// function Pencil() {
//   const pencilRef = useRef();
//   const { viewport, size } = useThree();

//   useFrame((state, delta) => {
//     if (pencilRef.current) {
//       pencilRef.current.rotation.x -= 2 * delta;
//     }
//   });

//   const pencilLength = 4;
//   const pencilRadius = 0.15;

//   let scale;
//   if (size.width < 768) {
//     scale = (viewport.width / pencilLength) * 0.7;
//   } else {
//     scale = 1.0;
//   }

//   const textZPosition = pencilRadius * Math.cos(Math.PI / 6) + 0.001;

//   return (
//     <group ref={pencilRef} scale={scale} rotation={[0, 0, Math.PI / 2]}>
//       {/* Main Hexagonal Body (Blue/Grey) */}
//       <mesh>
//         <cylinderGeometry args={[pencilRadius, pencilRadius, pencilLength, 6]} />
//         <meshStandardMaterial color="#8a9bae" roughness={0.5} metalness={0.2} />
//       </mesh>

//       {/* End Cap (Blue) */}
//       <mesh position={[0, -(pencilLength / 2) - 0.1, 0]}>
//         <cylinderGeometry args={[pencilRadius, pencilRadius, 0.2, 6]} />
//         <meshStandardMaterial color="#304ffe" />
//       </mesh>

//       {/* Sharpened Wood Tip */}
//       <mesh position={[0, pencilLength / 2 + 0.1, 0]}>
//         <coneGeometry args={[pencilRadius, 0.5, 6]} />
//         <meshStandardMaterial color="#E2B38A" />
//       </mesh>

//       {/* Pencil Lead */}
//       <mesh position={[0, pencilLength / 2 + 0.35, 0]}>
//         <coneGeometry args={[0.03, 0.1, 32]} />
//         <meshStandardMaterial color="#36454F" />
//       </mesh>

//       {/* Branding Text Group */}
//       <group position={[0, 0, textZPosition]} rotation={[0, 0, -Math.PI / 2]}>
//         {/* White stripe background */}
//         <Plane args={[3.6, pencilRadius * 1.5]}>
//           <meshStandardMaterial color="white" />
//         </Plane>

//         {/* Text Branding */}
//         <Text
//           position={[0, 0, 0.01]}
//           fontWeight="bold"
//           fontSize={0.18}
//           color="#304ffe"
//           anchorX="center"
//           anchorY="middle"
//           outlineWidth={0.002}
//           outlineColor="black"
//         >
//           {"KUNDKUND STATIONERS"}
//         </Text>
//       </group>
//     </group>
//   );
// }

// export default function LoadingAnimation() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       sessionStorage.setItem("introSeen", "true");
//       navigate("/book");
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <>
//       <div style={{ height: "200vh", background: "#f0f0f0" }} />

//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100vh",
//           background: "#f0f0f0",
//         }}
//       >
//         <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//           <ambientLight intensity={0.8} />
//           <directionalLight position={[10, 10, 5]} intensity={1.5} />
//           <Pencil />
//           <OrbitControls />
//         </Canvas>
//       </div>
//     </>
//   );
// }








import React, { useRef, useLayoutEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Text, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// --- YOUR LOGO DATA ---
const svgData = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="2048.000000pt" height="1195.000000pt" viewBox="0 0 2048.000000 1195.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1195.000000) scale(0.100000,-0.100000)"
fill="#d4af37" stroke="none">
<path d="M19271 6526 c-11 -13 -11 -22 2 -48 17 -35 9 -63 -20 -71 -24 -7
-5917 -11 -11545 -9 -2512 1 -4574 -1 -4583 -4 -9 -4 -22 -19 -31 -35 -8 -16
-29 -35 -47 -43 -18 -7 -45 -28 -60 -45 -15 -18 -27 -29 -28 -24 -1 16 -18
-33 -18 -55 -1 -16 6 -26 19 -29 11 -3 20 -14 20 -24 0 -24 -15 -24 -32 -1
-16 20 -66 48 -74 40 -3 -3 -6 -20 -6 -37 -1 -40 -24 -41 -33 -1 -6 26 -10 29
-33 24 -15 -4 -32 -11 -38 -16 -13 -10 -38 15 -26 27 4 4 -9 4 -28 0 -59 -12
-111 -10 -213 9 -80 15 -126 17 -255 12 -86 -4 -360 -8 -608 -10 l-452 -3 -25
27 c-41 43 -81 55 -136 42 -69 -17 -125 -21 -476 -33 -176 -6 -323 -14 -328
-18 -4 -4 1 -15 10 -23 13 -12 74 -22 233 -38 212 -21 434 -49 578 -71 76 -11
142 -6 142 12 0 14 26 39 41 39 7 0 21 -8 31 -17 16 -14 46 -17 196 -20 212
-3 195 -2 257 -14 80 -14 445 -29 800 -32 l190 -2 0 24 c0 32 21 38 35 11 6
-11 22 -25 36 -30 19 -8 24 -16 22 -37 -3 -24 1 -28 23 -31 19 -2 28 3 37 23
9 20 19 25 46 25 19 0 38 5 41 10 9 15 41 12 59 -5 19 -19 25 -19 48 2 18 16
21 16 64 -7 l45 -25 3692 1 c2031 1 3735 2 3787 2 52 1 500 -1 995 -5 495 -3
917 -5 938 -4 41 1 44 1 312 -5 280 -6 737 -8 925 -4 124 2 171 7 188 18 20
13 25 13 42 -3 12 -11 34 -18 53 -17 29 2 134 4 182 5 11 0 103 1 205 2 171 3
934 5 1025 3 22 -1 69 -1 105 0 36 1 82 1 103 1 20 1 49 1 65 2 15 1 533 -2
1152 -6 619 -3 1389 -7 1711 -8 638 -2 627 -1 614 -56 -3 -14 -15 -45 -26 -68
l-20 -42 -557 -3 c-306 -2 -3509 -2 -7117 1 -7832 5 -8400 4 -8438 -12 -45
-19 -30 -41 33 -48 30 -4 3802 -7 8383 -8 l8327 -2 34 26 c110 84 166 323 116
496 -6 19 -17 64 -25 101 -8 39 -23 77 -35 90 -11 12 -23 32 -26 44 -9 34 -64
41 -350 43 -226 2 -262 0 -273 -13z m452 -82 c62 -11 41 -24 -38 -24 -60 0
-75 3 -75 15 0 16 45 20 113 9z m-133 -14 c0 -6 -40 -10 -100 -10 -60 0 -100
4 -100 10 0 6 40 10 100 10 60 0 100 -4 100 -10z m-5293 -100 c15 -17 31 -40
35 -52 16 -58 1 -188 -23 -188 -5 0 -14 -11 -18 -24 l-9 -23 -699 -2 c-384 -2
-711 -3 -728 -3 -16 1 -146 1 -289 2 l-258 1 -25 25 c-13 13 -28 24 -33 24 -5
0 -14 17 -19 38 -22 78 -8 163 35 203 l26 24 671 5 c370 3 815 4 989 2 l317
-3 28 -29z m-3879 -2 c2 -4 9 -8 16 -8 21 0 39 -45 31 -78 -8 -39 -28 -55 -66
-54 -44 1 -48 10 -11 24 29 11 32 16 32 54 0 39 -2 42 -32 48 -27 5 -36 2 -50
-15 -22 -26 -23 -48 -2 -77 14 -20 14 -24 0 -44 -9 -12 -16 -33 -16 -45 0 -18
-6 -23 -25 -23 l-25 0 4 111 c2 82 6 113 17 120 16 10 122 0 127 -13z m-1306
-15 c29 -26 21 -33 -41 -33 -67 0 -83 -16 -55 -57 12 -19 21 -23 41 -18 80 20
83 19 83 -10 0 -22 -3 -26 -17 -19 -10 5 -41 9 -70 10 -28 1 -56 5 -62 8 -22
14 -11 63 22 98 36 40 70 47 99 21z m-234 -21 c13 -19 12 -22 -2 -28 -18 -7
-46 17 -46 39 0 22 31 14 48 -11z m791 19 c24 -15 5 -38 -38 -45 l-40 -6 -3
-83 c-2 -65 -6 -82 -18 -82 -12 0 -15 17 -15 97 0 53 3 100 7 104 4 4 25 10
45 14 21 4 40 8 43 9 3 0 11 -3 19 -8z m-1096 -7 c11 -4 14 -19 10 -69 -3 -35
-1 -77 5 -94 10 -29 9 -33 -13 -43 -32 -15 -59 5 -45 32 16 30 12 116 -6 134
-8 9 -32 16 -52 16 -22 0 -32 4 -26 9 18 17 97 27 127 15z m163 -5 c3 -6 1
-16 -5 -22 -31 -31 16 -128 55 -113 21 8 65 -4 58 -15 -3 -5 -20 -9 -37 -9
-18 0 -51 -10 -74 -22 -23 -12 -44 -20 -47 -18 -7 8 -15 197 -9 204 10 10 51
7 59 -5z m722 -96 c3 -105 -2 -119 -37 -108 -16 5 -17 14 -13 79 4 68 3 74
-19 90 -13 9 -36 16 -51 16 -29 0 -38 14 -15 24 6 2 39 4 72 3 l60 -2 3 -102z
m502 97 c12 -8 12 -15 -3 -58 -17 -46 -17 -53 -2 -88 19 -45 14 -64 -18 -64
-37 0 -43 14 -37 91 5 63 3 73 -15 85 -10 8 -29 14 -42 14 -25 0 -39 16 -21
23 22 9 122 7 138 -3z m990 -26 c7 -17 5 -34 -7 -59 -14 -30 -15 -41 -5 -68
15 -41 15 -64 1 -72 -21 -13 -40 28 -35 75 3 28 0 54 -8 70 -10 17 -11 31 -4
49 17 47 42 49 58 5z m-398 -29 c3 -29 2 -33 -9 -23 -7 7 -10 23 -7 36 8 30
11 28 16 -13z m520 -51 c3 -92 -3 -117 -23 -97 -13 13 -3 183 11 183 5 0 10
-39 12 -86z m3608 50 c0 -16 -16 -19 -25 -4 -8 13 4 32 16 25 5 -4 9 -13 9
-21z m-5770 1 c0 -9 -6 -12 -15 -9 -8 4 -12 10 -9 15 8 14 24 10 24 -6z m2387
-29 c-4 -24 -2 -57 2 -74 7 -23 6 -32 -5 -36 -11 -4 -14 6 -14 44 0 31 -6 54
-16 64 -31 31 -64 12 -64 -38 -1 -33 -20 -66 -39 -66 -15 0 -14 27 2 33 9 3 9
9 -1 29 -15 27 -13 69 3 80 6 4 39 8 74 8 l64 0 -6 -44z m133 -33 c4 -51 10
-77 24 -92 29 -32 11 -37 -27 -8 -34 25 -34 26 -31 99 2 40 3 75 3 76 1 2 7 2
14 0 7 -3 14 -31 17 -75z m488 45 c2 -16 8 -28 13 -28 5 0 9 -20 9 -44 0 -35
-4 -45 -19 -49 -27 -7 -31 0 -31 49 0 26 -7 50 -19 65 -19 23 -20 23 -40 5
-14 -13 -21 -33 -23 -70 -3 -44 -6 -51 -25 -54 -21 -3 -23 0 -23 50 0 56 -12
78 -42 78 -23 0 -58 -56 -58 -92 0 -19 -5 -28 -16 -28 -13 0 -15 11 -13 68 2
37 9 70 14 75 6 4 69 6 140 5 l130 -3 3 -27z m4078 21 c10 -17 -13 -36 -27
-22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-5192 -15 c9 -23 7 -127 -3 -142
-14 -23 -28 9 -28 65 -1 43 -5 57 -24 73 l-24 19 36 1 c25 0 39 -5 43 -16z
m751 -49 c7 -72 -2 -96 -35 -88 -24 6 -25 16 -5 33 10 8 15 31 15 66 0 75 16
68 25 -11z m3385 61 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6
0 10 -2 10 -4z m877 -2 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z
m296 -1 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m920 0 c-7 -2
-21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-7242 -87 c21 -20 46 -36 55
-36 14 0 14 -3 4 -15 -20 -25 -90 -17 -90 10 0 7 -7 15 -15 19 -16 6 -21 61
-7 93 6 15 8 14 10 -9 2 -16 19 -41 43 -62z m-458 -26 l41 -19 -27 -10 c-46
-18 -65 -13 -92 22 -22 30 -24 37 -14 67 l12 33 19 -37 c13 -26 32 -43 61 -56z
m5867 68 c0 -16 -3 -19 -11 -11 -6 6 -8 16 -5 22 11 17 16 13 16 -11z m-6795
-27 c14 -15 39 -35 57 -44 l33 -16 -30 -11 c-40 -15 -72 -5 -88 28 -12 25 -12
72 -1 72 3 0 16 -13 29 -29z m2144 -28 c-1 -38 -1 -38 -9 -9 -8 27 -6 46 6 46
2 0 4 -17 3 -37z m135 1 c12 -45 -13 -87 -28 -48 -8 21 -8 59 1 67 12 13 21 7
27 -19z m-1557 -40 c-10 -11 -103 -14 -117 -4 -25 17 8 31 56 24 29 -4 44 -2
50 8 7 10 9 9 12 -5 2 -10 2 -21 -1 -23z m-6110 -46 c-3 -8 -6 -5 -6 6 -1 11
2 17 5 13 3 -3 4 -12 1 -19z"/>
<path d="M12293 6284 c-9 -14 -19 -50 -21 -79 -4 -48 -2 -56 22 -78 30 -28 85
-41 103 -23 6 6 14 34 18 62 5 40 3 53 -10 64 -14 12 -14 14 1 31 25 28 2 49
-52 49 -36 0 -47 -5 -61 -26z"/>
<path d="M12477 6299 c-16 -10 -17 -13 -4 -27 20 -23 31 -78 18 -87 -17 -10
-13 -55 5 -62 9 -3 24 3 37 15 21 21 22 21 42 3 11 -10 30 -22 43 -26 19 -6
22 -3 22 24 0 19 -8 35 -20 44 -18 13 -19 16 -6 43 22 44 23 65 4 77 -14 9
-22 7 -41 -11 l-24 -22 -18 20 c-20 22 -32 24 -58 9z"/>
<path d="M12686 6295 c-11 -8 -15 -15 -10 -15 16 0 34 -47 34 -88 0 -41 23
-82 45 -82 27 0 45 31 45 79 0 34 6 53 21 70 17 18 18 25 9 36 -17 20 -118 19
-144 0z"/>
<path d="M12875 6277 c-34 -83 -4 -180 45 -149 26 16 40 15 61 -4 17 -16 19
-15 29 10 5 15 10 38 10 51 0 13 5 36 12 50 18 39 -15 67 -86 73 l-56 4 -15
-35z m85 -38 c0 -11 -4 -17 -10 -14 -5 3 -10 13 -10 21 0 8 5 14 10 14 6 0 10
-9 10 -21z"/>
<path d="M13133 6295 c-12 -8 -24 -28 -28 -45 -3 -16 -15 -41 -26 -54 -28 -36
-22 -70 13 -74 15 -2 38 4 53 14 22 14 28 15 43 3 39 -32 63 -41 77 -29 17 14
15 49 -2 68 -7 7 -16 25 -19 40 -9 38 -52 92 -72 92 -10 0 -27 -7 -39 -15z"/>
<path d="M13416 6297 c-27 -19 -27 -149 -1 -177 20 -22 99 -29 110 -10 4 6 21
16 38 24 37 15 44 43 26 108 -8 31 -18 43 -44 54 -43 18 -106 18 -129 1z m100
-78 c18 -20 18 -21 -1 -35 -37 -27 -62 -12 -51 32 8 30 27 31 52 3z"/>
<path d="M13703 6304 c-7 -3 -28 -38 -48 -79 -31 -62 -35 -77 -25 -95 6 -12
17 -19 23 -17 7 3 28 12 49 21 34 15 37 14 62 -5 41 -33 60 -19 51 39 -7 49
-39 121 -59 134 -12 8 -35 9 -53 2z"/>
<path d="M13880 6292 c-30 -24 -41 -140 -16 -161 15 -13 53 -11 88 3 11 5 23
1 34 -13 25 -29 34 -17 34 42 0 29 4 58 9 66 13 21 -13 67 -41 75 -42 11 -86
6 -108 -12z"/>
<path d="M14201 6296 c-17 -20 -60 -26 -76 -10 -18 19 -41 18 -49 -2 -3 -9 -6
-49 -6 -90 0 -60 3 -76 16 -81 16 -6 38 13 47 41 2 7 10 4 21 -7 10 -9 21 -17
26 -17 5 0 16 -7 25 -16 8 -9 22 -13 30 -10 22 8 18 60 -5 81 -20 18 -20 19
-1 39 30 34 35 63 12 75 -25 14 -26 14 -40 -3z"/>
</g>
</svg>`;

const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
const svgUrl = URL.createObjectURL(svgBlob);

function PremiumPencil() {
  const pencilRef = useRef();
  const { viewport, size } = useThree();
  const [scale, setScale] = useState(1);
  
  const logoTexture = useLoader(THREE.TextureLoader, svgUrl);
  logoTexture.minFilter = THREE.LinearFilter;
  logoTexture.magFilter = THREE.LinearFilter;
  logoTexture.needsUpdate = true;

  useFrame((state, delta) => {
    if (pencilRef.current) {
      // Rotation X gives the nice "rolling" effect
      pencilRef.current.rotation.x -= 2.0 * delta;
    }
  });

  // --- SLIM DIMENSIONS ---
  const pencilLength = 4.5;
  const pencilRadius = 0.10; 
  const tipHeight = 1.0;
  // Radius for the very tip of the wood where it meets the lead
  const tipTopRadius = 0.032; 

  useLayoutEffect(() => {
    // --- MOBILE SCALING FIX ---
    // Reduced from 0.70 to 0.50 so it never goes off screen
    let s;
    if (size.width < 768) {
      s = (viewport.width / pencilLength) * 0.60;
    } else {
      s = 1.0;
    }
    setScale(s);
  }, [size.width, viewport.width]);

  const textZPosition = pencilRadius * Math.cos(Math.PI / 6) + 0.002;
  // Add this line above the return
const xPosition = size.width < 768 ? 0.5 : 0; // 0.5 for Mobile, 0 for Desktop

  return (
    <group 
        ref={pencilRef} 
        scale={scale} 
        rotation={[0.5, 0, Math.PI / 2]} 
        position={[0.3, 0, 0]}
    >
      {/* 1. Main Hexagonal Body */}
      <mesh>
        <cylinderGeometry args={[pencilRadius, pencilRadius, pencilLength, 6]} />
        <meshPhysicalMaterial 
            color="#080808" 
            roughness={0.25}
            metalness={0.1}
            clearcoat={1}
        />
      </mesh>

      {/* 2. End Cap */}
      <mesh position={[0, -(pencilLength / 2) - 0.1, 0]}>
        <cylinderGeometry args={[pencilRadius, pencilRadius, 0.2, 6]} />
        <meshStandardMaterial color="#111111" roughness={0.9} />
      </mesh>

      {/* 3. Wood Tip (FIXED: Using Cylinder for smooth transition) */}
      {/* We sink it slightly (-0.02) into the body to prevent visual gaps */}
      <mesh position={[0, pencilLength / 2 + (tipHeight / 2) - 0.02, 0]}>
         {/* Top radius matches lead base. Bottom radius matches pencil body. */}
        <cylinderGeometry args={[tipTopRadius, pencilRadius, tipHeight, 32]} /> 
        <meshStandardMaterial color="#e6bc86" roughness={0.8} />
      </mesh>

      {/* 4. Pencil Lead (FIXED POSITION) */}
      {/* We sink it slightly (-0.02) into the wood tip to prevent "detached" look */}
      <mesh position={[0, pencilLength / 2 + tipHeight + 0.15 - 0.04, 0]}>
        <coneGeometry args={[tipTopRadius, 0.3, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} />
      </mesh>

      {/* --- BRANDING --- */}
      <group 
        position={[0, 0, textZPosition]} 
        rotation={[0, 0, -Math.PI / 2]}
      >
        <mesh position={[-1.4, 0, 0]}>
            <planeGeometry args={[1.5, 0.75]} />
            <meshBasicMaterial 
                map={logoTexture} 
                transparent={true} 
                opacity={1}
                side={THREE.DoubleSide}
            />
        </mesh>

        <Text
          position={[0.6, 0.04, 0]}
          fontSize={0.12} 
          letterSpacing={0.05}
          color="#d4af37" 
          anchorX="center"
          anchorY="middle"
        >
          KUNDKUND STATIONERS
        </Text>

        <Text
          position={[0.6, -0.06, 0]}
          fontSize={0.05} 
          letterSpacing={0.2}
          color="#cfb53b" 
          anchorX="center"
          anchorY="middle"
        >
          PREMIUM PENCILS
        </Text>
      </group>
    </group>
  );
}

export default function LoadingAnimation() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#f0f0f0" }}>
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        shadows
        gl={{ antialias: true }}
      >
        <Environment preset="city" />
        
        <ContactShadows 
            position={[0, -0.4, 0]} 
            opacity={0.15} 
            scale={10} 
            blur={2.5} 
            color="#000000"
        />

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        <React.Suspense fallback={null}>
            <PremiumPencil />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
