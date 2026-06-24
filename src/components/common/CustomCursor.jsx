import { useEffect, useRef, useState, useCallback } from 'react'

// Throttle utility - optimized event handling
const throttle = (callback, delay) => {
  let lastRun = 0
  return (e) => {
    const now = Date.now()
    if (now - lastRun >= delay) {
      lastRun = now
      callback(e)
    }
  }
}

const CustomCursor = () => {
  const curRef = useRef(null)
  const ringRef = useRef(null)
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia) {
      try {
        const hasMouse = window.matchMedia('(hover: hover)').matches || window.matchMedia('(pointer: fine)').matches
        return !hasMouse
      } catch (e) {
        // fallback to touch detection
      }
    }
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  })

  // Memoized hover handlers
  const handleMouseEnter = useCallback(() => {
    if (curRef.current) {
      curRef.current.style.width = '18px'
      curRef.current.style.height = '18px'
      curRef.current.style.background = '#FF6EC4'
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
    if (isTouchDevice) {
      return undefined
    }

    // Throttled mousemove handler (16ms = ~60fps)
    const handleMouseMove = throttle((e) => {
      if (curRef.current) {
        curRef.current.style.left = e.clientX + 'px'
        curRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }, 16) // Throttle to match 60fps

    // Hide native cursor
    const prevCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    // Use event delegation instead of MutationObserver
    const handleDelegated = (e) => {
      const element = e.target
      if (
        element.tagName === 'A' ||
        element.tagName === 'BUTTON' ||
        element.tagName === 'INPUT' ||
        element.tagName === 'TEXTAREA' ||
        element.classList.contains('interactive') ||
        element.classList.contains('card-base') ||
        element.classList.contains('srv') ||
        element.classList.contains('port-item')
      ) {
        handleMouseEnter()
      }
    }

    const handleDelegatedLeave = () => {
      handleMouseLeave()
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleDelegated, true)
    document.addEventListener('mouseleave', handleDelegatedLeave, true)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleDelegated, true)
      document.removeEventListener('mouseleave', handleDelegatedLeave, true)
      document.body.style.cursor = prevCursor || ''
    }
  }, [isTouchDevice, handleMouseEnter, handleMouseLeave])

  if (isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={curRef}
        className="fixed w-[10px] h-[10px] bg-primary-pink2 rounded-full pointer-events-none z-[9999] mix-screen"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, background 0.2s'
        }}
      />

      {/* Cursor ring */}
      <div
        ref={ringRef}
        className="fixed w-[38px] h-[38px] border-[1.5px] border-primary-pink/50 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.1s ease, top 0.1s ease'
        }}
      />
    </>
  )
}

export default CustomCursor
