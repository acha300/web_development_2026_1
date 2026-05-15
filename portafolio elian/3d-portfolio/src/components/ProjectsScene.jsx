import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useStore } from '../store'

export function ProjectBox({ project, position, onClick }) {
  const meshRef = useRef()
  const [isHovered, setIsHovered] = useState(false)
  const { setActiveProject } = useStore()
  
  useFrame(() => {
    if (meshRef.current) {
      // Rotación suave
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
      
      // Escala en hover
      meshRef.current.scale.lerp(
        { x: isHovered ? 1.15 : 1, y: isHovered ? 1.15 : 1, z: isHovered ? 1.15 : 1 },
        0.1
      )
    }
  })
  
  const handleClick = () => {
    setActiveProject(project)
    onClick?.(project)
  }
  
  return (
    <Float
      position={position}
      rotationIntensity={0.4}
      floatIntensity={1}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color={isHovered ? '#ff006e' : '#00d9ff'}
          emissive={isHovered ? '#ff006e' : '#190b68'}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
          wireframe={false}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export function ProjectsScene() {
  const projects = [
    
  ]

  const positions = [
    [-3, 2, 0],
    [3, 2, 0],
    [-3, -2, 0],
    [3, -2, 0],
  ]
  
  const handleProjectClick = (project) => {
    console.log('Proyecto seleccionado:', project)
  }
  
  return (
    <>
      {projects.map((project, idx) => (
        <ProjectBox
          key={project.id}
          project={project}
          position={positions[idx]}
          onClick={handleProjectClick}
        />
      ))}
    </>
  )
}
