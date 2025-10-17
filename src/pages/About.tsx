import mark from "../assets/mark.jpeg";
import book from "../assets/book.jpeg";

interface InfoSectionProps {
  title: string;
  content: string | JSX.Element;
}

const InfoSection = ({ title, content }: InfoSectionProps) => (
  <div className="space-y-2 text-center">
    <h3 className="text-base md:text-lg font-bold text-gray-900 uppercase">
      {title}
    </h3>
    <div className="text-gray-700 text-sm md:text-base">{content}</div>
  </div>
);

export default function AboutPage() {
  const books = [
    "Organisational Success",
    "Kinesis",
    "Faith Expo",
    "Apokalupsis",
    "Higher Calling",
    "Phases of Life",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            Our Identity
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            New Creation Gathering
          </p>
        </header>

        {/* Vision Bearer Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="h-[500px] w-full">
            <img
              src={mark}
              alt="Mark A Paskazio"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Mark A. Paskazio
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Mark A. Paskazio is the vision bearer of New Creation Gathering, a
              dynamic, multifaceted, global ministry. He carries a passion to
              reach the world with God's presence through evangelism,
              discipleship, and missions. Through various ministry platforms, he
              helps people live victorious and purposeful lives in God's Word.
            </p>
          </div>
        </section>

        {/* Books Section */}
        <section>
          {/* Header Section */}
          <header className="flex flex-col items-center justify-center lg:mt-32">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Books by Mark A. Paskazio
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Available in stock
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-[500px] w-full">
              <img
                src={book}
                alt="Books by Mark A. Paskazio"
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                Some of his inspiring books include:
              </p>
              <ul className="list-decimal list-inside space-y-1 text-gray-700 text-sm md:text-base">
                {books.map((title, i) => (
                  <li key={i}>{title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Purpose, Mandate Section */}
        <section className="flex flex-col items-center gap-8 text-center lg:mt-32">
          <InfoSection
            title="Our Purpose"
            content="To win souls through evangelism, equip them through discipleship, and send them out for mission."
          />
          <InfoSection
            title="Our Vision"
            content="Lives transformed by the Word of God."
          />
          <InfoSection
            title="Our Mission"
            content={
              <>
                <p>To transform, To empower, To send out</p>
              </>
            }
          />
          <InfoSection
            title="Our Mandate"
            content={
              <>
                <p>Church planting, Raising kingdom financiers, Education</p>
              </>
            }
          />
        </section>
      </div>
    </div>
  );
}
