import { useState } from "react";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarJessica from "@/assets/avatar-jessica.jpg";
import avatarRyan from "@/assets/avatar-ryan.jpg";
import avatarEmily from "@/assets/avatar-emily.jpg";
import painPointIllustration from "@/assets/pain-point-illustration.png";
import visionIllustration from "@/assets/vision-illustration.png";
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
    quote: "作为独立开发者，我能快速做产品，但真的不会营销。A9 帮我快速生成了 Product Hunt 的宣传片，直接省下一周时间！",
    author: "David Miller",
    role: "独立开发者 / One Person Company",
    avatar: avatarDavid,
  },
  {
    quote: "A9 太懂怎么讲产品故事了。生成的视频不仅专业，还真实展示了我的 UI 界面，投资人看完直接问估值！",
    author: "Jessica Thompson",
    role: "初创公司创始人",
    avatar: avatarJessica,
  },
  {
    quote: "以前做一个产品视频要找外包，等一周，花几千块。现在用 A9 几分钟搞定，而且质量更好！",
    author: "Ryan Anderson",
    role: "创业团队产品负责人",
    avatar: avatarRyan,
  },
  {
    quote: "简单好上手，完全零门槛。我只输入了官网链接，A9 就帮我把产品卖点提炼得清清楚楚！",
    author: "Emily Carter",
    role: "独立创业者 / OPC",
    avatar: avatarEmily,
  },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    toast.success("正在分析你的网站...");
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      toast.success("视频生成成功！");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A9</span>
            </div>
            <span className="text-xl font-bold text-foreground">A9</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              功能
            </a>
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              使用场景
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              用户评价
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              价格
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Chat Input */}
      <section className="container mx-auto px-4 pt-16 pb-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI驱动的营销视频生成器</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              A9，
            </span>
            几分钟生成产品宣传视频
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            让你的产品故事在 Product Hunt、YouTube 和 TikTok 上脱颖而出
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
            独立创业者、OPC、创业团队都在用的产品营销助手
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
                <span className="text-sm text-foreground font-medium">创作者的困境</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
                产品做出来了，<br className="hidden md:block" /><span className="text-foreground">但是怎么卖？</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 mb-8">
                用 AI 几分钟可以"做产品"，但如何"卖产品"？我们如何几分钟做一个能讲好故事的产品宣传片？
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
                alt="创作者在营销方面遇到的困境" 
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">A9来帮你解决</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="快速生成"
              description="只需输入官网URL，AI自动分析产品特点，生成专业级演示视频，无需任何视频制作经验"
            />
            <FeatureCard
              icon={Target}
              title="精彩叙事"
              description="基于营销框架自动构建故事脚本，确保每个视频都有吸引力、逻辑性和说服力"
            />
            <FeatureCard
              icon={Rocket}
              title="真实UI展示"
              description="直接录制并展示你的真实产品界面，让用户看到实际功能，而非AI虚构的华丽场景，更可信、更专业"
            />
            <FeatureCard
              icon={Video}
              title="多平台适配和营销物料生成"
              description="自动适配Product Hunt、Youtube、Tiktok等平台尺寸规格，还能一键生成上架所需的标题、描述、标签等辅助物料，省时省力"
            />
            <FeatureCard
              icon={TrendingUp}
              title="品牌一致性"
              description="自动提取官网的品牌元素、色彩和风格，确保视频与你的品牌形象完美契合"
            />
            <FeatureCard
              icon={Sparkles}
              title="AI优化"
              description="利用AI技术优化视频节奏、转场和视觉效果，让你的产品展示更加专业吸睛"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">典型使用场景</h2>
          <p className="text-muted-foreground">无论何种需求，A9 都能完美胜任</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <UseCaseCard
            number="01"
            title="产品首发"
            description="在 Product Hunt、Hacker News 等平台发布时，用高质量宣传视频引爆关注度"
          />
          <UseCaseCard
            number="02"
            title="功能更新"
            description="快速制作新功能介绍视频，通知现有用户，同时吸引潜在新用户"
          />
          <UseCaseCard
            number="03"
            title="增长获客"
            description="在 TikTok、YouTube Shorts、Instagram Reels 等短视频平台进行低成本高效率的流量获取"
          />
          <UseCaseCard
            number="04"
            title="融资路演"
            description="制作专业精炼的演示视频，在几分钟内向投资人清晰展示产品价值"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto bg-vision-bg rounded-2xl p-12 md:p-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full mb-6">
              <span className="text-sm text-foreground font-medium">用户评价</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              创业者们都在用 <span className="text-foreground font-black">A9</span>
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              听听他们怎么说
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
            <span className="text-sm text-primary font-medium">价格方案</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            选择适合你的 <span className="bg-gradient-primary bg-clip-text text-transparent">方案</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从免费开始，按需升级
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
                <span className="text-sm text-primary font-medium">我们的愿景</span>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                做产品用 <span className="text-foreground font-bold">Lovable</span>
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight">
                卖产品用 <span className="text-primary font-normal">A9</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                让卖产品像做产品一样简单
              </p>
            </div>
            
            {/* Right: Image */}
            <div className="flex justify-end h-full">
              <img 
                src={visionIllustration} 
                alt="抽象流动丝带装饰图" 
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
            准备好让你的产品被更多人看见了吗？
          </h2>
          <p className="text-muted-foreground mb-8">
            输入你的官网链接，立即体验 AI 驱动的营销视频生成
          </p>
          <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A9</span>
              </div>
              <span className="font-bold text-foreground">A9</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:support@a9ai.ai" className="hover:text-primary transition-colors">
                联系我们：support@a9ai.ai
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 A9，卖产品像做产品一样简单。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
