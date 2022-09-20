import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import myself from "../public/myself.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typed from "typed.js";

export default function Home() {
  const [text, setText] = useState("Myself");
  const [text2, setText2] = useState("Bibek.");

  useEffect(() => {
    var typed = new Typed("#movingtext", {
      strings: [
        "HTML/CSS",
        "JavaScript",
        "ReactJS",
        "NextJs",
        "Git/Github",
        "Java",
      ],
      typeSpeed: 150,
      loop: true,
      showCursor: false,
      backSpeed: 150,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="pt-20 bg-[#020310] text-white ">
        <section className="flex justify-evenly items-center p-24">
          <figure className="w-1/3 p-1 border-t-yellow-500 border-t-4 rounded-t-full">
            <Image className="rounded-full" src={myself} />
          </figure>
          <article className="text-8xl flex flex-col gap-10 items-start tracking-wider font-bold">
            <a className="text-yellow-500" id="greet">Hey Folks,</a>

            <Link href="/projects">
              <a
                className="transition-all duration-300 hover:pl-12"
                id="toprojects"
                onMouseOver={() => setText("Projects")}
                onMouseLeave={() => setText("Myself")}
              >
                {text}
              </a>
            </Link>
            <Link href="/blogs">
              <a
                className="text-[#3AB4F2] transition-all duration-300 hover:pl-16"
                id="toblog"
                onMouseOver={() => setText2("Blogs.")}
                onMouseLeave={() => setText2("Bibek.")}
              >
                {text2}
              </a>
            </Link>
            <p className="text-4xl bg-orange-600 px-4 py-2 inline-block">
              I use <span id="movingtext"></span>
            </p>
          </article>
        </section>

        <section id="about" className="p-28">
          <h1 className="text-7xl tracking-widest font-semibold ">About</h1>
        </section>
      </main>
    </>
  );
}
