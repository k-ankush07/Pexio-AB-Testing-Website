import React from 'react'
import Container from './Container'
import Navbar from './Navbar'
import Footer from './Footer'

// Mobile: title 28 / heading 20 / text 14
// sm (640px+): title 40 / heading 24 / text 16
const styles = {
  title: 'text-[28px] sm:text-[40px] font-bold leading-[1.2] mb-5 text-center',
  heading: 'text-[20px] sm:text-[24px] font-semibold leading-[1.3] mb-5',
  subheading: 'text-[16px] sm:text-[18px] font-semibold leading-[1.4] mb-3',
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

const SubHeading = ({ children }) => <h3 className={styles.subheading}>{children}</h3>

const P = ({ children }) => <p className={styles.text}>{children}</p>

const List = ({ items }) => (
  <ul className={styles.list}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)

const B = ({ children }) => <strong className="font-semibold">{children}</strong>

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-[#F7F4FE]">
        <Navbar />
      </div>
      <div className="pt-[40px] sm:pt-[60px]">
        <Container>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className="mb-8 sm:mb-10">
            <P>
              ab.pexio.app (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides Shopify A/B testing and
              conversion optimization tools that help merchants experiment with storefront content, templates,
              themes, and different URL experiences. This Privacy Policy describes how personal information is
              collected, used, stored, and shared when you visit our Website, install the App, or use our Services.
            </P>
          </div>

          <Section title="1. Information We Collect">
            <SubHeading>A. Information Collected from Your Shopify Account (Merchant Data)</SubHeading>
            <P>
              When you install the App, we are automatically able to access certain types of information from your
              Shopify account through Shopify&rsquo;s Admin APIs and Webhooks:
            </P>
            <ul className={styles.list}>
              <li>
                <B>Store &amp; Account Details:</B> Your store name, primary domain, email address, physical address,
                phone number, currency, timezone, and Shopify plan details.
              </li>
              <li>
                <B>Themes, Templates &amp; Storefront Assets:</B> Access to your store&rsquo;s themes, Liquid
                templates, and assets so you can run Content Edits, Template Experiments, Theme Comparisons, and Split
                URL tests without disrupting your live storefront.
              </li>
              <li>
                <B>Script Tags &amp; Web Pixels:</B> Enables us to add and remove A/B testing scripts and storefront
                tracking pixels so that if you uninstall the App, zero residual code remains on your store.
              </li>
              <li>
                <B>Products &amp; Collections:</B> Allows us to target specific product pages, collections, or
                variants in your experiments.
              </li>
              <li>
                <B>Orders, Carts &amp; Checkout Events:</B> Enables us to attribute conversions, revenue per visitor
                (RPV), average order value (AOV), and checkout completions back to specific test variants.
              </li>
            </ul>

            <SubHeading>B. Information Collected from Storefront Visitors</SubHeading>
            <P>
              When shoppers browse a Shopify store using ab.pexio.app, we automatically collect technical and
              behavioral session data to assign test variants consistently and calculate experiment analytics:
            </P>
            <ul className={styles.list}>
              <li>
                <B>Device &amp; Network Information:</B> IP address, web browser type and version, operating system,
                device type, screen resolution, time zone, language, and referring/exit URLs.
              </li>
              <li>
                <B>Experiment &amp; Event Data:</B> Which test variant a visitor visits, page views, clicks,
                add-to-cart events, checkout initiations, and completed order values.
              </li>
            </ul>

            <SubHeading>C. Information You Provide Directly</SubHeading>
            <P>
              When you contact us through our Website contact form, request support, or manage your billing, we
              collect your name, email address, store URL, and content you share with us.
            </P>
          </Section>

          <Section title="2. Tracking Technologies (Cookies, Local Storage & Pixels)">
            <P>We collect storefront and website session data using the following technologies:</P>
            <ul className={styles.list}>
              <li>
                <B>First-Party Cookies:</B> Small data files placed on a visitor&apos;s device containing an anonymous
                unique identifier to ensure a shopper sees the exact same test variant across multiple page views and
                return visits.
              </li>
              <li>
                <B>Local Storage &amp; Session Storage:</B> Browser storage used to maintain fast, flicker-free
                experiment rendering (preventing &quot;flash of original content&quot;) and track session-level
                experiment states.
              </li>
              <li>
                <B>Web Pixels &amp; Log Files:</B> Lightweight scripts and server logs that record storefront
                interactions (such as page views, variant exposures, and conversion events) along with timestamps and
                browser metadata.
              </li>
            </ul>
            <P>
              Shoppers and website visitors can disable or clear cookies and local storage through their browser
              settings at any time, though doing so may reset their assigned test variant experience.
            </P>
          </Section>

          <Section title="3. How We Use Your Information">
            <P>We collect the information to operate, maintain, and improve the service, including:</P>
            <List
              items={[
                'To provide, operate, and maintain the ab.pexio.app A/B testing toolkit.',
                'To process transactions, manage subscriptions, and send billing receipts.',
                'To communicate with you regarding support inquiries, product updates, and security alerts.',
                'To analyze usage trends, optimize server performance, and improve our feature set (e.g., Content Edits, Theme Comparisons, and Split URLs).',
              ]}
            />
            <P>
              We do not sell, rent, or trade your personal information or your customers&apos; personal information to
              third parties.
            </P>
          </Section>

          <Section title="4. Sharing & Disclosure of Information">
            <P>
              We only share personal information if required to do so by law, warrant, court order, or governmental
              request, or when necessary to protect our legal rights, property, or safety.
            </P>
          </Section>

          <Section title="5. Data Retention">
            <P>
              We retain your store data and experiment analytics while your ab.pexio.app account remains active. When
              you uninstall the app, we keep your data for 48 hours before permanently deleting it.
            </P>
          </Section>

          <Section title="6. Data Security">
            <P>
              We implement robust administrative, technical, and physical security measures (including data
              encryption in transit and at rest) to protect your personal and store data against unauthorized access,
              loss, or modification.
            </P>
          </Section>

          <Section title="7. Changes to This Privacy Policy">
            <P>
              We may update this Privacy Policy periodically to reflect changes in our services, technology, business
              practices, or legal requirements.
            </P>
            <P>When we make significant changes, we may publish an updated version on our website.</P>
          </Section>

          <Section title="8. Contact Us">
            <P>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
            </P>
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