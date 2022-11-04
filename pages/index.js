import Head from 'next/head';
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/image";
import jiaImg from "../public/jiaImg.png";
import nftImg from "../public/nft-mistery-b.png";
import frontImg from "../public/web-design.png";
import backImg from "../public/web-coding.png";
import raskyImg from "../public/rasky.jpg";
import storeImg from "../public/sol-store.png";
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode]= useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>jia-ayo portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
      <section className="min-h-screen">
        <nav className="py-10 mb-10 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-slate-100">Developed by JIA</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill 
              onClick={()=> setDarkMode(!darkMode)} 
              className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 ml-8 rounded-md">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10"> 
          <h2 className="text-5xl py-3 text-teal-600 font-medium md:text-6xl ">Ilori Joshua</h2>
          <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl dark:text-slate-200">Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl lg:text-2xl max-w-xl mx-auto dark:text-slate-100">
          I am a developer that works with web and blockchain technology. 
          I would love to work to build/upgrade your idea and make your imagination a reality.
          </p>
        </div>
        <div className="text-4xl flex justify-center gap-10 py-2 text-gray-600 dark:text-slate-100">
          <AiFillGithub/>
          <AiFillLinkedin/>
          <AiFillTwitterCircle/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-200 rounded-full  w-40 h-40 mt-10 overflow-hidden lg:w-80 lg:h-80 ">
          <Image src={jiaImg} layout="fill" objectFit="cover"/>
        </div>
      </section>
      
      <section className="pt-4">
        <div className="text-center">
          <h3 className="text-5xl py-1 dark:text-slate-100">Service i offer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-100">
            Since i started my development journey I have worked with a few projects
            In the <span className="text-teal-200">Nft</span> space. 
            I worked remotely for all the projects, I am looking for opportunity to work on bigger projects (grow). I love challenges
          </p>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-100">
          Since I started my development journey I have worked on a few projects In the NFT space. 
          I have worked remotely for all the projects, I am looking for opportunity to work on bigger projects (grow),
           I love challenges.
          I offer a wide range of service from web development to NFT development(full project), 
          Dapp creation and other skillsets.
          </p>
        </div>
        <div className="md:flex gap-10">
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100">
             <Image className="mx-auto" src={nftImg} width="100" height="100"/>
             <h3 className="text-lg font-medium pt-8 pb-2">SmartContract development</h3>
             <h4 className="py-4 text-teal-600 ">The Tools I Use</h4>
             <p className="text-gray-800 py-1">Rust</p>
             <p className="text-gray-800 py-1">Metaplex</p>
             <p className="text-gray-800 py-1">solidity</p>

          </div>
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100">
             <Image className="mx-auto mt-10 mb-2" src={frontImg} width="100" height="100"/>
             <h3 className="text-lg font-medium pt-8 pb-2">Frontend development</h3>
             <h4 className="py-4 text-teal-600 ">The Tools I Use</h4>
             <p className="text-gray-800 py-1">Next.js/Reactjs</p>
             <p className="text-gray-800 py-1">tailwind/bootstrap</p>
             <p className="text-gray-800 py-1">css/html/javascript</p>
          </div>
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100">
             <Image className="mx-auto" src={backImg} width="100" height="100"/>
             <h3 className="text-lg font-medium pt-8 pb-2">Backend development</h3>
             <h4 className="py-4 text-teal-600 ">The Tools I Use </h4>
             <p className="text-gray-800 py-1">Node.js</p>
             <p className="text-gray-800 py-1">Express</p>
             <p className="text-gray-800 py-1">mongodb</p>

          </div>
        </div>
        
      </section>
      <section>
        <div className="pb-2">
          <div className="text-center">
            <h3 className="text-3xl py-1 md:text-4xl lg:text-5xl dark:text-slate-100">Portfolio</h3>
          </div>
          <div className="md:flex gap-10">
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100 dark:shadow-slate-600/40">
             <Image className="mx-auto mt-10 mb-2" src={raskyImg} width="100" height="100"/>
             <h3 className="text-lg font-medium pt-8 pb-2">Fullstack development</h3>
             <h4 className="py-4 text-teal-600 ">Rasky Rebels</h4>
             <p className="text-gray-800 py-1">
             I worked on the minting site by editing it with typescript 
             with react to creating a lovely one page minting. 
             Learnt alot on the course of workking with this project.
             </p>
          </div>
          <div className="shadow-lg text-center rounded-xl p-10 my-10 dark:bg-slate-100">
             <Image className="mx-auto mt-10" src={storeImg} width="100" height="100"/>
             <h3 className="text-lg font-medium pt-8 pb-2">Fullstack development</h3>
             <h4 className="py-4 text-teal-600 ">Jia store</h4>
             <p className="text-gray-800 py-1">
             This is a site that allows you to sell and buy with 
             Solana on the devnet . this was a project 
             that was developed in the build space academy .
             </p>

          </div>
          </div>
        </div>

      </section>

      </main>
    </div>
  )
}


