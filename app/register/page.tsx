"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="bg-Background min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4 pt-32">
                <div className="w-full max-w-md bg-Card p-8 rounded-3xl border border-Bento-Border space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-semibold text-Surface">Create an account</h1>
                        <p className="text-Tertiary">Start building with Mythcipher today</p>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm text-Surface font-medium">First name</label>
                                <input
                                    type="text"
                                    placeholder="Jane"
                                    className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-Surface font-medium">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-Surface font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-Surface font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                            />
                        </div>
                        <div className="flex items-start gap-3 px-1">
                            <input
                                type="checkbox"
                                id="consent"
                                required
                                className="mt-1 w-4 h-4 rounded border-Bento-Border bg-Background text-Surface focus:ring-Outline accent-orange-500 cursor-pointer"
                            />
                            <label htmlFor="consent" className="text-xs text-Tertiary leading-relaxed cursor-pointer">
                                I acknowledge that this automation does not blame for any wrong posting; all rights of posting are reserved to the user only. I agree to the <Link href="/privacy-policy" className="text-Surface hover:underline">Privacy Policy</Link> and <Link href="/terms-conditions" className="text-Surface hover:underline">Terms & Conditions</Link>.
                            </label>
                        </div>
                        <Button className="w-full h-12 mt-4">Create account</Button>
                    </form>
                    <div className="text-center">
                        <p className="text-sm text-Tertiary">
                            Already have an account?{" "}
                            <Link href="/login" className="text-Surface font-medium hover:underline">Log in</Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
