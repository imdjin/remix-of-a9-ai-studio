 import { Check, Minus } from "lucide-react";
 
const plans = ["Free", "Pro", "Enterprise"];

const features = [
  {
    name: "Monthly Price (USD)",
    values: ["$0", "$19", "$59"],
  },
  {
    name: "Annual Price (USD)",
    values: ["$0", "$199", "$499"],
  },
  {
    name: "AI Credits",
    values: ["100/month", "1,000/month", "5,000/month"],
  },
  {
    name: "AI-Generated Videos",
    values: ["3 videos", "Unlimited", "Unlimited"],
  },
  {
    name: "Watermark-Free Export",
    values: [false, true, true],
  },
  {
    name: "Export Resolution",
    values: ["720p", "1080p", "1080p / 2K (optional)"],
  },
  {
    name: "Marketing Plans",
    values: ["1 plan", "3 plans", "3 plans"],
  },
  {
    name: "High-Converting Templates",
    values: [false, false, true],
  },
  {
    name: "Brand Asset Packs",
    values: [false, "3 packs", "Unlimited"],
  },
  {
    name: "Platform-Specific Assets",
    values: [false, false, true],
  },
  {
    name: "Support",
    values: [false, "24h Response", "Priority Support"],
  },
];
 
 const renderValue = (value: string | boolean) => {
   if (value === true) {
     return (
       <div className="flex justify-center">
         <Check className="h-5 w-5 text-primary" />
       </div>
     );
   }
   if (value === false) {
     return (
       <div className="flex justify-center">
         <Minus className="h-5 w-5 text-muted-foreground" />
       </div>
     );
   }
   return <span className="text-foreground">{value}</span>;
 };
 
 export const PricingTable = () => {
   return (
     <div className="w-full overflow-x-auto">
       <table className="w-full border-collapse">
         <thead>
           <tr className="border-b border-border">
             <th className="py-4 px-4 text-left font-medium text-muted-foreground min-w-[180px]"></th>
             {plans.map((plan, index) => (
               <th
                 key={plan}
                className={`py-4 px-6 text-center font-bold text-lg min-w-[140px] ${
                  index === 1 
                     ? "text-primary-deep bg-primary-deep/10" 
                    : "text-foreground"
                 }`}
               >
                 {plan}
               </th>
             ))}
           </tr>
         </thead>
         <tbody>
           {features.map((feature, rowIndex) => (
             <tr
               key={feature.name}
               className={`border-b border-border ${
                 rowIndex % 2 === 0 ? "bg-secondary/30" : "bg-background"
               }`}
             >
              <td className="py-4 px-4 text-left text-sm text-muted-foreground">
                 {feature.name}
               </td>
               {feature.values.map((value, colIndex) => (
                 <td
                   key={colIndex}
                   className={`py-4 px-6 text-center ${
                    colIndex === 1 ? "bg-primary-deep/10" : ""
                   }`}
                 >
                   {renderValue(value)}
                 </td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 };