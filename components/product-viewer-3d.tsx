"use client"

import { useRef, useEffect } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react"

// Model component that loads and displays the 3D cake
function CakeModel({ ...props }) {
  // In a real app, you would use an actual model path
  // For this example, we'll create a simple cake shape
  return (
    <group {...props}>
      {/* Cake base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 1, 32]} />
        <meshStandardMaterial color="#f8e3c5" />
      </mesh>

      {/* Frosting */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[2.1, 2, 0.3, 32]} />
        <meshStandardMaterial color="#fff5e6" />
      </mesh>

      {/* Decorations */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[Math.sin((i / 5) * Math.PI * 2) * 1.5, 0.75, Math.cos((i / 5) * Math.PI * 2) * 1.5]}
          castShadow
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#d97706" />
        </mesh>
      ))}

      {/* Candle */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>

      {/* Candle flame */}
      <mesh position={[0, 1.3, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

// Scene component with controls
function Scene({ controlsRef }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 3, 5)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <CakeModel rotation={[0, 0, 0]} />
      <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={10} blur={1.5} />
      <Environment preset="sunset" />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={8}
      />
    </>
  )
}

export default function ProductViewer3D() {
  const controlsRef = useRef()

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const handleZoom = (direction) => {
    if (controlsRef.current) {
      const delta = direction === "in" ? -1 : 1
      controlsRef.current.dolly(delta)
      controlsRef.current.update()
    }
  }

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading 3D Model...</div>}>
        <Canvas shadows>
          <Scene controlsRef={controlsRef} />
        </Canvas>
      </Suspense>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button variant="secondary" size="icon" onClick={handleReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => handleZoom("in")}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => handleZoom("out")}>
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

    </div>
  )
}

