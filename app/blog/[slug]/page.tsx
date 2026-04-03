import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import Button from "@/components/Button";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title}  MythCipher Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="bg-Background font-sans overflow-x-hidden min-h-screen">
      <Header />
      <main className="pt-24 sm:pt-28">
        <article className="py-12 sm:py-16 md:py-20 px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <AnimateIn className="space-y-4 sm:space-y-6">
              <Link
                href="/blog"
                className="text-sm text-Tertiary hover:text-Surface transition-colors"
              >
                &larr; Back to blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-xs text-Tertiary">
                <span className="px-2 py-1 bg-Accent-Cyan/10 text-Accent-Cyan rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl text-Surface-Hover tracking-tight leading-tight">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-Tertiary leading-relaxed">
                {post.excerpt}
              </p>
            </AnimateIn>

            {/* Hero image */}
            <AnimateIn delay={0.1} className="mt-8 sm:mt-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-Bento-Border">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateIn>

            {/* Content */}
            <AnimateIn delay={0.2} className="mt-10 sm:mt-12">
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-serif text-xl sm:text-2xl text-Surface-Hover mt-10 mb-4 tracking-tight"
                      >
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-semibold text-Surface mt-8 mb-3"
                      >
                        {block.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (block.startsWith("> ")) {
                    return (
                      <blockquote
                        key={i}
                        className="border-l-2 border-Accent-Cyan pl-4 my-6 text-Tertiary italic text-sm"
                      >
                        {block.replace("> ", "")}
                      </blockquote>
                    );
                  }
                  if (block.startsWith("| ")) {
                    const rows = block.split("\n").filter((r) => !r.startsWith("|---"));
                    const headers = rows[0]
                      ?.split("|")
                      .filter(Boolean)
                      .map((h) => h.trim());
                    const body = rows.slice(1).map((r) =>
                      r
                        .split("|")
                        .filter(Boolean)
                        .map((c) => c.trim())
                    );
                    return (
                      <div key={i} className="overflow-x-auto my-6">
                        <table className="w-full text-sm border border-Bento-Border rounded-xl overflow-hidden">
                          <thead>
                            <tr className="bg-Card">
                              {headers?.map((h, j) => (
                                <th
                                  key={j}
                                  className="px-4 py-2 text-left text-Surface font-medium border-b border-Bento-Border"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {body.map((row, j) => (
                              <tr key={j} className="border-b border-Bento-Border last:border-0">
                                {row.map((cell, k) => (
                                  <td key={k} className="px-4 py-2 text-Tertiary">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (block.startsWith("- ")) {
                    const items = block.split("\n");
                    return (
                      <ul key={i} className="space-y-1.5 my-4 ml-4">
                        {items.map((item, j) => (
                          <li key={j} className="text-Tertiary text-sm list-disc">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-Tertiary text-sm sm:text-base leading-relaxed my-4"
                      dangerouslySetInnerHTML={{
                        __html: block
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-Surface">$1</strong>')
                          .replace(/\n/g, "<br />"),
                      }}
                    />
                  );
                })}
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={0.3} className="mt-12 sm:mt-16">
              <div className="bg-Card border border-Bento-Border rounded-2xl p-6 sm:p-8 text-center space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl text-Surface-Hover">
                  Ready to try it yourself?
                </h3>
                <p className="text-sm text-Tertiary">
                  Set up your first automation in under 2 minutes. Free for the first 500 users.
                </p>
                <Link href="https://ai.mythcipher.in/signup?utm_source=blog&utm_medium=post_cta&utm_campaign=blog_cta">
                  <Button variant="primary" className="mt-2">
                    Get Early Access Free
                  </Button>
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16 sm:mt-20 space-y-8">
              <AnimateIn>
                <h2 className="font-serif text-xl sm:text-2xl text-Surface-Hover tracking-tight">
                  More from the blog
                </h2>
              </AnimateIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((rp, i) => (
                  <AnimateIn key={rp.slug} delay={0.05 + i * 0.06}>
                    <Link href={`/blog/${rp.slug}`} className="block group h-full">
                      <article className="bg-Card border border-Bento-Border rounded-2xl overflow-hidden group-hover:border-Accent-Cyan/30 transition-all duration-300 h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={rp.image}
                            alt={rp.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 sm:p-5 space-y-2 flex-1">
                          <div className="flex items-center gap-3 text-xs text-Tertiary">
                            <span>{rp.date}</span>
                            <span>{rp.readTime}</span>
                          </div>
                          <h3 className="font-semibold text-sm sm:text-base text-Surface-Hover group-hover:text-Accent-Cyan transition-colors">
                            {rp.title}
                          </h3>
                        </div>
                      </article>
                    </Link>
                  </AnimateIn>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
