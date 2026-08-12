"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useBreakpoints } from "@/hooks/breakpoints";
import Basketball from "./models/Basketball";

export default function HeroModel() {
	const { isMobile } = useBreakpoints(); 

	return (
		<Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
			<ambientLight intensity={0.28} />
			<hemisphereLight color="#ffffff" groundColor="#1f1f1f" intensity={0.35} />
			<directionalLight position={[4, 5, 3]} intensity={5} />
			<directionalLight position={[-3, 2, -2]} intensity={1.22} />

			<OrbitControls
				// target={[0, isMobile ? 10 : 20, 0]}
				target={[0, 0, 0]}
				enablePan={false}
				// enableRotate={isDesktop}
				autoRotate={true}
				autoRotateSpeed={0.5}
				enableZoom={false}
				// maxDistance={12}
				minDistance={isMobile ? 10 : 7 }
				// minDistance={7}
				minPolarAngle={Math.PI / 5}
				maxPolarAngle={Math.PI / 2}
			/>

			<group
				scale={1}
			>
				<Basketball />
			</group>
		</Canvas>
	)
}