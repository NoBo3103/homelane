import Head from 'next/head'
import DesktopNavbar from '../components/Navbar/DesktopNavbar'

export default function Home() {
  return (
  <div className="bg-white h-screen overflow-y-auto">
    <DesktopNavbar />
  </div>
  )
}
