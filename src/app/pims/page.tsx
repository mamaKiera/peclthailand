import { MapPinIcon } from "@heroicons/react/20/solid";
import campus from "@public/pims-campus.jpg";
import newCampus from "@public/pims-nimitmai-campus.png";
import Image from "next/image";
import pimsManagement from "@public/pims-management.png";
import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          认识太平洋管理科学学院
        </h1>
        <p className="mt-6 text-xl leading-8">
          About Pacific Institute of Management Science (P.I.M.S.)
        </p>
        <div className="mt-10 max-w-3xl">
          <p>
            太平洋管理科学学院是泰国的一所民办教育机构。它位于泰国Phayao府
            Mueang Phayao区的Ban Tam镇，地址为222/2 Moo 1，Phaholyothin
            Road，靠近清迈。学院成立于2014年6月19日，是Phayao府的第一所民办教育机构。该学院获得认可，可以颁发本科、硕士和博士学位，由泰国高等教育委员会办公室、高等教育、科学、研究和创新部承认。学院致力于培养管理方面的毕业生，整合理论知识和各个学科领域的管理技能。其目标是为社会的文化和智力发展做出贡献，强调在所有学科中既要有理论理解，又要有实际管理技能。这使得毕业生能够进入职场，在学术、公共、商业和工业领域广受认可。
          </p>
          <div className="mt-8 mb-2">
            <span className="font-bold text-black">学院理事长:</span>{" "}
            <span>Lersuk Chuladesa (เลอศักดิ์ จุลเทศ)</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-black">校长:</span>{" "}
            <span>
              Assoc. Prof. Dr. Surajet Chaiphanphong (รศ. ดร.สุรเจต
              ไชยพันธ์พงษ์)
            </span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-black">院长:</span>{" "}
            <span>Asst. Prof. Dr. Peera Punngarm (ผศ. ดร. พีระ พันธ์ุงาม)</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-black">副校长:</span>
            <li>
              Asst. Prof. Dr. Rungruedee Rattanachai(ผศ. ดร. รุ่งฤดี
              รัตน์ชัยศิลป์)
            </li>
            <li>
              Asst. Prof. Dr. Sujitra Samukkeetham(ผศ. ดร. รสุจิตรา สามัคคีธรรม)
            </li>
            <li>Asst. Prof. Dr. Pakakorn Budsabong(ผศ. ดร. รุผกาภรณ์ บุสบง)</li>
          </div>
          <div className="mb-2">
            <span className="font-bold text-black">学生人数:</span>{" "}
            <span>1,769 人</span>
          </div>
          <div className="mb-6">
            <span className="font-bold text-black">网站:</span>{" "}
            <Link href={"https://www.ipacific.ac.th/"} target="_blank">
              <span className="underline">https://www.ipacific.ac.th/</span>
            </Link>
          </div>
          <figure className="mt-8">
            <Image
              className="aspect-auto rounded-xl bg-gray-50 object-cover"
              src={pimsManagement}
              alt=""
            />
          </figure>
          <figcaption className="mb-8">
            管理团队照片 从左至右：Asst. Prof. Dr. Rungruedee副校长，Asst. Prof.
            Dr. Peera院长，Assoc. Prof. Dr. Surajet校长，Asst. Prof. Dr.
            Sujitra副校长，Asst. Prof. Dr. Pakakorn副校长
          </figcaption>
          <p className="text-xl font-semibold text-gray-900">开设课程</p>
          <p className="font-semibold text-gray-900 mt-6">本科</p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                1
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 工商管理学士
                </strong>
                <p>Bachelor of Business Administration</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                2
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  公共行政学士
                </strong>
                <p> Bachelor of Public Administration</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                3
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  工程商务技术学士项目
                </strong>
                <p> Bachelor of Technology Program in Engineering Business</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                4
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  旅游与酒店业文学学士项目
                </strong>
                <p>
                  {" "}
                  Bachelor of Arts Program in Tourism and Hospitality Industry
                </p>
              </span>
            </li>
            <p className="font-semibold text-gray-900 mt-6">硕士学位</p>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                1
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 教育管理硕士
                </strong>
                <p>M.Ed. Master of Education (Educational Administration)</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                2
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 藝術硕士
                </strong>
                <p>M.A. Master of Arts in Musicology、Dancelogy、Fine Arts</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                3
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 工商管理硕士 信息技术管理方向
                </strong>
                <p>
                  MBA Master of Buiness Administration in Information Technology
                  Management
                </p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                4
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 工商管理硕士
                </strong>
                <p>MBA Master of Business Administration</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                5
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 工商管理硕士
                </strong>
                <p>MBA Master of Business Administration</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                6
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  政治学硕士
                </strong>
                <p>M.Pol.Sc Master of Political Science</p>
              </span>
            </li>
            <p className="font-semibold text-gray-900 mt-6">博士学位</p>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                1
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 哲学博士 教育管理方向
                </strong>
                <p>Ph.D. Doctor of Philosophy in Educational Administration</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                2
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太洋管理科学学院 藝術博士 （音乐、舞蹈、美术）方向
                </strong>
                <p>Doctor of Arts in Musicology, Dancology, and Fineart</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                3
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 哲学博士 信息技术管理方向
                </strong>
                <p>
                  Ph.D. Doctor of Philosophy in Information Technology
                  Management
                </p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                4
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 哲学博士 组织管理与发展 方向
                </strong>
                <p>
                  Ph.D. Doctor of Philosophy in Organization Management and
                  Development
                </p>
              </span>
            </li>
          </ul>
        </div>
        <p className="mt-12 text-xl font-semibold text-gray-900">校园地址</p>
        <li className="flex gap-x-3 mt-6">
          <MapPinIcon className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold"></MapPinIcon>
          <span>
            <strong className="font-semibold text-gray-900">
              Phayao 校区: 222/2 Moo 1 Phahonyothin Rd, Ban Tam, Mueang Phayao
              District, Phayao 56000
            </strong>
          </span>
        </li>
        <figure className="mt-8">
          <Image
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={campus}
            alt="campus"
          />
        </figure>
        <li className="flex gap-x-3 mt-6">
          <MapPinIcon className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold"></MapPinIcon>
          <span>
            <strong className="font-semibold text-gray-900">
              Nimitmai 校区: 7/7 Moo 14 Thetsaban Lam Luk Ka 3 Rd., Lam Luk Ka
              District, Pathum Thani 12150
            </strong>
          </span>
        </li>
        <figure className="mt-8">
          <Image
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={newCampus}
            alt="campus"
          />
        </figure>
      </div>
    </div>
  );
}
