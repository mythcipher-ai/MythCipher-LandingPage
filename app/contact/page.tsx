"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ContactPage() {
    return (
        <div className="bg-Background min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col space-y-12 p-4 pt-32 max-w-7xl mx-auto w-full">
                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-semibold text-Surface-Hover tracking-tight">Support and Sales</h1>
                    <p className="text-xl text-Tertiary font-medium">
                        Have questions about Mythcipher? We&apos;re here to help you get the most out of our tools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-Card p-8 rounded-3xl border border-Bento-Border space-y-8">
                        <h2 className="text-2xl font-semibold text-Surface">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm text-Surface font-medium">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-Surface font-medium">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="jane@company.com"
                                    className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-Surface font-medium">How can we help?</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all resize-none"
                                ></textarea>
                            </div>
                            <Button className="w-full h-12">Submit Inquiry</Button>
                        </form>
                    </div>

                    <div className="space-y-12 py-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-Surface">Contact Sales</h3>
                            <p className="text-Tertiary">Interested in Mythcipher for your organization? Reach out to our sales team for custom plans.</p>
                            <p className="text-Surface font-medium">sales@mythcipher.com</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-Surface">Customer Support</h3>
                            <p className="text-Tertiary">Need technical help or have a question about your account?</p>
                            <p className="text-Surface font-medium">support@mythcipher.com</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-Surface">Press and Partnerships</h3>
                            <p className="text-Tertiary">For media inquiries and partnership opportunities.</p>
                            <p className="text-Surface font-medium">press@mythcipher.com</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
