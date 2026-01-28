'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string
  pendingClassName?: string
  to?: string
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    const pathname = usePathname()
    const destination = to || href || ''
    const isActive = pathname === destination

    return (
      <Link
        ref={ref}
        href={destination}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    )
  }
)

NavLink.displayName = 'NavLink'

export { NavLink }
