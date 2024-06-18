import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peclthailand.com/"),
  title: "PIMS International College - Courses",
  description: "newsletter",
};

const newsletters = [
  {
    id: 1,
    title: "Newsletter May 2024",
    file: "/newsletters/newsletter_may_24.pdf",
  },
  //{ id: 2, title: "Newsletter 2", file: "/newsletters/newsletter2.pdf" },
  //{ id: 3, title: "Newsletter 3", file: "/newsletters/newsletter3.pdf" },
  // Add more newsletters as needed
];

export default function Page() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700  ">
        <h1 className="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
          新闻简报
        </h1>
        <div className="mt-12 ">
          <ul>
            {newsletters.map((newsletter) => (
              <li key={newsletter.id}>
                <a
                  href={newsletter.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newsletter.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
