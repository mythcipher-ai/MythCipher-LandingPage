"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-Background min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4 pt-32">
                <div className="w-full max-w-md bg-Card p-8 rounded-3xl border border-Bento-Border space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-semibold text-Surface">Welcome back</h1>
                        <p className="text-Tertiary">Log in to your Mythcipher account</p>
                    </div>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm text-Surface font-medium">Email address</label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm text-Surface font-medium">Password</label>
                                <Link href="#" className="text-xs text-Tertiary hover:text-Surface transition-colors">Forgot password?</Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-Background border border-Bento-Border rounded-xl p-3 text-Surface focus:outline-none focus:ring-2 focus:ring-Outline transition-all"
                            />
                        </div>
                        <Button className="w-full h-12 mt-4">Log in</Button>
                    </form>
                    <div className="text-center">
                        <p className="text-sm text-Tertiary">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-Surface font-medium hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
