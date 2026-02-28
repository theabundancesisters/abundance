export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 2024</p>
        <div className="glass-card p-8 text-white/60 leading-relaxed space-y-6 text-sm">
          <p>
            Please review your Terms of Service content from your current Kajabi
            site at{" "}
            <a
              href="https://www.theleadingedge.life/pages/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-300 underline"
            >
              theleadingedge.life/pages/terms
            </a>{" "}
            and paste it here.
          </p>
          <p className="text-white/30 italic">
            [Terms content placeholder — to be updated]
          </p>
        </div>
      </div>
    </section>
  );
}
