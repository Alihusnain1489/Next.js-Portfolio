import Link from "next/link"
import { Button } from "./button"
import Nav from "./Nav"  // Changed from { Nav } to Nav
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">Ali Husnain
                <span className="text-emerald-500">.</span>
            </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                  <Button className="bg-gray-800 text-emerald-600 border border-emerald-600 hover:text-white hover:bg-emerald-600">Hire me</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header