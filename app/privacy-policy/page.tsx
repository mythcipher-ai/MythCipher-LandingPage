import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-sm md:text-base text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-cyan-500 pl-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to MythCipher. We are committed to protecting your
                  personal information and your right to privacy. This Privacy
                  Policy explains how we collect, use, and safeguard your data
                  when you use our automation services and AI solutions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-cyan-500 pl-4">
                  2. Information Collection
                </h2>
                <p>
                  We collect data necessary to provide high-quality AI automation
                  services. This includes account information, connected platform
                  credentials (stored securely), and content preferences
                  provided during onboarding.
                </p>
              </section>

              <section className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-orange-400 mb-4 italic">
                  3. Automation Consent & Responsibility
                </h2>
                <p className="text-white font-medium">
                  By utilizing MythCipher's automation tools, you explicitly
                  agree to the following:
                </p>
                <p className="mt-3 text-orange-200">
                  This automation does not blame for any wrong posting; all
                  rights of posting are reserved to the user only. The user
                  is solely responsible for all content published through our
                  automation systems across all platforms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-cyan-500 pl-4">
                  4. Data Usage
                </h2>
                <p>
                  Your data is used strictly for enhancing your automation
                  workflows, training localized AI models for your brand voice,
                  and ensuring seamless integration between platforms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-cyan-500 pl-4">
                  5. Contact
                </h2>
                <p>
                  For privacy-related inquiries, please reach out to our legal
                  team at legal@mythcipher.com.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-500 text-center">
              Effective Date: March 14, 2026
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
