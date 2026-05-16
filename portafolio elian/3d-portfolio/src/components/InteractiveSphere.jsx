import { useRef, useEffect, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '../store'

const messageBubbles = [
  { text: 'Bienvenido al mundo 3D', position: [3.5, 1.5, -1], color: '#00d9ff' },
  { text: 'Explora con el mouse', position: [-3.5, 1.5, -1], color: '#0e0d0e' },
  { text: 'Haz hover para interactuar', position: [0, -2.5, -1], color: '#3086bb' },
]

// Componente para cada Dado individual
function SingleDice({ position, rotationSpeed, ...props }) {
  const { scene } = useGLTF('/modelos/dado.glb')
  const diceRef = useRef()
  const [hovered, setHover] = useState(false)
  
  // Clonamos la escena para que cada dado sea independiente
  const clonedScene = useMemo(() => scene.clone(), [scene])

  useFrame((state, delta) => {
    if (diceRef.current) {
      diceRef.current.rotation.y += delta * rotationSpeed
      diceRef.current.rotation.x += delta * (rotationSpeed * 0.5)
      
      const targetScale = hovered ? 2.2 : 1.8
      diceRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <primitive
      ref={diceRef}
      object={clonedScene}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    />
  )
}

export function InteractiveSphere() {
  const groupRef = useRef()
  const bubbleRefs = useRef([])
  const { mousePosition, setMousePosition, setHoveredObject, hoveredObject } = useStore((state) => ({
    mousePosition: state.mousePosition,
    setMousePosition: state.setMousePosition,
    setHoveredObject: state.setHoveredObject,
    hoveredObject: state.hoveredObject
  }))

  const [activeMessage, setActiveMessage] = useState(null)
  const bubbles = useMemo(() => messageBubbles, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMousePosition(x, y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [setMousePosition])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mousePosition.y * 0.1, 0.03)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePosition.x * 0.1, 0.03)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Tres dados en diferentes posiciones */}
      <SingleDice position={[0, 0, 0]} rotationSpeed={0.5} />
      <SingleDice position={[-2.5, -1, -2]} rotationSpeed={0.8} />
      <SingleDice position={[2.5, -1, -2]} rotationSpeed={0.3} />

      {/* Burbujas de mensajes */}
      {bubbles.map((bubble, index) => (
        <group key={index} ref={(el) => (bubbleRefs.current[index] = el)} position={bubble.position}>
          <mesh
            onPointerOver={() => { setHoveredObject(`msg-${index}`); setActiveMessage(index) }}
            onPointerOut={() => { setHoveredObject(null); setActiveMessage(null) }}
          >
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color={bubble.color} emissive={bubble.color} emissiveIntensity={0.5} transparent opacity={0.8} />
          </mesh>
          {activeMessage === index && (
            <Html center distanceFactor={8}>
              <div style={{ background: 'black', color: 'cyan', padding: '5px 10px', borderRadius: '10px', border: '1px solid cyan', whiteSpace: 'nowrap' }}>
                {bubble.text}
              </div>
            </Html>
          )}
        </group>
      ))}
    </group>
  )
}

useGLTF.preload('/modelos/dado.glb')