 import { Check, Minus } from "lucide-react";
 
 const plans = ["免费版", "专业版", "旗舰版"];
 
 const features = [
   {
     name: "海外月付价格（美元）",
     values: ["0", "19", "59"],
   },
   {
     name: "海外年付价格（美元）",
     values: ["0", "199", "499"],
   },
   {
     name: "AI点数",
     values: ["100点/月", "1000点/月", "5000点/月"],
   },
   {
     name: "AI生成视频数量",
     values: ["3个", "不限", "不限"],
   },
   {
     name: "去水印导出",
     values: [false, true, true],
   },
   {
     name: "导出清晰度",
     values: ["720p", "1080p", "1080p / 2K（可选）"],
   },
   {
     name: "策划方案",
     values: ["1套", "3套", "3套"],
   },
   {
     name: "高转化模板库",
     values: [false, false, true],
   },
   {
     name: "品牌资产包",
     values: [false, "3套", "不限"],
   },
   {
     name: "营销平台适配物料导出",
     values: [false, false, true],
   },
   {
     name: "客服服务",
     values: [false, "24小时反馈", "极速反馈"],
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