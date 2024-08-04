import { Button } from '@/components/ui/button'
import heroBg from '@/assets/hero-bg.png'
export default function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative">
        <div className=" container grid grid-cols-1 md:grid-cols-2 mt-32 items-center gap-4 z-10">
          <div className=" flex flex-col text-center md:text-justify">
            <h1 className="text-3xl font-semibold">
              A Simple Bookmark
              <br></br>
              Manager
            </h1>
            <br></br>
            <p className="text-gray-400 text-wrap text-center md:text-justify">
              A clean and simple interface to organize your favorite website.
              <br></br>
              Open a new browser and see your sites load instantly. Try it for free
            </p>
            <br></br>
            <div className="flex gap-5 justify-center md:justify-normal">
              <Button className="bg-blue-500 hover:bg-blue-700 shadow-md shadow-gray-300">Get it on Chrome</Button>
              <Button className="bg-gray-100 hover:bg-gray-300 text-black shadow-md shadow-gray-300">
                Get it on Firefox
              </Button>
            </div>
          </div>
          <div>
            <img src={heroBg} alt="ảnh" className="w-full h-auto" />
          </div>
        </div>
        {/* Rounded Retangle */}
        {/* <div className="hidden h-80 w-5/12 md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute top-1/2 right-0 z-0"></div> */}
      </section>

      {/* Feature section */}
      <section className="mt-32">
        <div className="flex flex-col items-center bg-gray-200 p-8">
          <h1 className="font-semibold text-3xl">Feature</h1>
          <p className="text-justify max-w-5xl mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores tempora saepe cum eligendi culpa quos
            molestiae beatae quia provident laboriosam corporis, assumenda voluptate neque. Illo sequi et dolores iure?
          </p>
        </div>
      </section>
    </div>
  )
}
