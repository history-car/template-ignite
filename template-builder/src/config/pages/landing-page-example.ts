import { PageConfig } from '@/types/page.types';
import { SectionType } from '@/lib/section-registry';

export const landingPageExample: PageConfig = {
  id: 'landing-page-1',
  title: 'Modern SaaS Landing Page',
  description: 'A complete landing page example with hero, features, testimonials, and contact sections',
  path: '/landing-example',
  metadata: {
    ogTitle: 'Modern SaaS Landing Page',
    ogDescription: 'Build your product faster with our amazing platform',
    keywords: ['saas', 'landing page', 'platform'],
  },
  sections: [
    {
      id: 'hero-1',
      type: SectionType.HERO_FULL_WIDTH,
      props: {
        content: {
          headline: 'Build Your Product Faster',
          subheadline: 'The Ultimate Platform',
          description: 'Transform your ideas into reality with our cutting-edge tools and seamless workflow.',
          cta: {
            text: 'Get Started Free',
            href: '#signup',
            variant: 'primary',
          },
          secondaryCta: {
            text: 'View Demo',
            href: '#demo',
          },
          backgroundImage: {
            src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop',
            alt: 'Technology background',
            overlay: 'dark',
            overlayOpacity: 0.6,
          },
        },
      },
    },
    {
      id: 'features-1',
      type: SectionType.FEATURES_THREE_COLUMN,
      props: {
        content: {
          sectionTitle: 'Everything You Need',
          sectionDescription: 'All the tools and features to help you succeed',
          features: [
            {
              icon: 'Zap',
              title: 'Lightning Fast',
              description: 'Optimized for speed and performance with cutting-edge technology.',
            },
            {
              icon: 'Shield',
              title: 'Secure by Default',
              description: 'Enterprise-grade security to keep your data safe and protected.',
            },
            {
              icon: 'Sparkles',
              title: 'Beautiful Design',
              description: 'Stunning UI components that make your product stand out.',
            },
          ],
        },
      },
    },
    {
      id: 'features-detailed-1',
      type: SectionType.FEATURES_DETAILED,
      props: {
        content: {
          sectionTitle: 'Powerful Features',
          sectionDescription: 'Discover what makes our platform unique',
          features: [
            {
              icon: 'Code',
              title: 'Developer Friendly',
              description: 'Built with developers in mind, offering clean APIs and extensive documentation.',
              details: [
                'RESTful API with comprehensive documentation',
                'SDK support for popular languages',
                'Webhook integrations for real-time updates',
                'GraphQL support for flexible queries',
              ],
              image: {
                src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
                alt: 'Code editor',
                width: 800,
                height: 600,
              },
            },
            {
              icon: 'Users',
              title: 'Team Collaboration',
              description: 'Work together seamlessly with built-in collaboration tools.',
              details: [
                'Real-time collaboration features',
                'Role-based access control',
                'Activity tracking and audit logs',
                'Team analytics and insights',
              ],
              image: {
                src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
                alt: 'Team collaboration',
                width: 800,
                height: 600,
              },
            },
          ],
        },
      },
    },
    {
      id: 'testimonials-1',
      type: SectionType.TESTIMONIALS_CAROUSEL,
      props: {
        content: {
          sectionTitle: 'Loved by Thousands',
          sectionDescription: 'See what our customers have to say',
          autoPlay: true,
          autoPlayInterval: 5000,
          testimonials: [
            {
              quote: 'This platform completely transformed how we build products. The development speed increased by 10x!',
              author: 'Sarah Johnson',
              role: 'CTO',
              company: 'TechCorp',
              rating: 5,
              image: {
                src: 'https://i.pravatar.cc/150?img=1',
                alt: 'Sarah Johnson',
              },
            },
            {
              quote: 'The best investment we made this year. Our team productivity has never been higher.',
              author: 'Michael Chen',
              role: 'Product Manager',
              company: 'StartupXYZ',
              rating: 5,
              image: {
                src: 'https://i.pravatar.cc/150?img=2',
                alt: 'Michael Chen',
              },
            },
            {
              quote: 'Outstanding support and documentation. We were up and running in less than a day.',
              author: 'Emily Rodriguez',
              role: 'Lead Developer',
              company: 'DevStudio',
              rating: 5,
              image: {
                src: 'https://i.pravatar.cc/150?img=3',
                alt: 'Emily Rodriguez',
              },
            },
          ],
        },
      },
    },
    {
      id: 'cta-1',
      type: SectionType.CTA_SIMPLE,
      props: {
        content: {
          headline: 'Ready to Get Started?',
          description: 'Join thousands of teams already building with our platform.',
          cta: {
            text: 'Start Free Trial',
            href: '#signup',
            variant: 'primary',
          },
        },
        theme: {
          backgroundColor: '#1E40AF',
          textColor: '#FFFFFF',
        },
      },
    },
    {
      id: 'contact-1',
      type: SectionType.CONTACT_SPLIT,
      props: {
        content: {
          headline: 'Get in Touch',
          description: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
          contactInfo: [
            {
              icon: 'Mail',
              label: 'Email',
              value: 'hello@example.com',
              href: 'mailto:hello@example.com',
            },
            {
              icon: 'Phone',
              label: 'Phone',
              value: '+1 (555) 123-4567',
              href: 'tel:+15551234567',
            },
            {
              icon: 'MapPin',
              label: 'Office',
              value: '123 Main St, San Francisco, CA 94111',
            },
          ],
          form: {
            fields: [
              {
                name: 'name',
                type: 'text',
                label: 'Name',
                placeholder: 'Your name',
                required: true,
              },
              {
                name: 'email',
                type: 'email',
                label: 'Email',
                placeholder: 'your@email.com',
                required: true,
              },
              {
                name: 'message',
                type: 'textarea',
                label: 'Message',
                placeholder: 'Your message',
                required: true,
              },
            ],
            submitText: 'Send Message',
            submitAction: '/api/contact',
          },
        },
      },
    },
  ],
};
