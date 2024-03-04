import { MapPinIcon } from "@heroicons/react/20/solid";
import campus from "@public/pims-campus.jpg";
import newCampus from "@public/pims-nimitmai-campus.png";
import Image from "next/image";

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
        <div className="mt-10 max-w-2xl">
          <p className="text-xl font-semibold text-gray-900">开设课程</p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                1
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 哲学博士 教育管理方向
                </strong>
                <p>Ph.D.Doctor of Philosophy in Educational Administration</p>
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
                <p>Doctor of Art in Musicology, Dancology, and Fineart</p>
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
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                5
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
                6
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太洋管理科学学院 藝術硕士
                </strong>
                <p>M.Art. Master of Art in Musicology、Dancelogy、Fine Arts</p>
              </span>
            </li>
            <li className="flex gap-x-3">
              <p className="mt-1 h-5 w-5 flex-none text-pecl-gold font-semibold">
                7
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
                8
              </p>
              <span>
                <strong className="font-semibold text-gray-900">
                  太平洋管理科学学院 工商管理硕士
                </strong>
                <p>MBA Master of Business Administration</p>
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
