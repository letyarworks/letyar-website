export const metadata = {
  title: "Privacy Policy — Letyar Labs",
  description: "Privacy information for visitors to the Letyar Labs website.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Legal</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 font-body text-sm text-mist">Last updated: 22 September 2026</p>

      <div className="mt-10 space-y-8 font-body text-sm leading-7 text-mist">
        <section>
          <h2 className="font-display text-lg font-semibold text-paper">1. Overview</h2>
          <p className="mt-2">
            Letyar Labs operates this website to present its web, software and
            digital product work and to provide a way for prospective clients
            to make contact.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">2. Information you provide</h2>
          <p className="mt-2">
            The website contact form asks for your name, email address, project
            type and project message. At the current stage, the form is a
            client-side interface and does not send or store those fields on a
            Letyar Labs server. For direct enquiries, you can email
            hello@letyarlabs.com.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">3. Automatically collected information</h2>
          <p className="mt-2">
            This site does not intentionally collect sensitive personal
            information. If hosting, security or infrastructure providers
            create technical logs such as IP address, browser information or
            request timestamps, those logs are handled by the relevant
            infrastructure provider under its own policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">4. Cookies and analytics</h2>
          <p className="mt-2">
            The current website does not intentionally use advertising cookies
            or a third-party analytics profile. If analytics or other tracking
            is added later, this policy will be updated to describe what is
            collected and why.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">5. External links</h2>
          <p className="mt-2">
            The site links to services such as GitHub, X, Telegram, LinkedIn
            and the founder's website. Those services operate independently
            and have their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">6. Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to hello@letyarlabs.com.
          </p>
        </section>
      </div>
    </section>
  );
}
