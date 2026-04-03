import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>

            <div className="space-y-8 text-sm md:text-base text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-orange-500 pl-4">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing MythCipher's services, you agree to be bound by
                  these Terms and Conditions. Our services include AI-driven
                  automation, workflow optimization, and custom software
                  solutions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-orange-500 pl-4">
                  2. Use License
                </h2>
                <p>
                  MythCipher grants you a limited, non-exclusive license to use
                  our automation platforms for your business or personal brand.
                  Redistribution of our proprietary AI models is strictly
                  prohibited.
                </p>
              </section>

              <section className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-red-400 mb-4 italic">
                  3. Content Liability Disclaimer
                </h2>
                <p className="text-white font-medium">
                  Crucial notice for all users:
                </p>
                <p className="mt-3 text-red-200">
                  This automation does not blame for any wrong posting; all
                  rights of posting are reserved to the user only. MythCipher
                  is not responsible for any content generated, scheduled, or
                  published through its automated systems. The user assumes
                  all liability for the accuracy, legality, and appropriateness
                  of all posts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-orange-500 pl-4">
                  4. Service Availability
                </h2>
                <p>
                  While we strive for 99.9% uptime, we do not guarantee
                  uninterrupted service. We are not liable for any losses caused
                  by technical failure of third-party platforms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4 italic border-l-4 border-orange-500 pl-4">
                  5. Modifications
                </h2>
                <p>
                  MythCipher reserves the right to update these terms at any
                  time. Continued use of the service constitutes acceptance of
                  the revised terms.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-500 text-center">
              Updated: March 14, 2026
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
