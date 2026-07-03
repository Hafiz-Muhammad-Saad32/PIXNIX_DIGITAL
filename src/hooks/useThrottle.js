import { useCallback, useRef } from 'react'

// useThrottle - Custom hook for throttling event handlers

export const useThrottle = (callback, delay = 16) => {
  const lastRun = useRef(Date.now())

  return useCallback((...args) => {
    const now = Date.now()
    if (now - lastRun.current >= delay) {
      lastRun.current = now
      callback(...args)
    }
  }, [callback, delay])
}
