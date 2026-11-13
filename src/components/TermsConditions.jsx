import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Footer from './Footer'

// Mobile: title 28 / heading 20 / text 14
// sm (640px+): title 40 / heading 24 / text 16
const styles = {
  title: 'text-[28px] sm:text-[40px] font-bold leading-[1.2] mb-5 text-center',
  heading: 'text-[20px] sm:text-[24px] font-semibold leading-[1.3] mb-5',
  text: 'text-[14px] sm:text-[16px] leading-[1.7] mb-4',
  list: 'text-[14px] sm:text-[16px] leading-[1.7] pl-6 mb-4 list-disc',
  section: 'mb-8 sm:mb-10',
}

const Section = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.heading}>{title}</h2>
    {children}
  </section>
)

const P = ({ children }) => <p className={styles.text}>{children}</p>

const List = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const B = ({ children }) => <strong className="font-semibold">{children}</strong>

export default function TermsConditions() {
  return (
    <>
      <div className="bg-[#F7F4FE]">
        <Navbar />
      </div>
      <div className="pt-[40px] sm:pt-[60px]">
        <Container>
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <P>
            Welcome to ab.pexio.app! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            ab.pexio.app website, Shopify application, and related services.
          </P>
          <P>
            ab.pexio.app (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides Shopify A/B testing and
            conversion optimization tools that help merchants test storefront content, templates, themes, and
            different URL experiences.
          </P>
          <div className="mb-8 sm:mb-10">
            <P>
              By installing, accessing, or using ab.pexio.app, you (&quot;you,&quot; &quot;your,&quot; or
              &quot;Merchant&quot;) agree to these Terms. If you do not agree with these Terms, please discontinue
              using our services.
            </P>
          </div>

          <Section title="1. Description of Services">
            <P>ab.pexio.app provides A/B testing and experimentation tools for Shopify merchants.</P>
            <P>Our services include:</P>
            <ul className={styles.list}>
              <li><B>Content Edit:</B> Test different storefront content, headlines, text, buttons, and other page elements.</li>
              <li><B>Template Experiment:</B> Compare different page templates and layouts.</li>
              <li><B>Theme Comparison:</B> Test different Shopify themes and storefront designs.</li>
              <li><B>Split URL:</B> Compare different storefront experiences through separate URLs.</li>
              <li><B>Experiment Analytics:</B> Review experiment results, conversion metrics, and performance insights.</li>
              <li><B>Audience Targeting:</B> Set up experiments for different visitor segments, depending on your subscription plan and available features.</li>
            </ul>
          </Section>

          <Section title="2. Subscription Plans, Billing, and Cancellation">
            <P>
              ab.pexio.app offers Free and Pro subscription plans. The Free plan provides access to selected A/B
              testing features, basic experimentation tools, essential analytics, and Shopify integration without a
              recurring subscription fee. The Pro plan costs $9.99 per month and includes additional features such as
              advanced audience targeting, unlimited experiments, and priority performance insights.
            </P>
            <P>
              Paid subscriptions follow the billing cycle displayed during activation and may automatically renew. You
              agree to pay all applicable subscription fees and taxes, maintain accurate billing information, and use
              a valid payment method where required. Shopify or an authorized payment provider may process
              subscription payments. If a payment fails, we may restrict access to paid features until you resolve the
              payment issue.
            </P>
            <P>
              You may cancel your subscription at any time by downgrading within the App or uninstalling the App from
              your Shopify Admin. After cancellation, your Pro features may remain active until the end of your
              current billing period. You may continue using available Free plan features after your Pro subscription
              expires. Subscription cancellations do not automatically qualify for refunds of previous payments.
            </P>
          </Section>

          <Section title="3. Acceptable Use & Merchant Responsibilities">
            <P>When creating and running experiments through ab.pexio.app, you agree not to:</P>
            <List
              items={[
                'Use the Services to show misleading, fraudulent, unlawful, harmful, or unauthorized content.',
                'Use the App in ways that violate privacy laws, such as collecting cookies or tracking visitor data without the required consent under GDPR or other applicable laws.',
              ]}
            />
            <P>
              <B>Merchant Responsibility for Storefront Changes:</B> A/B testing changes your live storefront
              elements, layouts, themes, and URLs. You are responsible for reviewing and testing each experiment
              before publishing it to visitors to check that it works properly with your custom theme and third-party
              apps.
            </P>
          </Section>

          <Section title="4. Intellectual Property Rights">
            <P>
              <B>ab.pexio.app IP:</B> All software, algorithms, UI designs, trademarks, logos, and documentation
              associated with ab.pexio.app are the exclusive intellectual property of ab.pexio.app. We grant you a
              limited, non-exclusive, non-transferable, revocable license to use the App solely for your internal
              business operations on your connected Shopify store.
            </P>
            <P>
              <B>Merchant IP:</B> You retain full ownership of your storefront content, themes, product data,
              branding, and experiment assets. You grant ab.pexio.app a limited license to host, render, and process
              this content solely as necessary to deliver the Services.
            </P>
          </Section>

          <Section title="5. Third-Party Services">
            <P>
              The Services integrate with Shopify and may interact with third-party themes or apps installed on your
              store. ab.pexio.app is not responsible for outages, API changes, or bugs caused by Shopify or
              third-party theme/app developers.
            </P>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <P>
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of
              any kind, whether express or implied.
            </P>
            <P>We do not guarantee that:</P>
            <List
              items={[
                'Our services will be operated without interruptions or errors with every custom Shopify theme or third-party script.',
                'Running experiments through the app will result in increased revenue and conversion lift.',
                'Our analytics will predict future business performance.',
              ]}
            />
            <P>You use ab.pexio.app at your own discretion and risk.</P>
          </Section>

          <Section title="7. Limitation of Liability">
            <P>
              To the extent permitted by law, ab.pexio.app, its founders, employees, and affiliates are not
              responsible for indirect or unexpected losses resulting from your use of the Services. This includes
              lost profits, revenue, sales, or data.
            </P>
          </Section>

          <Section title="8. Indemnification">
            <P>
              You agree to indemnify, defend, and hold harmless [Company Legal Name] and its officers, directors,
              employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable
              legal fees) arising out of: (a) your breach of these Terms; (b) the content or experiments you publish
              on your storefront; or (c) your violation of any applicable law or third-party rights.
            </P>
          </Section>

          <Section title="9. Termination">
            <P>
              <B>By You:</B> You may terminate these Terms at any time by uninstalling the App from your Shopify
              store.
            </P>
            <P>
              <B>By Us:</B> We may suspend or terminate your access to the Services immediately if you violate these
              Terms, fail to pay applicable fees, or engage in activity that harms our platform or other merchants.
            </P>
          </Section>

          <Section title="10. Governing Law & Dispute Resolution">
            <P>
              These Terms are governed by the laws of the jurisdiction where ab.pexio.app operates, without
              considering conflict of law principles. Any disputes related to these Terms or your use of ab.pexio.app
              will follow the applicable laws and legal procedures of that jurisdiction.
            </P>
          </Section>

          <Section title="11. Changes to These Terms">
            <P>
              If we modify these Terms, we will notify you via the App dashboard and email. Your continued use of the
              Services after such changes constitutes your acceptance of the updated Terms.
            </P>
          </Section>

          <Section title="12. Contact Information">
            <P>For questions about these Terms &amp; Conditions, please contact us at:</P>
            <P>
              Email: <a href="mailto:ab-support@pexio.app">ab-support@pexio.app</a>
            </P>
          </Section>
        </Container>
      </div>
      <Footer />
    </>
  )
}