import { HeroCenteredImage } from "@/components/sections/hero/hero-centered-image";
import { HeroFullWidth } from "@/components/sections/hero/hero-full-width";
import { HeroSplitLayout } from "@/components/sections/hero/hero-split-layout";
import { FeaturesThreeColumn } from "@/components/sections/features/features-three-column";
import { FeaturesDetailed } from "@/components/sections/features/features-detailed";
import { CTASimple } from "@/components/sections/cta/cta-simple";
import { CTASplit } from "@/components/sections/cta/cta-split";
import { TestimonialsGrid } from "@/components/sections/testimonials/testimonials-grid";
import { TestimonialsCarousel } from "@/components/sections/testimonials/testimonials-carousel";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactSplit } from "@/components/sections/contact/contact-split";

export default function TestPage() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', padding: '2rem', background: '#f0f0f0' }}>
        Component Test Page - 11 Components
      </h1>

      {/* Hero Sections */}
      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          1. HeroCenteredImage
        </h2>
        <HeroCenteredImage
          content={{
            headline: "Hero Centered Image Test",
            subheadline: "Testing Component",
            description: "This is a test of the HeroCenteredImage component with all props.",
            cta: {
              text: "Primary CTA",
              href: "#test",
              variant: "primary",
            },
            secondaryCta: {
              text: "Secondary CTA",
              href: "#test",
            },
            image: {
              src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
              alt: "Office workspace",
              width: 600,
              height: 400,
            },
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          2. HeroFullWidth
        </h2>
        <HeroFullWidth
          content={{
            headline: "Hero Full Width Test",
            subheadline: "Full width background",
            description: "Testing the HeroFullWidth component with background overlay.",
            cta: {
              text: "Get Started",
              href: "#test",
              variant: "primary",
            },
            secondaryCta: {
              text: "Learn More",
              href: "#test",
            },
            backgroundImage: {
              src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=800&fit=crop",
              alt: "Modern office",
              overlay: "dark",
              overlayOpacity: 0.5,
            },
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          3. HeroSplitLayout (Image Left)
        </h2>
        <HeroSplitLayout
          content={{
            headline: "Hero Split Layout Test",
            subheadline: "Split layout with image",
            description: "Testing the HeroSplitLayout component with image on the left.",
            cta: {
              text: "Primary Action",
              href: "#test",
              variant: "primary",
            },
            image: {
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
              alt: "Team collaboration",
              width: 600,
              height: 400,
            },
            imagePosition: "left",
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          4. HeroSplitLayout (Image Right)
        </h2>
        <HeroSplitLayout
          content={{
            headline: "Hero Split Layout Test (Right)",
            subheadline: "Image on the right",
            description: "Testing the HeroSplitLayout component with image on the right.",
            cta: {
              text: "Start Now",
              href: "#test",
              variant: "primary",
            },
            secondaryCta: {
              text: "View Demo",
              href: "#test",
            },
            image: {
              src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
              alt: "Business meeting",
              width: 600,
              height: 400,
            },
            imagePosition: "right",
          }}
        />
      </section>

      {/* Features Sections */}
      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          5. FeaturesThreeColumn
        </h2>
        <FeaturesThreeColumn
          content={{
            sectionTitle: "Three Column Features Test",
            sectionDescription: "Testing the FeaturesThreeColumn component with icons.",
            features: [
              {
                icon: "Zap",
                title: "Fast Performance",
                description: "Lightning-fast load times and smooth interactions.",
              },
              {
                icon: "Shield",
                title: "Secure by Default",
                description: "Enterprise-grade security built into every layer.",
              },
              {
                icon: "Users",
                title: "Team Collaboration",
                description: "Work together seamlessly with your team.",
              },
            ],
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          6. FeaturesDetailed
        </h2>
        <FeaturesDetailed
          content={{
            sectionTitle: "Detailed Features Test",
            sectionDescription: "Testing the FeaturesDetailed component with images and details.",
            features: [
              {
                icon: "CheckCircle",
                title: "Comprehensive Solution",
                description: "Everything you need in one powerful platform.",
                details: [
                  "Advanced analytics dashboard",
                  "Real-time collaboration tools",
                  "Automated workflow management",
                ],
                image: {
                  src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                  alt: "Analytics dashboard",
                  width: 600,
                  height: 400,
                },
              },
              {
                icon: "Clock",
                title: "Time-Saving Automation",
                description: "Automate repetitive tasks and focus on what matters.",
                details: [
                  "Smart scheduling system",
                  "Automatic notifications",
                  "Template library",
                ],
                image: {
                  src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                  alt: "Time management",
                  width: 600,
                  height: 400,
                },
              },
            ],
          }}
        />
      </section>

      {/* CTA Sections */}
      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          7. CTASimple
        </h2>
        <CTASimple
          content={{
            headline: "Ready to Get Started?",
            description: "Join thousands of satisfied customers using our platform today.",
            cta: {
              text: "Start Free Trial",
              href: "#test",
              variant: "primary",
            },
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          8. CTASplit
        </h2>
        <CTASplit
          content={{
            headline: "Transform Your Business Today",
            description: "Experience the power of our platform with a personalized demo.",
            cta: {
              text: "Schedule Demo",
              href: "#test",
              variant: "primary",
            },
            secondaryCta: {
              text: "View Pricing",
              href: "#test",
            },
            image: {
              src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
              alt: "Business growth",
              width: 600,
              height: 400,
            },
            imagePosition: "right",
          }}
        />
      </section>

      {/* Testimonials Sections */}
      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          9. TestimonialsGrid
        </h2>
        <TestimonialsGrid
          content={{
            sectionTitle: "What Our Customers Say",
            sectionDescription: "Read testimonials from our satisfied clients.",
            testimonials: [
              {
                quote: "This platform has transformed how we work. Highly recommended!",
                author: "김철수",
                role: "CEO",
                company: "Tech Startup Inc.",
                rating: 5,
              },
              {
                quote: "Excellent service and support. Worth every penny.",
                author: "이영희",
                role: "Marketing Director",
                company: "Digital Agency",
                rating: 5,
              },
              {
                quote: "The best investment we've made for our business.",
                author: "박지민",
                role: "Operations Manager",
                company: "E-commerce Co.",
                rating: 5,
              },
            ],
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          10. TestimonialsCarousel
        </h2>
        <TestimonialsCarousel
          content={{
            sectionTitle: "Featured Testimonials",
            sectionDescription: "Carousel testimonials from our clients.",
            testimonials: [
              {
                quote: "Outstanding platform with amazing features!",
                author: "최민호",
                role: "CTO",
                company: "Software Solutions",
                rating: 5,
              },
              {
                quote: "Customer support is top-notch. Always responsive.",
                author: "정수진",
                role: "Product Manager",
                company: "SaaS Company",
                rating: 5,
              },
              {
                quote: "Easy to use and incredibly powerful.",
                author: "강동욱",
                role: "Founder",
                company: "Startup Ventures",
                rating: 5,
              },
            ],
            autoPlay: true,
            autoPlayInterval: 5000,
          }}
        />
      </section>

      {/* Contact Sections */}
      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          11. ContactForm
        </h2>
        <ContactForm
          content={{
            headline: "Get in Touch",
            description: "Fill out the form below and we'll get back to you within 24 hours.",
            fields: [
              {
                name: "name",
                type: "text",
                label: "Name",
                placeholder: "Your name",
                required: true,
              },
              {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "your@email.com",
                required: true,
              },
              {
                name: "phone",
                type: "tel",
                label: "Phone",
                placeholder: "010-1234-5678",
                required: false,
              },
              {
                name: "message",
                type: "textarea",
                label: "Message",
                placeholder: "Your message here...",
                required: true,
              },
            ],
            submitText: "Send Message",
            submitAction: "/api/contact",
          }}
        />
      </section>

      <section style={{ borderBottom: '4px solid #333', marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', padding: '1rem', background: '#e0e0e0' }}>
          12. ContactSplit
        </h2>
        <ContactSplit
          content={{
            headline: "Contact Us",
            description: "Reach out to us through any of these channels or use the form.",
            contactInfo: [
              {
                icon: "Mail",
                label: "Email",
                value: "contact@example.com",
                href: "mailto:contact@example.com",
              },
              {
                icon: "Phone",
                label: "Phone",
                value: "+82 10-1234-5678",
                href: "tel:+821012345678",
              },
              {
                icon: "MapPin",
                label: "Address",
                value: "서울시 강남구 테헤란로 123",
              },
            ],
            form: {
              fields: [
                {
                  name: "name",
                  type: "text",
                  label: "Name",
                  placeholder: "Your name",
                  required: true,
                },
                {
                  name: "email",
                  type: "email",
                  label: "Email",
                  placeholder: "your@email.com",
                  required: true,
                },
                {
                  name: "message",
                  type: "textarea",
                  label: "Message",
                  placeholder: "Your message...",
                  required: true,
                },
              ],
              submitText: "Submit",
              submitAction: "/api/contact",
            },
          }}
        />
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', background: '#333', color: 'white' }}>
        All 11 components tested successfully!
      </footer>
    </main>
  );
}
