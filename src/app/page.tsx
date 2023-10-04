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
 
 <section className="h-screen mb-10 mx-auto grid grid-cols-3 grid-rows-[85vh_20vh_20vh_20vh] md:grid-cols-5 md:grid-rows-[49v%_20v%_45v%_60%_25%] lg:grid-cols-8 lg:grid-rows-[25vh_66vh_45vh_25vh_25vh] xl:grid-cols-12 xl:grid-row-[25vh_66vh_30vh_25vh_25vh] gap-3">
 <div className="tile gap-2 bg-stone-500 col-start-1 col-end-4 row-start-1 row-end-2 md:col-start-1  md:row-start-1 md:row-end-2 md:col-end-6 md:h-auto lg:w-full lg:col-start-1 lg:col-end-13">
 <div className="col-start-1 col-end.2 px-3 py-5 flex flex-col md:flex-row md:justify-center lg:items-stretch lg:justify-start lg:mt-5">
    <p className="px-2 text-4xl md:w-1/4 md:text-4xl font-bold text-stone-200 lg:px-7 lg:text-[5rem]">Timeless</p>
    <p className="px-2 leading-8 text-7xl md:w-1/4 md:text-6xl font-extrabold text-amber-500 lg:text-[13rem] mt-3">Design</p>
  <div className="mt-2 flex flex-row gap-x-3 text-right justify-center items-start md:flex-row md:justify-end md:items-baseline md:gap-x-3">
  <p className="py-3 lining-3 font-bold text-[.75rem] mt-5 w-6/12 rounded-md font-primary text-stone-400 md:w-4/12 md:text-[1.223rem] lg:text-[1.3333rem] lg:w-6/12"
      dangerouslySetInnerHTML={markdownify(banner.content ?? "")}/>
    <p className="col-start-2 col-end-3 row-start-1 row-end-2 font-phudu px-1 py-1 lg:mt-3 lg:ml-5 text-[.67rem] w-9 bg-slate-900/60 leading-3 shadow-xl rounded-full text-center font-medium font-phudu text-orange-500 md:w-12 md:mr-5 lg:w-24 lg:text-xs">carl sagan</p>
 </div>
    
</div>

<div className=" w-full mt mb-10 flex flex-col items-center justify-center lg:hidden">
      <Image
      src="/images/LogoEZ.png"
      height="250"
      width="250"
      alt="Logo"
      
      className="shadow-2xl bg-stone-800 rounded-xl"
       
      />

  </div>
<div className="mb-3 flex flex-col justify-center items-center">
{banner.button!.enable && (
          <a className="btn btn-primary" href={banner.button!.link}>
            {banner.button!.label}
          </a>
        )}
  </div>
  
</div>
      </section>

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
