import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section bg-theme-light">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {faqs.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
              <Link href={`${item.link}`}>
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={300}
                    height={600}
                    alt=""
                    />
                    )}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>

                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
