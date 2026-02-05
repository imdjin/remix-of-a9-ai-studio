import { useState } from "react";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarJessica from "@/assets/avatar-jessica.jpg";
import avatarRyan from "@/assets/avatar-ryan.jpg";
import avatarEmily from "@/assets/avatar-emily.jpg";
import painPointIllustration from "@/assets/pain-point-illustration.png";
import visionIllustration from "@/assets/vision-illustration.png";
import a9Logo from "@/assets/a9-logo.svg";
import { ChatInput } from "@/components/ChatInput";
import { FeatureCard } from "@/components/FeatureCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { SolutionCard } from "@/components/SolutionCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingTable } from "@/components/PricingTable";
import { Sparkles, Zap, Target, Video, Rocket, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const testimonials = [
  {
    quote: "As an indie developer, I can build products fast but marketing? Not my thing. A9 generated my Product Hunt promo video in minutes—saved me a whole week!",
    author: "David Miller",
    role: "Indie Developer / One Person Company",
    avatar: avatarDavid,
  },
  {
    quote: "A9 really knows how to tell a product story. The video it generated was professional and showed my real UI—investors asked about valuation right after!",
    author: "Jessica Thompson",
    role: "Startup Founder",
    avatar: avatarJessica,
  },
  {
    quote: "Used to outsource product videos—waited a week, spent thousands. Now A9 does it in minutes, and the quality is even better!",
    author: "Ryan Anderson",
    role: "Startup Product Lead",
    avatar: avatarRyan,
  },
  {
    quote: "Super easy to use, zero learning curve. I just entered my website URL and A9 extracted all the key selling points perfectly!",
    author: "Emily Carter",
    role: "Solo Entrepreneur / OPC",
    avatar: avatarEmily,
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (url: string) => {
    const encodedUrl = encodeURIComponent(url);
    window.location.href = `https://app.a9ai.ai?url=${encodedUrl}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={a9Logo} alt="A9 Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-foreground">A9</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Chat Input */}
      <section className="container mx-auto px-4 pt-16 pb-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Marketing Video Generator</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              A9,
            </span>
            {" "}Generate Product Videos in Minutes
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Make your product story stand out on Product Hunt, YouTube, and TikTok
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
            The marketing assistant for indie makers, OPCs, and startup teams
          </p>

          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Pain Points Header */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto bg-primary rounded-2xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center md:text-left md:pl-6 lg:pl-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full mb-6">
                <span className="text-sm text-foreground font-medium">The Creator's Dilemma</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
                You built the product,<br className="hidden md:block" /><span className="text-foreground">but how do you sell it?</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 mb-8">
                AI lets you build a product in minutes—but how do you market it? How do you create a compelling promo video that tells your story?
              </p>
              
              {/* Arrow indicator */}
              <div className="hidden md:flex">
                <svg className="w-6 h-6 text-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex justify-center md:justify-end md:pr-6 lg:pr-10">
              <img 
                src={painPointIllustration} 
                alt="Creator struggling with marketing challenges" 
                className="w-full max-w-lg lg:max-w-xl rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto bg-accent-orange rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">A9 Has You Covered</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Instant Generation"
              description="Just enter your website URL—AI analyzes your product and creates professional demo videos. No video editing experience needed."
            />
            <FeatureCard
              icon={Target}
              title="Compelling Storytelling"
              description="Automatically builds story scripts based on proven marketing frameworks, ensuring every video is engaging, logical, and persuasive."
            />
            <FeatureCard
              icon={Rocket}
              title="Real UI Showcase"
              description="Records and displays your actual product interface, showing real functionality—not AI-fabricated flashy scenes. More credible, more professional."
            />
            <FeatureCard
              icon={Video}
              title="Multi-Platform & Marketing Assets"
              description="Auto-adapts to Product Hunt, YouTube, TikTok specs. One-click generation of titles, descriptions, and tags for each platform."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Brand Consistency"
              description="Automatically extracts brand elements, colors, and style from your website to ensure videos match your brand identity perfectly."
            />
            <FeatureCard
              icon={Sparkles}
              title="AI Optimization"
              description="Uses AI to optimize video pacing, transitions, and visual effects—making your product showcase more professional and eye-catching."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Use Cases</h2>
          <p className="text-muted-foreground">Whatever the need, A9 delivers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <UseCaseCard
            number="01"
            title="Product Launch"
            description="Create high-quality promo videos for Product Hunt, Hacker News, and other launch platforms to maximize visibility."
          />
          <UseCaseCard
            number="02"
            title="Feature Updates"
            description="Quickly create feature announcement videos to notify existing users and attract new ones."
          />
          <UseCaseCard
            number="03"
            title="Growth & Acquisition"
            description="Low-cost, high-efficiency traffic acquisition on TikTok, YouTube Shorts, Instagram Reels, and more."
          />
          <UseCaseCard
            number="04"
            title="Investor Pitches"
            description="Create polished demo videos that clearly communicate your product value to investors in minutes."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto bg-vision-bg rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full mb-6">
              <span className="text-sm text-foreground font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Founders Love <span className="text-foreground font-black">A9</span>
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Hear what they have to say
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade as you grow
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
          <PricingTable />
        </div>
      </section>

      {/* CTA Section */}
      {/* Vision Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto bg-vision-bg rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px]">
          <div className="grid md:grid-cols-2 items-center h-full min-h-[400px] md:min-h-[500px]">
            {/* Left: Text content */}
            <div className="text-center md:text-left p-16 md:p-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Our Vision</span>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Build with <span className="text-foreground font-bold">Lovable</span>
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight">
                Sell with <span className="text-primary font-normal">A9</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Make selling as easy as building
              </p>
            </div>
            
            {/* Right: Image */}
            <div className="flex justify-end h-full">
              <img 
                src={visionIllustration} 
                alt="Abstract flowing ribbon decoration" 
                className="h-full w-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Ready to get your product seen by more people?
          </h2>
          <p className="text-muted-foreground mb-8">
            Enter your website URL and experience AI-powered marketing video generation
          </p>
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={a9Logo} alt="A9 Logo" className="w-8 h-8" />
              <span className="font-bold text-foreground">A9</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:support@a9ai.ai" className="hover:text-primary transition-colors">
                Contact us: support@a9ai.ai
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 A9. Make selling as easy as building.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
