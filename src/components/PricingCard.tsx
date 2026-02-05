 import { Check, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 interface PricingFeature {
   name: string;
   included: boolean | string;
 }
 
 interface PricingCardProps {
   name: string;
   monthlyPrice: number | string;
   yearlyPrice?: number | string;
   features: PricingFeature[];
   popular?: boolean;
   buttonText?: string;
 }
 
 export const PricingCard = ({
   name,
   monthlyPrice,
   yearlyPrice,
   features,
   popular = false,
  buttonText = "Get Started",
}: PricingCardProps) => {
   return (
     <div
       className={`relative p-6 bg-card border rounded-2xl transition-all duration-300 ${
         popular
           ? "border-primary shadow-glow scale-105"
           : "border-border shadow-soft hover:shadow-glow"
       }`}
     >
        {popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full">
            Most Popular
         </div>
       )}
       <div className="text-center mb-6">
         <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
         <div className="flex items-baseline justify-center gap-1">
           <span className="text-4xl font-bold text-foreground">
             {monthlyPrice === 0 ? "Free" : `$${monthlyPrice}`}
           </span>
           {monthlyPrice !== 0 && (
             <span className="text-muted-foreground">/月</span>
           )}
         </div>
         {yearlyPrice && (
           <p className="text-sm text-muted-foreground mt-1">
             年付 ${yearlyPrice}/年
           </p>
         )}
       </div>
 
       <ul className="space-y-3 mb-6">
         {features.map((feature, index) => (
           <li key={index} className="flex items-center gap-3">
             {feature.included === true ? (
               <Check className="h-5 w-5 text-primary flex-shrink-0" />
             ) : feature.included === false ? (
               <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0" />
             ) : (
               <Check className="h-5 w-5 text-primary flex-shrink-0" />
             )}
             <span
               className={`text-sm ${
                 feature.included ? "text-foreground" : "text-muted-foreground"
               }`}
             >
               {typeof feature.included === "string"
                 ? feature.included
                 : feature.name}
             </span>
           </li>
         ))}
       </ul>
 
       <Button
         className={`w-full ${
           popular
             ? "bg-gradient-primary hover:shadow-glow"
             : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
         }`}
       >
         {buttonText}
       </Button>
     </div>
   );
 };