import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Team({ data }) {
  const { frontmatter } = data;
  const { overallHeads, teamHeads, webAndDesign, eventsAndContent, outreachAndDatabasing, Heads, teamHeadsMembers, webMembers, outreachMembers, eventMembers } = frontmatter;
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
                    height={300}
                    width={300}
                    alt=""
                    />
                    )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <br/>
                  <span className="mt-3">{item.phone}</span>
                  <br/>
                  <span className="mt-3">{item.email}</span>
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
              <div className="mt-6">
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={250}
                    width={250}
                    alt=""
                    />
                    )}
                </div>
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <b><p className="mt-3">{item.content}</p></b>
                  <span className="mt-3">{item.phone}</span>
                  <br/>
                  <span className="mt-3">{item.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {markdownify(webAndDesign, "h2", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {webMembers.map((item, i) => (
              <div
                className="feature-card rounded-s bg-gray-50 p-5 text-center"
                key={`feature-${i}`}
              >
              <div className="mt-6" sx = {{height: "80vh", postition:"absolute"}}>
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={200}
                    width={200}
                    object-fit= "contain"
                    alt=""
                    />
                    )}
                {!item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.gender == 'M'? "/images/team/male.svg":"/images/team/female.svg"}
                    height={200}
                    width={200}
                    alt=""
                    />
                    )}
                </div>
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <br/>
                  <span className="mt-3">{item.phone}</span>
                  <br/>
                  <span className="mt-3">{item.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {markdownify(outreachAndDatabasing, "h2", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {outreachMembers.map((item, i) => (
              <div
                className="feature-card rounded-s bg-gray-50 p-5 text-center"
                key={`feature-${i}`}
              >
              <div className="mt-6">
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    height={200}
                    width={200}
                    alt=""
                    />
                    )}

                {!item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.gender == 'M'? "/images/team/male.svg":"/images/team/female.svg"}
                    height={200}
                    width={200}
                    alt=""
                    />
                    )}
                </div>
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <br/>
                  <span className="mt-3">{item.phone}</span>
                  <br/>
                  <span className="mt-3">{item.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {markdownify(eventsAndContent, "h2", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventMembers.map((item, i) => (
              <div
                className="feature-card rounded-s bg-gray-50 p-5 text-center"
                key={`feature-${i}`}
              >
                <div className="mt-6">
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={200}
                    height={200}
                    alt=""
                    />
                    )}
                  {!item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.gender == 'M'? "/images/team/male.svg":"/images/team/female.svg"}
                    height={200}
                    width={200}
                    alt=""
                    />
                    )}
                </div> 
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <br/>
                  <span className="mt-3">{item.phone}</span>
                  <br/>
                  <span className="mt-3">{item.email}</span>
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
