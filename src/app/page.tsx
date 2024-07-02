/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img
                  src="/dax.jpg"
                  className="w-full rounded-full"
                  alt="main image"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-black px-2 text-white">Custom</span> Phone
                Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                {" "}
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                DaxCase allows you to protect your memories, not just your phone
                case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrikt-0 text-green-600" />
                    Hight quality, durable material
                  </li>

                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrikt-0 text-green-600" />
                    Modern iphone models supported
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="your image"
                className="absolute w-40 lg:w-52  left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="line"
              />
              <Phone className="w-64" imgSrc="/dax.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}
      {/* <section className="bg-slate-100 grainy-dark py-24">

        <div className="pt-16">
          <Reviews />
        </div>
      </section> */}
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                Upload your photo and get{" "}
                <span className="relative px-2 bg-black text-white">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                alt="arrow"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/dax.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  alt="horse"
                />
              </div>

              <Phone className="w-60" imgSrc="/dax.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
