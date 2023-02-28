import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Team({ data }) {
  const { frontmatter } = data;
  const { overallHeads, teamHeads, webAndDesign, eventsAndContent, outreachAndDatabasing, Heads, teamHeadsMembers, members } = frontmatter;
  return (
    <section className="section bg-white">
      <div className="container">
        {markdownify(overallHeads, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            {Heads.map((item, i) => (
              <div
                className="feature-card rounded-s bg-gray-50 p-5 pb-0 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={600}
                    width={300}
                    alt=""
                    />
                    )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
        {markdownify(teamHeads, "h2", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamHeadsMembers.map((item, i) => (
              <div
                className="feature-card rounded-s p-5 pb-0 bg-gray-50 text-center"
                key={`feature-${i}`
              }
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={600}
                    width={200}
                    alt=""
                    />
                    )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
        {markdownify(webAndDesign, "h2", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {members.map((item, i) => (
              <div
                className="feature-card rounded-s bg-gray-50 p-5 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={600}
                    width={200}
                    alt=""
                    />
                    )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
