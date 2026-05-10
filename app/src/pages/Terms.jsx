import { FadeIn } from '../components/FadeIn'

function Section({ title, children }) {
  return (
    <section className="!mt-10">
      <h2 className="font-serif text-2xl text-white !mt-0 !mb-4">{title}</h2>
      {children}
    </section>
  )
}

export function Terms() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <h1 className="lcaf-page-title !mb-4">Terms of Use</h1>
          <p className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-brand-light mb-10">
            Effective Date: March 26, 2026
          </p>

          <div className="lcaf-prose-dark max-w-none">
            <p>
              Welcome to the Lung Cancer Awareness Foundation (“LCAF,” “we,” “our,” or “us”) website. By accessing or
              using this website, you agree to be bound by these Terms of Use. If you do not agree, please discontinue
              use of the site.
            </p>

            <Section title="1. Use of Website">
              <p>
                This website is provided for informational, educational, and charitable purposes. You agree to use
                the website in compliance with all applicable laws and in a manner that does not infringe upon or
                restrict the rights of others.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Use the site for unlawful, fraudulent, or misleading purposes</li>
                <li>Attempt to gain unauthorized access to any systems, data, or networks</li>
                <li>Interfere with or disrupt the integrity or performance of the website</li>
              </ul>
            </Section>

            <Section title="2. No Solicitation; No Reliance">
              <p>
                The information provided on this website is for general informational and educational purposes only
                and is not intended to constitute a solicitation, offer, or recommendation of any kind.
              </p>
              <p>
                Nothing on this website should be construed as medical, legal, financial, or professional advice. You
                should not rely on the information presented here as a substitute for consultation with qualified
                professionals.
              </p>
              <p>
                Any decision to make a donation or otherwise support LCAF is made voluntarily and at your own
                discretion.
              </p>
            </Section>

            <Section title="3. Donations &amp; Payments">
              <p>
                All donations made through the website are voluntary and, except where required by law,
                non-refundable.
              </p>
              <p>
                LCAF reserves the right to refuse, cancel, or refund any donation in cases of suspected fraud, error,
                or legal obligation.
              </p>
              <p>
                We use Stripe, a secure third-party payment processor, to handle all transactions. By submitting a
                donation, you agree to comply with Stripe’s applicable terms and policies.
              </p>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                All website content—including text, graphics, logos, images, and materials—is owned by LCAF or used
                with permission and is protected by intellectual property laws.
              </p>
              <p>
                You may use content solely for personal, non-commercial purposes. Any reproduction, distribution,
                modification, or public use without prior written consent is strictly prohibited.
              </p>
            </Section>

            <Section title="5. User Submissions">
              <p>
                If you submit or share any content (including messages, testimonials, or materials) with LCAF through
                the website:
              </p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>
                  You grant LCAF a non-exclusive, royalty-free, worldwide license to use, reproduce, and display such
                  content in connection with our mission
                </li>
                <li>
                  You represent that you have the right to share such content and that it does not violate any laws
                  or third-party rights
                </li>
              </ul>
              <p className="!mt-5">LCAF reserves the right to remove or decline any submissions at its discretion.</p>
            </Section>

            <Section title="6. Third-Party Links">
              <p>
                This website may include links to third-party websites. LCAF does not control and is not responsible
                for the content, policies, or practices of those sites.
              </p>
              <p>Accessing third-party websites is at your own risk.</p>
            </Section>

            <Section title="7. Disclaimer of Warranties">
              <p>This website is provided on an “as is” and “as available” basis.</p>
              <p>LCAF makes no warranties, express or implied, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Accuracy or completeness of content</li>
                <li>Availability, reliability, or security of the website</li>
              </ul>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, LCAF and its directors, officers, employees, and affiliates
                shall not be liable for any indirect, incidental, consequential, or punitive damages arising from:
              </p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Your use of or inability to use the website</li>
                <li>Errors or omissions in content</li>
                <li>Unauthorized access to or use of data</li>
              </ul>
              <p className="!mt-5">Your sole remedy for dissatisfaction with the website is to discontinue use.</p>
            </Section>

            <Section title="9. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless LCAF and its affiliates, directors, officers,
                employees, and agents from and against any claims, liabilities, damages, losses, or expenses
                (including reasonable legal fees) arising out of:
              </p>
              <ul className="list-disc pl-6 space-y-1 !my-0">
                <li>Your use of the website</li>
                <li>Your violation of these Terms</li>
                <li>Your infringement of any third-party rights</li>
              </ul>
            </Section>

            <Section title="10. Privacy">
              <p>
                Your use of this website is also governed by our{' '}
                <a href="/privacy" className="text-brand-light hover:text-white underline">
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="11. Modifications">
              <p>
                LCAF reserves the right to update or modify these Terms at any time. Updates will be posted with a
                revised effective date.
              </p>
              <p>Continued use of the website constitutes acceptance of any changes.</p>
            </Section>

            <Section title="12. Governing Law &amp; Dispute Resolution">
              <p>
                These Terms are governed by the laws of the State of California, without regard to its conflict of
                law principles.
              </p>
              <p>
                Any dispute arising out of or relating to these Terms or your use of the website shall first be
                addressed through good-faith negotiations.
              </p>
              <p>
                If a resolution cannot be reached, the dispute shall be resolved by binding arbitration in Los
                Angeles County, California, in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                You agree to waive any right to a jury trial and to participate in class actions or class-wide
                arbitration.
              </p>
            </Section>

            <Section title="13. Termination">
              <p>
                LCAF reserves the right to suspend or terminate access to the website at its discretion, without
                notice, for conduct that violates these Terms or is otherwise harmful to LCAF or its users.
              </p>
            </Section>

            <Section title="14. Entire Agreement">
              <p>
                These Terms constitute the entire agreement between you and LCAF regarding use of the website and
                supersede any prior agreements or understandings.
              </p>
            </Section>

            <Section title="15. Contact">
              <p>For questions regarding these Terms of Use, please contact:</p>
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
