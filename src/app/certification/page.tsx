import Link from "next/link";
import Image from "next/image";
import cer1 from "@public/cer1.png";
import cer2 from "@public/cer2.jpg";
import cer3 from "@public/cer3.jpg";
import cer4 from "@public/cer4.jpg";
import cer5 from "@public/cer5.jpg";

export default function Page() {
  return (
    <main className="relative isolate">
      {/* Background */}
      <div
        className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-pims-green-light to-pims-green opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      {/* section one */}
      {/* Header section */}
      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            学历认证
          </h2>
          <p className="mt-12 font-semibold text-lg leading-8 text-gray-800">
            泰国教育部批准设立的高校名单（2019）
          </p>
          <Link
            href={
              "https://thailand.lxgz.org.cn/thailand/lxaj/gplx/20180829145143138092/index.html"
            }
            target="_blank"
          >
            <p className=" text-lg leading-8 text-gray-800 underline">
              https://thailand.lxgz.org.cn/thailand/lxaj/gplx/20180829145143138092/index.html
            </p>
          </Link>
        </div>
      </div>
      {/* image section */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <Image src={cer1} alt="" height={550} />
            </div>
            <div>
              <Image src={cer2} alt="" height={550} />
            </div>
          </div>
          <div className=" px-8 py-6">
            <p className=" text-lg leading-8 text-gray-800 ">说明：</p>
            <p>
              {" "}
              1.“海洋管理科技学院”为错误的翻译，正确的名称为“太平洋管理科学学院”，本校已经去函请求更正。
            </p>
            <p>
              {" "}
              2.中留服的网站，因为只登录有跟该机构申请认证过的学校资料，本校为新兴的优质大学，过去专注于泰国及其他国家的学生之教育。故尚未有中国学生毕业，预计等本校第一届中国学生毕业后，中留服网站即会正式登录。
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-25 dark:via-neutral-500" />
      {/* section two */}
      {/* Header section */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-10">
          <p className="mt-4 font-semibold text-lg leading-8 text-gray-800">
            「认证」中国教育部认证的泰国大学名单（17年156所全）
          </p>
          <Link href={"https://kknews.cc/education/8xo9kzq.html"}>
            <p className=" text-lg leading-8 text-gray-800 underline">
              https://kknews.cc/education/8xo9kzq.html
            </p>
          </Link>
          <div className=" px-8 py-8 ">
            <span className=" text-lg leading-8 text-gray-800 ">
              涉外监管网 官网连结：
            </span>
            <span className="underline">
              {" "}
              http://www.jsj.edu.cn/n1/12048.shtml
            </span>
            <p>(下表的数据中，太平洋管理科学学院位于第73个。 )</p>
          </div>
        </div>
      </div>
      {/* image section */}
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <Image src={cer3} alt="" height={500} />
            </div>
            <div>
              <Image src={cer4} alt="" height={500} />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-25 dark:via-neutral-500" />
      {/* section three */}
      {/* Header section */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-10">
          <p className="mt-4 font-semibold text-lg leading-8 text-gray-800">
            泰国高教科研部网站连结
          </p>
          <Link
            href={
              "https://info.mhesi.go.th/stat_aca_uni.php?search_year=2564&download=7048&file_id=202201071105.xlsx"
            }
          >
            <p className=" text-lg leading-8 text-gray-800 underline">
              https://info.mhesi.go.th/stat_aca_uni.php?search_year=2564&download=7048&file_id=202201071105.xlsx
            </p>
          </Link>
        </div>
      </div>
      {/* image section */}
      <div className="mx-auto my-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex justify-center max-w-xl  gap-8 text-base leading-7 text-gray-300 lg:max-w-none ">
            <div>
              <Image src={cer5} alt="" height={500} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
