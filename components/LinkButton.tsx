'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

type LinkButtonProps = LinkProps & { children: React.ReactNode }

export default function LinkButton({ children, ...props }: LinkButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const link = linkRef.current

    let timeoutId: ReturnType<typeof setTimeout>

    function createRipple(e: MouseEvent): void {
      const rect = link!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const ripple = document.createElement('span')
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      link!.appendChild(ripple)
      timeoutId = setTimeout(() => ripple.remove(), 600)
    }

    link?.addEventListener('mouseenter', createRipple)
    return () => {
      link?.removeEventListener('mouseenter', createRipple)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <Link ref={linkRef} className="button" {...props}>
      {children}
    </Link>
  )
}
