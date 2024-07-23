import { useEffect, useRef, useState, useCallback } from 'react'

export default function useActiveSection(options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const elementsMap = useRef<Map<string, Element | null>>(new Map())
  const visibilityMap = useRef<Map<string, boolean>>(new Map())

  /** setRef 콜백을 사용하여 요소를 참조하고, observer에 추가 */
  const setRef = useCallback((element: Element | null) => {
    if (element) {
      elementsMap.current.set(element.id, element)
      observerRef.current?.observe(element)
    }
  }, [])

  useEffect(() => {
    // IntersectionObserver 콜백 함수
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = (entry.target as HTMLDivElement).id
        visibilityMap.current.set(id, entry.isIntersecting)

        const visibleEntries = Array.from(visibilityMap.current.entries())
          .filter(([, isVisible]) => isVisible)
          .map(([id]) => id)

        // isIntersecting이 true인 첫 번째 요소의 ID를 activeId로 설정
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0])
        }
      })
    }, options)

    elementsMap.current.forEach((element) => {
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [options])

  return {
    activeId,
    setRef,
    elementsMap,
  }
}
