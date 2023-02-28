import config from "@config/config.json";
import { plainify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }) => {
  const { content_folder, summary_length } = config.settings;
  return (
    <div className="section row pb-0">
      {posts.map((post, i) => (
        <div className="col-12 pb-12 lg:pb-24">
          <div className="row items-center">
            <div className="col-12 md:col-6">
              {post.frontmatter.image && (
                <Image
                  className="h-auto w-full rounded-lg"
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  width={500}
                  height={200}
                  priority={true}
                />
              )}
            </div>
            <div className="col-12 md:col-6">
              <h2 className="h3 mb-2 mt-4">
                <Link
                  href={`/${content_folder}/${post.slug}`}
                  className="block hover:text-primary"
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="text-text">
                {plainify(
                  post.content?.slice(0, Number(summary_length)),
                  "div"
                )}
              </p>
              <Link
                className="btn btn-primary mt-4"
                href={`/${content_folder}/${post.slug}`}
                rel=""
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
