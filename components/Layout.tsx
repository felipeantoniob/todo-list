import { AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="content">
      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </div>
  )
}

export default Layout
