import { ReactElement, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "./navbar"
import { AuthContext } from '../context/authProvider'

interface LayoutProps {
  children: ReactElement
}
const noNav = ['/login', '/signup']
export default function Layout({ children }: LayoutProps) {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  
/*   useEffect(() => {
    if (!noNav.includes(router.asPath) && !authContext?.auth?.user) {
      router.push('/login')
    }
    if (noNav.includes(router.asPath) && authContext?.auth?.user) {
      router.push('/dashboard')
    }
  }, []) */

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#EEEEEE]">
      {!noNav.includes(router.asPath) && <Navbar />}
      {/* {noNav.includes(router.asPath) ? children : (authContext?.auth?.user ? children : null)} */}
      {children}
    </div>
  )
}
