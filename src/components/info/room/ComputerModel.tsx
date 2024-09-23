import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export function ComputerModel(props: GroupProps) {
  const { nodes, materials } = useGLTF('models/computer_set_up/scene.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-3.7, 3.961, 1.167]} rotation={[0, Math.PI / 2, 0]} scale={[0.173, 0.176, 0.173]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Metal_scratched} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Plastic_with_scratches} />
      </group>
      <group position={[-0.007, 3.15, 1.163]} scale={[0.682, 0.486, 0.31]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Black_Leather} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Black_Plastic} />
      </group>
      <group position={[-1.166, 5.486, -3.044]} scale={[0.093, 0.018, 0.058]}>
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Plastic_with_scratches} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Brushed_metal} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.007']} />
      </group>
      <group position={[0.902, 4.071, 0]} scale={[0.008, 0.012, 0.027]}>
        <mesh geometry={nodes.Object_25.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Plastic_with_scratches} />
      </group>
      <group position={[0.826, 5.341, 0]} scale={[0.086, 1, 1.512]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.Plastic_with_scratches} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Glowing_red} />
        <mesh geometry={nodes.Object_30.geometry} material={materials['Material.002']} />
      </group>
      <group position={[1.117, 5.412, 0]} scale={[0.032, 0.046, 0.105]}>
        <mesh geometry={nodes.Object_32.geometry} material={materials.Plastic_with_scratches} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Glowing_red} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Wood} position={[-0.582, 3.871, 0]} rotation={[0, 0, -Math.PI]} scale={[-2.522, 0.076, 4.9]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Plastic_with_scratches} position={[-0.983, 3.976, -0.758]} rotation={[0, -0.265, 0]} scale={[0.41, 0.037, 1]} />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Plastic_with_scratches}
        position={[-1.203, 3.991, 1.502]}
        rotation={[0, 0.286, 0]}
        scale={[0.352, 0.298, 0.253]}
      />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Black_Plastic} position={[-3.276, 1.553, -0.002]} scale={[0.126, 0.304, 0.126]} />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Black_Leather}
        position={[-4.71, 3.937, -0.009]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[1, 0.277, 0.804]}
      />
    </group>
  )
}

useGLTF.preload('models/computer_set_up/scene.glb')
