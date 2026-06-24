// useThrottle - Custom hook for throttling event handlers

export const useThrottle = (callback, delay = 16) => {
  const lastRun = React.useRef(Date.now())

  return React.useCallback((...args) => {
    const now = Date.now()
    if (now - lastRun.current >= delay) {
      lastRun.current = now
      callback(...args)
    }
  }, [callback, delay])
}
