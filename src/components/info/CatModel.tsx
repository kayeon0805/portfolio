import { useEffect, useMemo, useRef } from 'react'
import { GroupProps, useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Group, LoopRepeat } from 'three'

export function CatModel(props: GroupProps) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('models/cat/scene.gltf')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      const keys = Object.keys(actions)
      if (keys.length > 0) {
        const action = actions[keys[0]]!
        action.timeScale = 0.5
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
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="0df7f1c552db41979cdb0b8efba99edffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_42" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    {/* @ts-ignore */}
                    <skinnedMesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.Mat_Gradient} skeleton={nodes.Object_43.skeleton} />
                  </group>
                </group>
                <group name="Cat" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
