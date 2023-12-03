import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/uutils.ts'0/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Image from 'next/image';
import Gallery from'../components/Gallery';
import Pattern from '../../public/images/Pattern02.svg'
import Hero from "/images/sideboardobg.png"

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
             <SeoMeta />
      {/* ============================================== GRID A ====================================*/}
 
 <main className=" h-screen w-full  bg-[url('/images/grid.svg')] bg-repeat bg-[#3c3f40] mb-10 grid grid-cols-[1fr_1fr_1fr] grid-rows-[85vh_20vh_20vh_50vh] md:grid-cols-5 md:grid-rows-[89vh_20vh_45vh_60vh_50vh] lg:grid-cols-8 lg:grid-rows-[25vh_60vh_45vh_25vh_50vh] xl:grid-cols-12 xl:grid-row-[25vh_66vh_30vh_25vh_25vh] gap-3">
 <section className="col-start-1 col-end-4 row-start-1 row-end-2 md:col-start-1 md:col-end-4  md:row-start-1 md:row-end-2  md:h-auto lg:w-full lg:col-start-1 lg:col-end-13">
      <div className="-mt-36  bg-[url('/images/sideboardobg.png')] bg-[length:66% 66%] bg-no-repeat bg-bottom grid gap-y-1 grid-cols-[1fr_1fr_1fr] grid-rows-[34vh_18vh_4vh_10vh] md:grid-cols-[26vw_20vw_20vw_20vw_20vw] md:grid-rows-[24vw_38vh_33vh_20vh]">
          <div className="p-3 col-start-1 col-end-4 row-start-1 row-end-2  md:bg-gradient-to-b from-blue-300/30 to blue-600 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2">
          <p className=" py-2 px-2 text-5xl uppercase  md:mb-10 md:w-8/12 md:py-6 md:text-[5rem] leading-9 font-bold text-stone-100 lg:px-7 lg:mt-7 lg:leading-7 lg:text-[5rem]">Timeless</p>
          <p className="px-2 uppercase leading-6 text-7xl  md:text-[9rem] font-extrabold text-[#d8cdab] lg:text-[13rem] mt-3">Design</p>
          </div>

          <div className="relative z-10 col-start-2 col-end-4 row-start-1 row-end-2 py-28 leading-3 font-bold text-[.95rem] mt-12 rounded-md w-11/12  font-primary text-stone-400  text-right md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2 mr:24 md:text-[1.523rem] md:leading-5 lg:text">
                  <p className="px-1 py-2 black bg-black/30 border-r-8  border-amber-600 text-stone-300 lg:mt-12"
                          dangerouslySetInnerHTML={markdownify(banner.content ?? "")}/>
                   <p className="py-1 relative -top-7 mt-2 font-phudu lg:mt-3 lg:ml-5 text-[.59rem] w-9 h-9 bg-orange-500 leading-3 shadow-xl shadow-gray-500 rounded-full text-center font-medium font-phudu text-white md:w-12 lg:w-24 lg:text-xs">carl sagan</p>
           </div>

     
        

      <div className=" flex justify-center col-start-2 col-end-3 row-start-4 row-end-5 md:col-start-2 md:col-end-4 md:row-start-4 md-row-end-5 md:text-[3rem] " >
{banner.button!.enable && (
          <a className="mt-5 bg-amber-500 rounded-xl btn btn-primary text-center w-36 h-10 text-1xl md:text-2xl" href={banner.button!.link}>
            {banner.button!.label}
          </a>
        )}
  </div>
  
       <div className=" col-start-2 col-span-1 row-start-5  row-span-1 ">
           <Image
              src="/images/LogoEZ.png"

              height="280"
              width="280" 
              alt="Logo"
              className=" rounded-xl shadow-xl shadow-white/50 col-start-2 cols-end-3 row-start-4 row-end-5">

              </Image>
              </div>

    
    </div>
</section>
</main>

    {/* ==============================================  ENDE GRID A ====================================*/}
<section className="">
<Gallery />
</section>
     

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                  className=""
                  
                />
              </div>
              <div
                className={` md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h1
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;