import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Root() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#07111F" }}>
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
