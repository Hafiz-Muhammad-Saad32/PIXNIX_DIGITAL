import { motion } from 'framer-motion'
import clsx from 'clsx'

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  icon = null,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    teal: 'btn-gradient-teal',
    whatsapp: 'btn-whatsapp',
    ghost: 'btn-secondary'
  }

  return (
    <motion.button
      className={clsx(variants[variant], className, 'relative overflow-hidden')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  )
}

export const ButtonLink = ({
  href,
  children,
  className = '',
  variant = 'primary',
  icon = null,
  external = false,
  ...props
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    teal: 'btn-gradient-teal',
    whatsapp: 'btn-whatsapp',
    ghost: 'btn-secondary'
  }

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={clsx(variants[variant], className, 'relative overflow-hidden inline-block')}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.a>
  )
}

export default Button
