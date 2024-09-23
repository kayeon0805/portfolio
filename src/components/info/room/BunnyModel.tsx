import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function BunnyModel(props: GroupProps) {
  const { nodes, materials } = useGLTF('models/bunny/scene.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Kain} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('models/bunny/scene.glb')
