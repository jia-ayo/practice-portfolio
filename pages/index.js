import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiTwotoneCalendar,
} from "react-icons/ai";
import Image from "next/image";
import jiaImg from "../public/jiaImg.png";
import nftImg from "../public/nft-mistery-b.png";
import frontImg from "../public/web-design.png";
import backImg from "../public/web-coding.png";
import raskyImg from "../public/rasky.jpg";
import storeImg from "../public/sol-store.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <meta
          name="description"
          content="This is a personal that shows JIA who is a fullstack developer that develop website using nextjs and nodejs as his main tool."
        />
        <meta
          name="keywords"
          content="personal cv site, developer, engineer, Ilori Joshua Ayomide, Ilori Joshua"
        />
        <meta name="author" content="Ilori Joshua" />
        <title>jia-ayo portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-white px-5 md:px-20 lg:px-40 bg-slate-200 dark:bg-slate-800">
        <section className="min-h-screen">
          <nav className="py-3 mb-3 md:py-5 md:mb-5 flex justify-between">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-burtons dark:text-slate-100">
              Developed by JIA
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="/ilori-joshua-resume.pdf"
                  download
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 ml-8 rounded-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-3 text-teal-600 font-medium md:text-6xl ">
              Ilori Joshua
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl dark:text-slate-200">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl lg:text-2xl max-w-xl mx-auto dark:text-slate-100">
              I am a developer that works with web and blockchain technology. I
              would love to work to build/upgrade your idea and make your
              imagination a reality.
            </p>
          </div>
          <div className="text-4xl flex justify-center gap-10 py-2 text-gray-600 dark:text-slate-100">
            <a href="https://github.com/jia-ayo" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/jia-ayo/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://twitter.com/jia_ayo" target="_blank">
              <AiFillTwitterCircle />
            </a>
            <a href="https://calendly.com/jia-ayo/30min" target="_blank">
              <AiTwotoneCalendar />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-200 rounded-full  w-40 h-40 mt-10 overflow-hidden md:w-60 md:h-60 lg:w-80 lg:h-80 pb-0">
            <Image src={jiaImg} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="text-center mt-4">
            <h3 className="text-4xl md:text-5xl py-1 dark:text-slate-100">
              Services I Offer
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-slate-100">
              Since I started my development journey I have worked on a few
              projects In the <span className="text-teal-200">Nft</span> space.
              I have worked remotely for all the projects, I am looking for
              opportunity to work on bigger projects (grow), I love challenges.
              I offer a wide range of service from web development to NFT
              development(full project), Dapp creation and other skillsets.
            </p>
          </div>
          <div className="md:flex justify-center  gap-10">
            <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
              <Image
                className="mx-auto"
                src={nftImg}
                width="100"
                height="100"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                SmartContract development
              </h3>
              <h4 className="py-4 text-teal-600 ">The Tools I Use</h4>
              <p className="text-gray-800 py-1">Rust</p>
              <p className="text-gray-800 py-1">Metaplex</p>
              <p className="text-gray-800 py-1">solidity</p>
            </div>
            <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
              <Image
                className="mx-auto mt-10 mb-2"
                src={frontImg}
                width="100"
                height="100"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Frontend development
              </h3>
              <h4 className="py-4 text-teal-600 ">The Tools I Use</h4>
              <p className="text-gray-800 py-1">Next.js/Reactjs</p>
              <p className="text-gray-800 py-1">tailwind/bootstrap</p>
              <p className="text-gray-800 py-1">css/html/javascript</p>
            </div>
            <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
              <Image
                className="mx-auto"
                src={backImg}
                width="100"
                height="100"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Backend development
              </h3>
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
              <h3 className="text-3xl py-1 md:text-4xl lg:text-5xl dark:text-slate-100">
                Portfolio
              </h3>
            </div>
            <div className="md:flex justify-center  gap-10">
              <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
                <Image
                  className="mx-auto mt-10 mb-2"
                  src={raskyImg}
                  width="100"
                  height="100"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Fullstack development
                </h3>
                <h4 className="py-4 text-teal-600 ">
                  <a href="https://raskyrebels.netlify.app/" target="_blankc">
                    Rasky Rebels
                  </a>
                </h4>
                <p className="text-gray-800 py-1">
                  I worked on the minting site by editing it with typescript
                  with react to creating a lovely one page minting. I Learnt alot
                  on the course of working on this project.
                </p>
              </div>
              <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
                <Image
                  className="mx-auto mt-10"
                  src={storeImg}
                  width="100"
                  height="100"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Fullstack development
                </h3>
                <h4 className="py-4 text-teal-600 ">
                  <a
                    href="https://jia-solana-store.vercel.app/"
                    target="_blank"
                  >
                    Jia store
                  </a>
                </h4>
                <p className="text-gray-800 py-1">
                  This is a site that allows you to sell and buy goods with Solana on
                  the devnet. This was a project that was developed in the
                  build space academy .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pb-2 ">
            <div className="text-center">
              <h3 className="text-3xl py-1 md:text-4xl lg:text-5xl  dark:text-slate-100">
                Experience
              </h3>
            </div>
            <div className="md:flex justify-center gap-10 md:gap-40">
              <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
                <Image
                  className="mx-auto mt-10 rounded-full "
                  src="https://media.licdn.com/dms/image/C4D0BAQGOMVo5-P5IHg/company-logo_200_200/0/1674468940073?e=1685577600&v=beta&t=Rc4h4wUvUbPRV4WLoWV9qZHiXwDcucPqmW_SKAA4Gnc"
                  width="100"
                  height="100"
                  loading="eager"
                />

                <h4 className="py-4 text-teal-600 ">
                  <a
                    href="https://www.linkedin.com/company/wedancefoundation/mycompany/"
                    target="_blank"
                  >
                    Wedance
                  </a>
                </h4>
                <h3 className="text-lg font-medium pt-8 pb-2">Intern</h3>
                <p className="text-gray-800 py-1">full-stack Developer</p>
                <p className="text-gray-800 py-1">01/2023-present</p>
              </div>
              <div className="shadow-lg text-center rounded-xl p-10 my-10 bg-white dark:bg-slate-100 dark:shadow-slate-600/40">
                <Image
                  className="mx-auto mt-10 rounded-full"
                  src="https://media.licdn.com/dms/image/C560BAQHPxq7WpGJW5A/company-logo_200_200/0/1654130363004?e=1685577600&v=beta&t=r2KSgES0X1IzIi_cnTrxoLger9-OAGH3nL9RLsE0weE"
                  width="100"
                  height="100"
                />

                <h4 className="py-4 text-teal-600 ">
                  <a
                    href="https://www.linkedin.com/company/alphabet-lady/"
                    target="_blank"
                  >
                    Alphabet Lady
                  </a>
                </h4>
                <h3 className="text-lg font-medium pt-8 pb-2">Part-Time</h3>
                <p className="text-gray-800 py-1">Smart Contract Developer</p>
                <p className="text-gray-800 py-1">12/2022-present</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
