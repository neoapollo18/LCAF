import { FadeIn } from '../components/FadeIn'

function Section({ title, children }) {
  return (
    <section className="!mt-10">
      <h2 className="font-serif text-2xl text-white !mt-0 !mb-4">{title}</h2>
      {children}
    </section>
  )
}

export function Privacy() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h1 className="lcaf-page-title !mb-4">Privacy Policy</h1>
          <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-brand-light mb-10">
            Effective Date: March 26, 2026
          </p>

          <div className="lcaf-prose-dark max-w-none">
            <p>
              The Lung Cancer Awareness Foundation (“LCAF,” “we,” “our,” or “us”) is committed to the responsible
              stewardship of the information entrusted to us. Protecting the privacy of our donors, partners, and
              community members is fundamental to our mission and values.
            </p>
            <p>
              This Privacy Policy outlines how we collect, use, and safeguard information obtained through our
              website.
            </p>

            <Section title="1. Information We Collect">
              <p>
                We collect information in order to operate effectively, communicate transparently, and advance our
                mission.
              </p>
              <p className="text-white font-semibold !mb-2">Information You Provide Voluntarily</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Name and contact information (including email, mailing address, and phone number)</li>
                <li>Donation and transaction details</li>
                <li>Communications or inquiries submitted through our website</li>
              </ul>
              <p className="text-white font-semibold !mb-2 !mt-5">Information Collected Automatically</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>IP address and general location data</li>
                <li>Browser type, device information, and operating system</li>
                <li>Website usage data, including pages visited and engagement patterns</li>
              </ul>
              <p className="!mt-5">
                This information supports operational integrity, donor engagement, and continuous improvement of our
                digital experience.
              </p>
            </Section>

            <Section title="2. Use of Information">
              <p>LCAF uses collected information to:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Process donations and provide acknowledgments and tax documentation</li>
                <li>Communicate updates regarding our programs, partnerships, and impact</li>
                <li>Respond to inquiries and maintain donor relationships</li>
                <li>Strengthen and optimize our website and digital platforms</li>
                <li>Fulfill legal, regulatory, and reporting obligations</li>
              </ul>
              <p className="!mt-5">
                We do not sell, trade, or rent personal information. Information is used solely to advance our mission
                and support our community.
              </p>
            </Section>

            <Section title="3. Donations &amp; Financial Transactions">
              <p>
                LCAF partners with Stripe, a leading secure payment processor, to facilitate online donations.
              </p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Payment information is transmitted directly to Stripe using industry-standard encryption</li>
                <li>LCAF does not store or retain full credit card or banking information</li>
                <li>Stripe manages all payment data in accordance with its own privacy and security standards</li>
              </ul>
              <p className="!mt-5">
                This approach ensures the highest level of security and compliance in financial transactions.
              </p>
            </Section>

            <Section title="4. Information Sharing">
              <p>We share information only when necessary and with appropriate safeguards.</p>
              <p>Information may be shared with:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>
                  Trusted service providers who support our operations (e.g., payment processing, email
                  communications, data management)
                </li>
                <li>Regulatory or legal authorities when required to comply with applicable laws</li>
              </ul>
              <p className="!mt-5">
                All third-party partners are expected to maintain strict confidentiality and use information solely
                for authorized purposes.
              </p>
            </Section>

            <Section title="5. Cookies &amp; Analytics">
              <p>
                Our website may use cookies and similar technologies to enhance functionality and understand user
                engagement.
              </p>
              <p>These tools help us:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Evaluate site performance</li>
                <li>Improve usability and content relevance</li>
                <li>Support strategic decision-making</li>
              </ul>
              <p className="!mt-5">Users may adjust browser settings to manage or disable cookies.</p>
            </Section>

            <Section title="6. Data Security &amp; Integrity">
              <p>
                LCAF implements reasonable administrative, technical, and physical safeguards to protect personal
                information from unauthorized access, disclosure, or misuse.
              </p>
              <p>
                While no system can guarantee absolute security, we are committed to maintaining robust protections
                and continuously strengthening our practices.
              </p>
            </Section>

            <Section title="7. Your Rights &amp; Choices">
              <p>We respect your ability to manage your information.</p>
              <p>You may:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Opt out of receiving communications at any time</li>
                <li>Request updates or corrections to your personal information</li>
                <li>Contact us with questions regarding how your information is used</li>
              </ul>
              <p className="!mt-5">Requests may be submitted using the contact information below.</p>
            </Section>

            <Section title="8. External Links">
              <p>
                Our website may contain links to third-party websites. LCAF is not responsible for the content or
                privacy practices of those external sites.
              </p>
            </Section>

            <Section title="9. Children’s Privacy">
              <p>
                LCAF does not knowingly collect personal information from children under the age of 13. Our website
                and services are intended for a general audience.
              </p>
            </Section>

            <Section title="10. Policy Updates">
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. Updates will be posted on this page with a revised effective date.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>For questions regarding this Privacy Policy or our data practices, please contact:</p>
              <div className="!mt-4 rounded-sm border border-slate-200/90 bg-slate-100 p-5 shadow-sm text-slate-700">
                <p className="text-navy font-semibold !mb-1">Lung Cancer Awareness Foundation</p>
                <p className="!mb-1">
                  <a
                    href="mailto:info@lungcancerawarenessfoundation.org"
                    className="text-navy font-semibold hover:underline"
                  >
                    info@lungcancerawarenessfoundation.org
                  </a>
                </p>
                <p className="!mb-0">8605 Santa Monica Blvd, Suite 342093, West Hollywood, CA 90069</p>
              </div>
            </Section>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
