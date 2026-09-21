export const metadata = {
  title: "Terms of Use — Letyar Labs",
  description: "Terms governing use of the Letyar Labs website.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Legal</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-4 font-body text-sm text-mist">Last updated: 22 September 2026</p>

      <div className="mt-10 space-y-8 font-body text-sm leading-7 text-mist">
        <section>
          <h2 className="font-display text-lg font-semibold text-paper">1. Website use</h2>
          <p className="mt-2">
            This website provides information about Letyar Labs, its services,
            projects and templates. You may use the site for lawful purposes
            and should not attempt to disrupt, abuse or gain unauthorized
            access to the site or its infrastructure.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">2. Services and pricing</h2>
          <p className="mt-2">
            Published service descriptions, template prices and turnaround
            information are starting points, not a substitute for a project
            scope or signed agreement. A specific project is governed by the
            scope, price, timeline and terms agreed with the client before
            work begins.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">3. Templates and project materials</h2>
          <p className="mt-2">
            Template previews and project examples are provided for
            illustration unless expressly identified as a completed client
            delivery. Ownership, licensing, source-code access and reuse
            rights for a commissioned project are determined by the applicable
            project agreement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">4. Third-party services</h2>
          <p className="mt-2">
            External services linked from this website are operated by their
            respective providers. Letyar Labs is not responsible for changes
            to those services, their availability or their separate terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">5. No guarantee from website information</h2>
          <p className="mt-2">
            Website content is provided for general information. Final
            technical scope, deliverables, compatibility, hosting and support
            are determined project by project.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-paper">6. Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to hello@letyarlabs.com.
          </p>
        </section>
      </div>
    </section>
  );
}
