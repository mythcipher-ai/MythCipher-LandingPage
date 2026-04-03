import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-Background border-t border-Bento-Border py-10 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="font-semibold text-xl text-Surface-Hover tracking-tight">
              MythCipher
            </Link>
            <p className="text-sm text-Tertiary max-w-xs">
              AI-powered automation for social media, email, and content.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-Surface">Product</h4>
              <nav className="flex flex-col gap-2 text-sm text-Tertiary">
                <Link href="/use-cases" className="hover:text-Surface transition-colors">Use Cases</Link>
                <Link href="/pricing" className="hover:text-Surface transition-colors">Pricing</Link>
                <Link href="/blog" className="hover:text-Surface transition-colors">Blog</Link>
              </nav>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-Surface">Legal</h4>
              <nav className="flex flex-col gap-2 text-sm text-Tertiary">
                <Link href="/privacy-policy" className="hover:text-Surface transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-Surface transition-colors">Terms</Link>
              </nav>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-Surface">Connect</h4>
              <nav className="flex flex-col gap-2 text-sm text-Tertiary">
                <Link href="https://www.instagram.com/mythcipherai/" target="_blank" className="hover:text-Surface transition-colors">Instagram</Link>
                <Link href="https://www.linkedin.com/in/mythcipher-ai-6510573aa/" target="_blank" className="hover:text-Surface transition-colors">LinkedIn</Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-Bento-Border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-Tertiary">
          <p>&copy;{new Date().getFullYear()} MythCipher &mdash; Built in India</p>
          {/* <p className="text-Tertiary/50">Powered by n8n</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
