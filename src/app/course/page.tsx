import Image from "next/image";
import presentation from "@public/presentation.jpg";
import pimsStudents from "@public/pims-students-learning.jpg";

export default function Page() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700  ">
        <h1 className="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
          学术单位
        </h1>
        <div className="mt-12 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 哲学博士 教育管理方向
                </p>
                <p>Ph.D. Doctor of Philosophy in Educational Administration</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>張鳴姍教授(教育人力資源)</li>
                <li>蔡佩樺教授(英語教育)</li>
                <li>游麗蓉教授(教育行政)</li>
              </dd>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 藝術博士 音乐方向
                </p>
                <p>Doctor of Arts in Musicology</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>吳昭蓉教授(民族音樂學)</li>
                <li>林能杰教授(音樂教育)</li>
              </dd>
            </div>
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 藝術博士 舞蹈方向
                </p>
                <p>Doctor of Arts in Dancelogy</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 藝術博士 美术 方向
                </p>
                <p>Doctor of Arts in Fine Art</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>陈维教授(美学理论)</li>
              </dd>
            </div>
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 哲学博士 信息技术管理方向
                </p>
                <p>
                  Ph.D. Doctor of Philosophy in Information Technology
                  Management
                </p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>李瑞元教授(AI计算机工程) </li>
                <li>黄东城教授(机器人与自动控制) </li>
                <li>陶翼煌教授(卫星遥测) </li>
              </dd>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 哲学博士 组织管理与发展 方向
                </p>
                <p>
                  Ph.D. Doctor of Philosophy in Organization Management and
                  Development
                </p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>陈秋声教授(战略管理)</li>
                <li>陈树中教授(知识管理)</li>
                <li>蔡政谚教授(创新管理)</li>
                <li>秦学教授(旅游管理)</li>
              </dd>
            </div>
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 教育管理硕士
                </p>
                <p>M.Ed. Master of Education (Educational Administration)</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>盖思妮教授(教育行政) </li>
                <li>韦娜妲教授(音乐教育、全人教育) </li>
              </dd>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太洋管理科学学院 艺术硕士 音乐方向
                </p>
                <p>M.A. Master of Arts in Musicology</p>
              </dt>
            </div>
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太洋管理科学学院 艺术硕士 舞蹈方向
                </p>
                <p>M.A. Master of Arts in Dancelogy</p>
              </dt>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太洋管理科学学院 艺术硕士 美术方向
                </p>
                <p>M.A. Master of Arts in Fine Art</p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>孟昭栋教授(文化创新)</li>
                <li>陈建安教授(环境美学)</li>
              </dd>
            </div>
            <div className="bg-[#d8ebeb] px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 工商管理硕士
                </p>
                <p>MBA Master of Business Administration </p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>陳家妤教授(金融管理) </li>
                <li>吴丽皙教授(营销管理) </li>
                <li>簡綺徽教授(經濟管理) </li>
                <li>林鉌翔教授(创业管理) </li>
              </dd>
            </div>
            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-3">
              <dt className="text-lg leading-6 text-gray-900 sm:col-span-3">
                <p className="font-semibold ">
                  太平洋管理科学学院 工商管理硕士 信息技术管理方向
                </p>
                <p>
                  MBA Master of Buiness Administration in Information Technology
                  Management
                </p>
              </dt>
              <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <h2>教師(博导)</h2>
                <li>陈世铭教授(信息教育)</li>
                <li>翁瑞峰教授(大数据分析)</li>
                <li>司威梦教授(数据挖掘)</li>
              </dd>
            </div>
          </dl>
        </div>
        <div className="grid lg:grid-cols-2 gap-2">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={pimsStudents}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={presentation}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
