import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

// The Blog Page Content
export default function Blog({ posts }) {
  let blogs = [];
  posts.map((post) => {
    return blogs.unshift(post);
  });

  return (
    <main className="mx-auto h-screen bg-yellow-50 pt-8 mt-6">
      {blogs.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const {
          title,
          author,
          category,
          date,
          bannerImage,
          description,
          tags,
        } = frontmatter;

        //JSX for individual blog listing
        return (
          <article
            className=" shadow-xl rounded h-40 w-[40rem] bg-white mx-auto mt-4 shadow-yellow-200 flex gap-6"
            key={title}
          >
            <div className="w-60 flex align-middleoverflow-hidden rounded-bl rounded-tl">
              <img
                src={bannerImage}
                className="object-cover object-center w-"
              />
            </div>
            <div className="flex flex-col gap-7 p-2 w-full">
              <Link href={`/posts/${slug}`}>
                <h1 className="text-2xl text-blue-700 mb-3 ">{title}</h1>

                <div className="flex justify-between w-3/5 mb-3">
                  <p className="text-xs text-gray-500 px-1 py-0.5 rounded-md border-2 border-inherit">
                    {category}
                  </p>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
                <p className="text-base text-gray-700 mb-3">{description}</p>
              </Link>
            </div>
          </article>
        );
      })}
    </main>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
