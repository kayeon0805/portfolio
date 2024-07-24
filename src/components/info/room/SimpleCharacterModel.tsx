import React from 'react'
import { GroupProps, useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { LoopRepeat } from 'three'
import { Group } from 'three'

export function SimpleCharacterModel(props: GroupProps) {
  const group = React.useRef<Group>(null)
  const { scene, animations } = useGLTF('models/simple_character/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  React.useEffect(() => {
    if (actions) {
      const keys = Object.keys(actions)
      if (keys.length > 0) {
        const action = actions[keys[0]]!
        action.timeScale = 0.2
        action.loop = LoopRepeat
        action.play()
      }
    }
  }, [actions, animations])

  useFrame((state, delta) => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.getMixer().update(delta)
      })
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.468}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_15" position={[-0.074, 0, -0.096]} rotation={[0, -Math.PI / 2, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="body_14" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Material} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Material} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Material} skeleton={nodes.Object_9.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
