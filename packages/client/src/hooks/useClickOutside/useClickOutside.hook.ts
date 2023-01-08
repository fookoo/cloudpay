import React, { useEffect } from 'react'

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: (...args: unknown[]) => unknown) => {
  const handleClick = (e: MouseEvent) => {
    if (e.target && ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
