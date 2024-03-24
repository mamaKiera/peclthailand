import Image from "next/image";
import logo from "@public/pims-logo-full.png";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import weChat from "@public/wechat.svg";
import weChatQr from "@public/we-chat-meng.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#80BBBD]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-2 pt-8 sm:pt-8 lg:px-8 lg:pt-8">
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3 xl:mt-0">
          <div className="mt-4 md:mt-0">
            <Image className="h-20 w-auto" src={logo} alt="" />
          </div>
          <ul role="list" className="mt-6 space-y-5">
            <li key="home">
              <Link
                href={"/"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                首页
              </Link>
            </li>
            <li key="pims">
              <Link
                href={"/pims"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                认识太平洋管理科学学院
              </Link>
            </li>
            <li key="team">
              <Link
                href={"/team"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                管理部门
              </Link>
            </li>
            <li key="course">
              <Link
                href={"/course"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                学术单位
              </Link>
            </li>
            <li key="studywithus">
              <Link
                href={"/studywithus"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                我想读太平洋学院
              </Link>
            </li>
            <li key="atmosphere">
              <Link
                href={"/atmosphere"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                校园采风
              </Link>
            </li>
            <li key="certification">
              <Link
                href={"/certification"}
                className="text-ml font-semibold leading-6 text-black hover:text-gray-300"
              >
                学历认证
              </Link>
            </li>
          </ul>

          <div className="mt-4 md:mt-0">
            <div className="flex items-center mt-6 gap-2">
              <MapPinIcon className="mt-1 h-5 w-5 flex-none text-black" />
              <Link
                href={"https://maps.app.goo.gl/UwuEhkFhd8g8ZCvu9"}
                target="_blank"
              >
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  222/2 Moo 1，Phaholyothin Road,Ban Tam镇, Mueang Phayao区,
                  Phayao府, 泰国 56000
                </p>
              </Link>
            </div>
            <div className="flex items-center mt-6 gap-2">
              <PhoneIcon className="mt-1 h-5 w-5 flex-none text-black" />
              <Link href={"tel:+66969979793"} target="_blank">
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  (+66)969979793
                </p>
              </Link>{" "}
              <span>,</span>
              <Link href={"tel: +886932214282"} target="_blank">
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  (+886)932214282
                </p>
              </Link>
            </div>
            <div className="flex items-center mt-6 gap-2">
              <Image
                className="mt-1 h-5 w-5 flex-none text-black"
                src={weChat}
                alt="weChat Icon"
              />
              <Link href={"weixin://contacts/profile/C8540768"} target="_blank">
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  WeChat ID: C8540768
                </p>
              </Link>
              <span>,</span>
              <Link
                href={"weixin://contacts/profile/Neomoon2730"}
                target="_blank"
              >
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  Neomoon2730
                </p>
              </Link>
            </div>
            <Image
              className="mt-2 h-20 w-20 flex-none text-black"
              src={weChatQr}
              alt="weChat Icon"
            />
            <div className="flex items-center mt-6 gap-2">
              <EnvelopeIcon className="mt-1 h-5 w-5 flex-none text-black" />
              <Link href={"mailto: prosper@ipacific.ac.th"} target="_blank">
                <p
                  className="text-sm
                  font-normal
                  text-black
                  hover:text-gray-300"
                >
                  prosper@ipacific.ac.th
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 border-t-2 border-[#0A747D] pt-8 sm:mt-10 lg:mt-10">
          <p className="text-xs leading-5 text-black">
            &copy; {new Date().getFullYear()} Prosper Edugate Co.,Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
