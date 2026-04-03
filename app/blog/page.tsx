"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import { blogPosts as staticBlogPosts } from "@/lib/blog-data";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://mythcipher-automation-backend.onrender.com";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>(staticBlogPosts);

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs`)
      .then((res) => res.json())
      .then((data: any[]) => {
        if (data.length > 0) setBlogs(data);
      })
      .catch(() => {});
  }, []);

  const featured = blogs[0];
  const rest = blogs.slice(1);

  const getImage = (img: string) => img || "/images/feature1.png";

  const getDate = (blog: any) => {
    if (blog.date) return blog.date;
    if (blog.createdAt)
      return new Date(blog.createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    return "";
  };

  return (
    <div className="bg-Background font-sans overflow-x-hidden min-h-screen">
      <Header />
      <main>
        <section className="py-16 sm:py-20 md:py-28 px-5 md:px-8">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {/* Header */}
            <AnimateIn className="text-center space-y-3 max-w-2xl mx-auto">
              <p className="text-sm font-medium text-Accent-Cyan tracking-wide">
                Blog
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-Surface-Hover tracking-tight">
                Learn. Automate. Ship.
              </h1>
              <p className="text-Tertiary text-sm sm:text-base">
                Tutorials, comparisons, and real stories from people who finally
                made automation work.
              </p>
            </AnimateIn>

            {/* Featured post */}
            {featured && (
              <AnimateIn delay={0.1}>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="block group"
                >
                  <div className="grid md:grid-cols-2 gap-5 sm:gap-6 bg-Card border border-Bento-Border rounded-2xl overflow-hidden">
                    <div className="relative aspect-video md:aspect-auto md:min-h-[320px] overflow-hidden">
                      <Image
                        src={getImage(featured.image)}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 sm:p-8 flex flex-col justify-center space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 text-xs text-Tertiary">
                        <span className="px-2 py-1 bg-Accent-Cyan/10 text-Accent-Cyan rounded-full font-medium">
                          {featured.category}
                        </span>
                        <span>{getDate(featured)}</span>
                        <span>{featured.readTime}</span>
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-Surface-Hover tracking-tight group-hover:text-Accent-Cyan transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-sm sm:text-base text-Tertiary leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <span className="text-sm text-Accent-Cyan font-medium">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {rest.map((post: any, i: number) => (
                <AnimateIn key={post.slug} delay={0.05 + i * 0.06}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <article className="bg-Card border border-Bento-Border rounded-2xl overflow-hidden group-hover:border-Accent-Cyan/30 transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={getImage(post.image)}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-Background/80 backdrop-blur-sm text-xs text-Accent-Cyan rounded-full font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-Tertiary">
                          <span>{getDate(post)}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-base text-Surface-Hover group-hover:text-Accent-Cyan transition-colors flex-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-Tertiary line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
