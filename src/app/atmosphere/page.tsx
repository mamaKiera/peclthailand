import Image from "next/image";
import bangsean from "@public/bangsean.jpg";
import celebration from "@public/celebration.jpg";
import campus from "@public/campus2.jpg";
import freshmen from "@public/freshmen2.jpg";
import nimitmhai from "@public/nimitmhai.png";
import professors from "@public/professors.jpg";
import seasalt from "@public/seasalt.jpg";
import flower from "@public/flower.jpg";
import seasalt2 from "@public/seasalt2.jpg";
import friedrice from "@public/fried-rice.jpg";
import beach from "@public/bangsean-beach-with-students.jpg";
import studentsCheering from "@public/students-cheering.jpg";
import presentation2 from "@public/presentation2.jpg";
import comment from "@public/commenting.jpg";
import inClass from "@public/in-class.png";
import brain1 from "@public/brain1.jpg";
import brain2 from "@public/brain2.jpg";
import jinpao1 from "@public/jinpao.jpg";
import jinpao2 from "@public/jinpao-2.jpg";
import jinpao3 from "@public/jinpao3.jpg";
import teaching from "@public/teaching.jpg";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.brightdentalstudiobkk.com/"),
//   title: "Bright Dental Studio | Gallery",
//   description: "Bright Dental Studio Gallery",
// };

const Page = () => {
  return (
    <div className="bg-[#FBF4EB]">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-2xl py-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            校园采风
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={bangsean}
              className="max-w-full rounded-lg"
              alt="Bangsean beach"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              来到热带风情的泰国游学
            </figcaption>
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={celebration}
              className=" max-w-full rounded-lg"
              alt="celebration"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              享受 study holiday的一级乐趣
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={campus}
              className="max-w-full rounded-lg"
              alt="Bangsean beach"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              校本部在清迈旁风景优美的Phayao府
            </figcaption>
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={freshmen}
              className=" max-w-full rounded-lg"
              alt="celebration"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              热情而勤学的本科新生
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={nimitmhai}
              className="max-w-full rounded-lg"
              alt="bangkok campus"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              曼谷校区是供硕博士研究生使用的院区
            </figcaption>
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={professors}
              className=" max-w-full rounded-lg"
              alt="professors"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              学识渊博的专业教师和领导们
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={seasalt}
              className="max-w-full rounded-lg"
              alt="seaside hotel"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              快乐的读书学习假期
            </figcaption>
          </figure>
          <div className="grid">
            <figure className="max-w-sm justify-self-center">
              <Image
                src={seasalt2}
                className=" max-w-full rounded-lg"
                alt="professors"
              />
            </figure>
            <figure className="mb-4 max-w-sm justify-self-center">
              <Image
                src={beach}
                className=" max-w-full rounded-lg"
                alt="professors"
              />
            </figure>
          </div>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={flower}
              className=" max-w-full rounded-lg"
              alt="decoration at meeting room"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              花样般的游学课程
            </figcaption>
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={friedrice}
              className=" max-w-full rounded-lg"
              alt="pineapple fried rice"
            />
          </figure>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <figure className="h-auto max-w-full rounded-lg">
            <Image
              src={presentation2}
              className="max-w-full rounded-lg"
              alt="student presenting"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              紧张的期末测验
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg">
            <Image
              src={studentsCheering}
              className=" max-w-full rounded-lg"
              alt="student presenting"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              全力以赴的同学们
            </figcaption>
          </figure>
          <figure className="h-auto max-w-full rounded-lg">
            <Image
              src={comment}
              className=" max-w-full rounded-lg"
              alt="professors commenting on students"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              认真负责的答辩委员
            </figcaption>
          </figure>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={inClass}
              className="max-w-full rounded-lg"
              alt="students in class"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              课堂一隅
            </figcaption>
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image
              src={teaching}
              className=" max-w-full rounded-lg"
              alt="professor teaching"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              大师解惑
            </figcaption>
          </figure>
        </div>
        <h2 className="text-center text-xl font-semibold my-6">特色课程</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image src={brain1} className="max-w-full rounded-lg" alt="" />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              之一： 脑波大数据分析
            </figcaption>
          </figure>

          <figure className="max-w-sm justify-self-center">
            <Image src={brain2} className=" max-w-full rounded-lg" alt="" />
          </figure>
          <figure className="mb-4 max-w-sm justify-self-center">
            <Image src={jinpao1} className=" max-w-full rounded-lg" alt="" />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              之二： AI机器人实习
            </figcaption>
          </figure>
          <div>
            <figure className="mb-2 max-w-sm justify-self-center">
              <Image src={jinpao2} className=" max-w-full rounded-lg" alt="" />
            </figure>
            <figure className="mb-4 max-w-sm justify-self-center">
              <Image src={jinpao3} className=" max-w-full rounded-lg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
