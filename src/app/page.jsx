import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
   <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
         {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /><span className="text-emerald-500">Ali Husnain</span></h1>
            <p className="mx-w-[500px] mb-9 text-white/80">A Developer skilled in Next.js, Modern React, Javascript and <br /> Tailwind CSS, with experience building scalable and responsive web applications.</p>
            {/*btn and social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 bg-gray-800 text-emerald-500 border-emerald-500 hover:bg-emerald-700 hover:text-white"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-emerald-500 rounded-full flex justify-center items-center text-emerald-500 hover:bg-emerald-600 hover:text-white hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
   </section>
)}
