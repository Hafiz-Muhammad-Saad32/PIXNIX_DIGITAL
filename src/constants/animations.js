// Animation constants - single source of truth for all durations and delays

export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  BASE: 0.3,
  NORMAL: 0.5,
  SLOW: 0.6,
  SLOWER: 0.7,
  SLOWEST: 0.8,
  VERY_SLOW: 1,
}

export const ANIMATION_DELAYS = {
  NONE: 0,
  TINY: 0.05,
  SMALL: 0.1,
  MEDIUM: 0.15,
  LARGE: 0.2,
}

export const STAGGER_DELAYS = {
  TIGHT: 0.05,
  NORMAL: 0.08,
  LOOSE: 0.1,
  RELAXED: 0.12,
}

export const SPRING_CONFIG = {
  STIFF: { type: 'spring', stiffness: 300, damping: 30 },
  NORMAL: { type: 'spring', stiffness: 250, damping: 18 },
  GENTLE: { type: 'spring', stiffness: 150, damping: 15 },
  BOUNCY: { type: 'spring', stiffness: 200, damping: 10 },
}

export const EASING = {
  EASE_OUT: [0.22, 1, 0.36, 1],
  EASE_IN_OUT: 'easeInOut',
  LINEAR: 'linear',
}

// Motion-reduced support helper
export const getReducedMotionSetting = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Return animation config respecting user preferences
export const getAnimationConfig = (config) => {
  const prefersReducedMotion = getReducedMotionSetting()
  if (prefersReducedMotion) {
    return {
      ...config,
      duration: 0.01,
      delay: 0,
      transition: { ...config.transition, duration: 0.01 },
    }
  }
  return config
}
