import Image from "next/image";
import chenQiuSheng from "@public/chen-qiu-sheng.jpg";
import kieranna from "@public/kieranna.jpg";
import chenShuZhong from "@public/chen-shu-zhong.jpg";
import meng from "@public/meng.jpg";
import pimspecl from "@public/pims-pecl.jpg";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const people = [
  {
    name: "陈秋声博士",
    role: "国际学院荣誉院长（国际事务领导）",
    imageUrl: chenQiuSheng,
    bio: "陈秋声博士副教授在美国佐治亚州大学獲得工商管理碩士学位，之后到加州的美国国际大学追隨战略管理之父伊格安索夫教授学習並獲得工商管理博士学位， 所以他的教学与研究領域著重於战略管理相關的主題如：国际商务， 金融，组织行為，创新，教育，与管理等。他參加的培訓有芬兰赫尔辛基工业大学中階管理課程，美国宾州大学华顿商学院高阶管理课程，泰国证券管理委员会上市公司董事培訓资格认证等。除了在太平洋管理科学学院任职外，同時也是泰国朱拉隆功大学科技创新创业哲学博士課程和文化管理艺术学碩士課程与国际商务管理学硕士课程教师，咨询委員，硕博论文导师与答辩审委，以及泰国皇室吉拉达皇宮科技学院，东方大学，皇太后大学等客座教授。他的經歷橫跨產学兩界，泰国与国际学术期刊编辑委員及审稿委员，国际学术研讨会主席，泰国教育部国际学校中文课程审批委员，曾任：大学校董及国际学院院長，泰国数家股票上市公司总裁及董事並成功地带领兩家公司股票上市，泰工商总会理事兼副主席，等等",
  },
  {
    name: "Miss Kieranna Chen ",
    role: "国际学院执行长(校 内事务领导）",
    imageUrl: kieranna,
    bio: "太平洋管理科学学院国际部系由Prosper Edugate 繁荣教育门(PECL教育集团)进行教学服务管理。PECL教育集团由年轻的企业家Kieranna Chen所领导，她是泰国朱拉隆功大学工業工程系毕业，并在朱拉Sasin取得MBA学位。在她的领导下，太平洋管理科学学院将为学子们提供最优质的教学管理服务",
  },
  {
    name: "陈树中博士",
    role: "国际学院院长 ",
    imageUrl: chenShuZhong,
    bio: "陈树中博士是个笃实的实业家与学者，他专长于高等数学与知识管理。他在台湾逢甲大学取得数学系理学士学位，再赴成功大学取得数学硕士学位，然后在清华大学读毕工业工程与管理博士班课程，随后来到泰国经营数字计算机企业，并在萱素那达大学取得工商管理博士学位",
  },
  {
    name: "孟昭栋博士",
    role: "国际学院学务长",
    imageUrl: meng,
    bio: "孟昭栋博士是一位热好大自然与创新启发的学者，他毕业于台湾政治大学一MBA硕士班，并在实践大学创新研究所取得创新管理博士。他的专长在创新管理与创业实践。他对于学生心灵与生活的管理也独具一格，因此由他担任工作繁重的学生事务管理工作，相信会使所有在异乡求学的中国学子们有宾至如归的感觉",
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              管理部门
            </h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 rounded-2xl bg-[#e5f2f2] gap-x-16 gap-y-8 p-8">
            太平洋管理科学学院国际部由繁荣教育门主办，繁荣教育门象征着通过这个平台引领你走向成功之路，由泰籍华裔学者陈秋声博士创立，目的是促进泰中两国高等教育的交流与合作，为中国培养高等教育人才。
            繁荣教育门的教育团队包括：核心管理人员、学校行政人员、及学术咨询委员。核心管理人员是繁荣教育门的创始人，主要是由陈秋声教授领导的一群热心教育的人士。学校行政人员负责项目的具体执行，包括国际部执行长、院长、学务长及其他常任人员等。学术咨询委员由繁荣教育门邀请的具有国际学术声望的学者组成，他们多数是学术期刊IEEE、SSCI、SCI、EI的编辑或审查人，为学院提供教学与研究的相关信息，作为办学的参考。
            繁荣教育门的成员拥有丰富的泰国本土经验，因此能提供高质量的教学给来此学习的学生们。过去，繁荣教育门成员曾协助朱拉隆功大学、玛希隆大学、国王科技大学、清迈大学及宋卡王子大学举办国际学术研讨会，这些会议均被学术资料库EI与SCOPUS收录。繁荣教育门还帮助学校成立学术期刊，并在泰国高等教育科研的核心期刊资料库TCI中被收录。此外，还协助泰国农业大学设立研究中心，以及三所私立大学开展中国学生的国际学院项目。
            在陈秋声博士的领导下，繁荣教育门将他们多年累积的经验贡献给太平洋管理科学学院国际部，相信能为本学院的中国留学生提供最优质的教育和学习服务。
          </p>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-1 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
          >
            {people.map((person) => (
              <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {person.role}
                  </p>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* second part */}
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-pims-green">
                  International College Academic Advisory Committee
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  国际学院学术咨询委员会
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  太平洋学院邀请海内外知名学者担任本校的咨询委员，以确保本学院的教学与研究能够与世界一流学府同步。
                  咨询委员名单如下:
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={pimspecl}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      1
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof Minder Chen
                      </strong>
                      <p>美国加州大学Channel Island分校信息管理系教授</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      2
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Ellis Chang
                      </strong>
                      <p>美国加州大学柏克莱分校计算机工程博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      3
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Maria Lee
                      </strong>
                      <p>计算机与资讯工程博士，澳洲西悉尼大学教授</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      4
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof.Tsung-Te Tsai
                      </strong>
                      <p>美国马里兰州立大学民族音乐学博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      5
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Chao-Jung Wu
                      </strong>
                      <p>美国卫斯里大学音乐学博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      6
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Molly Chang
                      </strong>
                      <p>美国密苏里州立大学人力资源管理博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      7
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Tung-Cheng Huang
                      </strong>
                      <p>美国德州大学工业工程博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      8
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Cheng-Kang Chen
                      </strong>
                      <p>台湾戏曲学院音乐系主任</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      9
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Chung-Ru Lee
                      </strong>
                      <p>交通大学资讯工程博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      10
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Angela Chang
                      </strong>
                      <p>美国加州大学教育学博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      11
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof. Patric Wang
                      </strong>
                      <p>美国阿拉巴玛州立大学力学博士</p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="mt-1 h-5 w-5 flex-none text-pims-green text-bold">
                      12
                    </p>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Prof Colin Chen
                      </strong>
                      <p>SCI, EI, SCOPUS期刊主编，中国科学院博导</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
