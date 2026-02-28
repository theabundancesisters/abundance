export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 2024</p>
        <div className="glass-card p-8 text-white/60 leading-relaxed space-y-6 text-sm">
          <p>
            Please review your Privacy Policy content from your current Kajabi
            site at{" "}
            <a
              href="https://www.theleadingedge.life/pages/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 underline"
            >
              theleadingedge.life/pages/privacy-policy
            </a>{" "}
            and paste it here.
          </p>
          <p className="text-white/30 italic">
            [Privacy policy content placeholder — to be updated]
          </p>
        </div>
      </div>
    </section>
  );
}
