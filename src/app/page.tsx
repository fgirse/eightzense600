import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Image from 'next/image';
import Gallery from'../components/Gallery';
import Pattern from '../../public/images/Pattern02.svg'

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
 
 <main className=" h-screen bg-[url('/images/grid.svg')]  bg-repeat  bg-[#3c3f40] mb-10 mx-auto grid grid-cols-3 grid-rows-[85vh_20vh_20vh_50vh] md:grid-cols-5 md:grid-rows-[89vh_20vh_45vh_60vh_50vh] lg:grid-cols-8 lg:grid-rows-[25vh_66vh_45vh_25vh_50vh] xl:grid-cols-12 xl:grid-row-[25vh_66vh_30vh_25vh_25vh] gap-3">
 <section className=" tile gap-2  col-start-1 col-end-4 row-start-1 row-end-2 md:col-start-1 md:col-end-4  md:row-start-1 md:row-end-2  md:h-auto lg:w-full lg:col-start-1 lg:col-end-13">
      <div className=" grid gap-y-6 grid-cols-[33vw_33vw_33vw] grid-rows-[27vh_33vh_33vh] md:grid-cols-[20vw_20vw_20vw_20vw_20vw] md:grid-rows-[35vw_38vh_33vh]">
          <div className="p-3 col-start-1 col-end-4 row-start-1 row-end-2 md: bg-gradient-to-b from-blue-600/25 to-[#3c3f40] md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2">
          <p className=" py-2 px-2 text-3xl  md:mb-10 md:w-8/12 md:py-6 md:text-[5rem] leading-9 font-bold text-stone-100 lg:px-7 lg:mt-7 lg:leading-77 lg:text-[5rem]">Timeless</p>
          <p className="px-2 leading-3 md:leading-10 text-6xl  md:text-[9rem] font-extrabold text-[#d8cdab] lg:text-[13rem] mt-3">Design</p>
          </div>


          <div className="col-start-3 col-end-4 row-start-1 row-end-2  py-3 leading-3 font-bold text-[.75rem] mt-5 rounded-md font-primary text-stone-400  text-right md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2 md:ml-24 w-full md:text-[1.523rem] md:leading-5 lg:text-[1.3333rem] md:mr-0 lg:">
          <p className="w-8/12 lg:mt-12"
        dangerouslySetInnerHTML={markdownify(banner.content ?? "")}/>
       <p className=" font-phudu px-1 py-1 lg:mt-3 lg:ml-5 text-[.67rem] w-9 bg-slate-900/60 leading-3 shadow-xl shadow-gray-500 rounded-full text-center font-medium font-phudu text-orange-500 md:w-12 md:mr-5 lg:w-24 lg:text-xs">carl sagan</p>
       </div>


      <div className="col-start-2 col-end-3 row-start-2 row-end-3 md:w-full mx-auto justify-b md:items-center lg:bg-red-500 lg:col-start-7  lg:col-end-8 lg:row-start-2 lg:row-end-3 ">
        <div className="w-[57vw]  md:h-full flex flex-col items-center md:justify-center md:ml-16">
            <Image
              src="/images/LogoEZ.png"
              height="350"
              width="350" 
             alt="Logo"
              className="px-2 py-5 trans rounded-2xl"
       />
        </div>     
      </div>

<div className=" col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col  items-center justify-center flex-wrap text-white">
      <h2 className=" text-amber-400 text-3xl leading-tight"> 8-Zense SI</h2>
      <h2 className="text-white text-sm leading-none"> Neuve Village - France</h2>
      <h2 className="text-white text-sm"> phone: +33 888777666</h2>
      <h2 className="text-white text-sm">(mobile: +33 123456</h2>
      <h2 className="text-white text-sm"> email: 8zense3@gmx.fr</h2>
      <h2 className="text-white text-sm"> web: https://8zense.com</h2>
      </div>

    <div className=" hidden md:col-start-1 md:col-end-6 md:row-start-2 md:row-end-4 w-full h-60   " >
      <Image src={Pattern} alt="pattern" width="300" height="270" className="border-8 border-slate-500 shadow-xl shadow-gray-500" />
     </div>

      <div className="mt-5 col-start- col-end-3 row-start-3 row-end-4 mx-auto md:col-start-1 md:col-end-2 md:row-start-3 md-row-end-4 md:text-[3rem] " >
{banner.button!.enable && (
          <a className="btn btn-primary text-sm md:text-2xl" href={banner.button!.link}>
            {banner.button!.label}
          </a>
        )}
  </div>
  
  </div>
</section>
</main>

    {/* ==============================================  ENDE GRID A ====================================*/}

      <Gallery />

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
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
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
