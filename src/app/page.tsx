"use client";

import Image from "next/image";

import jinpao1 from "@public/jinpao.jpg";
import classroom from "@public/in-class-2.jpg";
import openCeremony from "@public/open-ceremony-2.jpg";
import celebration from "@public/celebration.jpg";
import presentation from "@public/presentation.jpg";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peclthailand.com/"),
  title: "Pacific Institute of Management Science International College| Home",
  description: "PIMS International College Home Page",
};

export default function Page() {
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#bf9b30] to-[#ffdc73] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-bold  text-gray-900 sm:text-6xl">
                    太平洋管理科学学院
                  </h1>
                  <h2 className="text-3xl font-semibold  text-gray-800 sm:text-4xl">
                    Pacific Institute of Management Science
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    太平洋管理科学学院与繁荣教育门有限公司(PECL: Prosper Edugate
                    Co., Ltd.)合作，为您提供在泰国的高等教育最全面的学习体验
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    {/* <a
                      href="#"
                      className="rounded-md bg-pims-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pims-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      预约报名
                    </a>
                    <a
                      href="/pims"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      认识太平洋管理科学学院 <span aria-hidden="true">→</span>
                    </a> */}
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={jinpao1}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={classroom}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={openCeremony}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src={celebration}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={presentation}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-7xl px-6 pb-48 lg:px-8">
        <h1 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          PIMS/PECL太平洋管理科学学院的竞争优势:
        </h1>
        <p className="mt-6 text-xl leading-8">
          Competitive Advantages of PIMS and PECL:
        </p>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16"
        >
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                优秀的充满教学热忱与爱心的师资团队，全程照顾学生，从上课到论文科研的指导到文章的发表，
              </strong>
              <p className="text-gray-700">
                因为我们的老师是T C I., S C O P U S, S S C
                I等多本期刊的编辑和审稿者。
              </p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                教学时间安排灵活，有全日班，寒暑假集中授课斑和特别班，特别班为只要凑足五个以上的博士班学生或十个以上的硕士班学生，
              </strong>
              <p className="text-gray-700">
                任何时刻有空来泰国即安排老师授课。
              </p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                我们的老师都以可使用全英文或全中文授课。不是他校使用英文或泰语授课，由助教来翻译，不但浪费时间，
              </strong>
              <p className="text-gray-700">而且翻译的正确度及完整度皆不佳。</p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                在泰国同样有能力进行全英文或全中文授课的学校，以这里学费最便宜，
              </strong>
              <p className="text-gray-700">性价比最高，请同学自行比较。</p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                因材施教，有教无类。达到泰国高教部要求即毕业，不另设门坎。硕士独立研究报告要求合理，博士在T
                C I二级发表，不对学生做过份要求(如一定要S C O P U S或T C
                I第一级的期刊发表)。而如有学生想在S S C I期刊发表，
              </strong>
              <p className="text-gray-700">
                我们的老师都有能力辅导学生直接投稿，不需再花昂贵的投稿仲
                介费用。
              </p>
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-pecl-gold"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                毕业时间快速，只要努力学习，二年学制的硕士班可以在一年半三个学期的时间完成。三年学程的博士班可以在两年半五个学期完成。
              </strong>
              <p className="text-gray-700">
                本校另设有特制的硕博连读班，可在三年六个学期毕业。
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
