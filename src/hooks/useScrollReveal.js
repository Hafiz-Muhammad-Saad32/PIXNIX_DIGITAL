import { useCallback, useEffect, useRef, useState } from 'react'

export const useScrollReveal = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return elementRef
}

export const useMouseCursor = () => {
  const curRef = useRef(null)
  const ringRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (curRef.current) {
      curRef.current.style.left = e.clientX + 'px'
      curRef.current.style.top = e.clientY + 'px'
    }

    if (ringRef.current) {
      ringRef.current.style.left = e.clientX + 'px'
      ringRef.current.style.top = e.clientY + 'px'
    }
  }, [])

  const handleMouseEnter = useCallback((isClickable = false) => {
    if (curRef.current) {
      if (isClickable) {
        curRef.current.style.width = '18px'
        curRef.current.style.height = '18px'
        curRef.current.style.background = '#FF6EC4'
      }
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (curRef.current) {
      curRef.current.style.width = '10px'
      curRef.current.style.height = '10px'
      curRef.current.style.background = '#E8007D'
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    const clickableElements = document.querySelectorAll('a, button, .srv, .port-item, .vc, input, textarea')
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', () => handleMouseEnter(true))
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', () => handleMouseEnter(true))
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return { curRef, ringRef }
}

export const useScrollAnimation = () => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return [elementRef, isVisible]
}
