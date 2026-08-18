"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VolunteerModal } from "@/components/VolunteerModal";

export default function DonatePage() {
  const [activeTab, setActiveTab] = useState<"Overview" | "Impact" | "What You get">("Overview");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | "">(5000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // State for Thank You Modal Card
  const [donationSuccess, setDonationSuccess] = useState<{
    reference: string;
    amount: number;
  } | null>(null);

  const handleStartDonation = () => {
    setIsModalOpen(true);
  };

  const handlePaystackCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const PaystackPop = (await import("@paystack/inline-js")).default;
      const popup = new PaystackPop();

      const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx";
      const finalAmount = Number(amount) || 1000;

      popup.newTransaction({
        key: publicKey,
        email: email,
        amount: finalAmount * 100, // Amount in kobo
        onSuccess: (transaction: { reference: string }) => {
          setIsModalOpen(false);
          setLoading(false);
          // Trigger the beautiful Thank You modal card
          setDonationSuccess({
            reference: transaction.reference,
            amount: finalAmount,
          });
        },
        onCancel: () => {
          console.log("Donation cancelled");
          setLoading(false);
        },
      });
    } catch (error) {
      console.error("Paystack initialization failed:", error);
      alert("Unable to initialize Paystack gateway.");
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setDonationSuccess(null);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-[#1D2130] w-full">
      {/* Hero Header Section */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  DONATE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#1D2130] leading-tight">
                Making a donation for our children.
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                When you donate, you&apos;re supporting effective care to children with special needs—an investment in the leaders of tomorrow.
              </p>
              <button
                onClick={handleStartDonation}
                className="px-8 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-md"
              >
                Donate now
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/charity.png"
                alt="Donation Box"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs & Details Section */}
      <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                  How you can contribute to caring for our kids
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-6">
                {/* Tab Navigation */}
                <div className="flex items-center gap-8 border-b border-slate-200 pb-3">
                  {(["Overview", "Impact", "What You get"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-sm font-bold pb-1 transition-colors relative ${
                        activeTab === tab
                          ? "text-slate-900 after:absolute after:bottom-[-13px] after:left-0 after:right-0 after:h-[2px] after:bg-slate-900"
                          : "text-slate-400 hover:text-slate-700"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                  {activeTab === "Overview" && (
                    <>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                      </p>
                      <p>
                        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </p>
                    </>
                  )}
                  {activeTab === "Impact" && (
                    <p>
                      Your financial backing directly finances educational aids, therapy resources, and nutrition plans tailored specifically for children with special needs.
                    </p>
                  )}
                  {activeTab === "What You get" && (
                    <p>
                      Donors receive regular transparency reports, quarterly newsletters, and invitations to exclusive outreach activities and celebrations.
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <hr className="border-slate-100" />

          {/* Usage Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="text-3xl font-extrabold text-[#1D2130]">
                How we use your donation
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              </p>
            </AnimatedSection>
          </div>

          {/* Bottom CTA Banner */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden py-20 px-8 text-center text-white shadow-xl min-h-[360px] flex items-center justify-center">
              <Image
                src="/images/children.png"
                alt="Children banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  You can contribute to provide a place for children with special needs!
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <button
                    onClick={() => setIsVolunteerOpen(true)}
                    className="px-6 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm"
                  >
                    Join as a volunteer
                  </button>
                  <button
                    onClick={handleStartDonation}
                    className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-md transition-colors text-sm"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volunteer Modal */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />

      {/* Paystack Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
            >
              ✕
            </button>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Make a Donation</h3>
              <p className="text-sm text-slate-600">
                Enter your details to initiate a secure payment via Paystack.
              </p>
            </div>

            <form onSubmit={handlePaystackCheckout} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Amount (NGN ₦)
                </label>
                <input
                  type="number"
                  required
                  min="100"
                  placeholder="5000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm mt-2 shadow-md disabled:opacity-50"
              >
                {loading ? "Initializing..." : "Proceed to Paystack"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Thank You / Success Modal Card */}
      {donationSuccess && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-6 shadow-2xl relative border border-slate-100">
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
            >
              ✕
            </button>

            {/* Success Animated Checkmark Icon */}
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#1D2130]">
                Thank You for Your Support!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your generous contribution directly aids children in need. A confirmation email has been sent to your inbox.
              </p>
            </div>

            {/* Payment Summary Box */}
            <div className="bg-[#FFF7E2] rounded-2xl p-4 text-left space-y-2 border border-amber-100/60 text-xs">
              <div className="flex justify-between items-center text-slate-700">
                <span className="font-semibold text-slate-500">Amount Donated</span>
                <span className="font-bold text-slate-900 text-sm">
                  ₦{donationSuccess.amount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span className="font-semibold text-slate-500">Transaction Ref</span>
                <span className="font-mono text-slate-900 font-bold">
                  {donationSuccess.reference}
                </span>
              </div>
            </div>

            <button
              onClick={closeSuccessModal}
              className="w-full py-3.5 bg-[#1D2130] hover:bg-slate-800 text-white font-bold rounded-xl transition-colors text-sm shadow-md"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </main>
  );
}