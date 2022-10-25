import Spline from "@splinetool/react-spline";
import { useState } from "react";
import {IoMenu, IoCodeWorking, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';
import Momp from './imagesdesk/momp.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from "./data";



function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex w-screen min-h-screen flex-col items-center
     justify-center relative bg-primary pb-20">
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2x1 flex items-center">
           <p className="text-lg text-slate-200 font-medium">Ashley Tucker</p>

           <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" 
               className="text-base text-textBase font-medium hover:text-slate-100 
               cursor-pointer duration-100 ease-in-out"
            >
               Home
            </a>

            <a 
              href="#about" 
              className="text-base text-textBase font-medium hover:text-slate-100 
              cursor-pointer duration-100 ease-in-out"
            >

              About
            </a>

            <a
              href="#project"
              className="text-base text-textBase font-medium hover:text-slate-100 
              cursor-pointer duration-100 ease-in-out"
            >

             Project
            </a>

            <a 
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-100 
              cursor-pointer duration-100 ease-in-out"
            >

              Contact
            </a>

            <a 
              href="#" 
              className="ml: auto text-textBase font-medium hover:text-slate-100 
              cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-grey-100 duration-100 ease-in-out"
            >

              Download
            </a>
          </div>  

          <div className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2x1 text-textBase"/>
          </div>

          {isActive && (
            <div className="p-4 w-275 bg-navbar rounded-lg fixed top-24
              right-16 flex flex-col items-center justify-evenly gap-6 ">
              
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 
                cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >

                Home
               
              </a>

              <a 
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 
                cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >

                About
              </a>

              <a
                href="#project" 
                className="text-base text-textBase font-medium hover:text-slate-100 
                first-letter:  cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >

                Project
              </a>

              <a
                href="#contact" 
                className="text-base text-textBase font-medium hover:text-slate-100 
                cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >

                Contact
              </a>

              <a 
                href="#"
                className=" text-textBase font-medium hover:text-slate-100 
                cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-grey-100 duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >

                Download
              </a>
            </div>
         )}
        </div>
      </nav>   

      <div className="relative" id="home">
       <Spline scene="https://prod.spline.design/h5Reg5EW-55DYYzd/scene.splinecode" />

       <div className="absolute bottom- w-full justify-center items-center flex">
         <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
           <p className="text-textBase">Press and drag to orbit</p>
         </div>
       </div>
      </div>
      <main className="w-[80%] mt-5">
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
          id="about">
             <div className="w-full h-420 flex items-center justify-center">
               <div className="w-275 h-340 bg-pink-800 rounded-md relative">
                <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={Momp} alt=""/>
               </div>
             </div>

             <div className="w-full h-420 flex flex-col items-center justify-center">
               <p className="text-lg text-textBase text-center">
                  Creative Jr.Web Developer seeking an opportunity to extend my 
                  web development skills and knowledge.
                  alsdhfajkldhfajsdhfalksjdh
                  ajksdhfausefhalkjsdfnaklssjdfghsdkjfghsdfgsdfg
                  sdfgsdfgsdfgsdfgdsfgsdfgsdfgsdfgsdfgsdfgsdfgs
                  sdfgsdfgsldfgsdlkfghskldfjghskldfgldfgsdf
                  sfgsdfgsjldfgjsdklfjgslkdfjgslkdfgjsdkfjgsldkfjgsd
                  sdfgskdjfghlkdfhgsdfkjghsdkfjghslkdfjghslkdfghsldjfg
                  sdkjfghskjdfghkjdghskldjfghsdkfghskldfghskdjfgldf
                  urtyiurhiu vrhsuhg shfgashaurtitreadsnklvyfaouropjra
               </p>
               <button class="w-full md:w-auto relative
                mt-6 inline-flex items-center justify-center 
                p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium
                text-gray-900 rounded-lg group bg-gradient-to-br
                from-green-400 to-blue-600 group-hover:from-green-400
                group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                  <span class="w-full md:w-auto relative px-5 py-2.5 
                  transition-all ease-in duration-75 bg-white
                  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Download
                  </span>
               </button>
             </div>
          </section>

          <section className="w-full flex items-center justify-center">
           <VerticalTimeline> 
             {Experience && 
                Experience.map((n) => (
                <VerticalTimelineElement
                   key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ 
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  date={n.date}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={n.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">
                    {n.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                   {n.location}
                  </h4>
                  <p>
                   {n.description}
                  </p>
                </VerticalTimelineElement> 
               ))}
           </VerticalTimeline>
          </section>


          <section className="flex flex-wrap items-center justify-evenly my-24 
           gap-4" id="project">
            {Projects && Projects.map(n => (
                <div  key={n.id} className="border border-zinc-800 rounded-md p-2 min-w-
                [275px] md:max-w-[275px] hover:border-zinc-600 duration-100 
                ease-in-out">
                   <p className="text-md text-textBase font-medium uppercase">
                     {n.name.Length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                     <img src={n.imageSrc}
                      className="w-full h-full object-cover rounded-md my-4" 
                      alt=""
                     />
                   </p>
                   <div className=" flex flex-1 items-center justify-between">
                     <p className="text-lg text-gray-300">Technologies
                       <span className="block text-sm text-gray-500">
                          {n.techs}
                       </span>
                     </p>
   
                     <a href={n.github}>
                       <div>
                         <IoLogoGithub className="text-textBase text-3xl cursor-pointer" 
                         />
                       </div>
                     </a>
                   </div>
               </div>
            ))}
          </section>

          <section id="contact" className="flex flex-col items-center justify-center
            w-full my-24">
               <p className="text-2xl text-gray-400 capitalize">
                    Follow me on
               </p>
               <div className="flex items-center justify-center w-full my-4 flex-wrap
                 gap-4">
                 {
                   SocialLinks && SocialLinks.map(n => (

                    <a key={n.id} href="#" className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 
                    rounded-2xl hover:border-zinc-600 duration-100 ease-in-out
                    cursor-pointer flex items-center justify-center gap-3"
                   >
 
                    {n.iconSrc}
                     <p className="text-lg text-textBase">{n.name}</p>
                   </a>


                   ))
                 }

                 </div>
          </section>
      </main>
    </div> 
  
  );
}

export default App;
