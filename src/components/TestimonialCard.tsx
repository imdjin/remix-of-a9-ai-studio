 import { Quote } from "lucide-react";
 
 interface TestimonialCardProps {
   quote: string;
   author: string;
   role: string;
   avatar?: string | React.ReactNode;
 }
 
 export const TestimonialCard = ({ quote, author, role, avatar }: TestimonialCardProps) => {
   return (
    <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-300">
      <Quote className="h-8 w-8 text-accent-orange mb-4 opacity-80" />
       <p className="text-foreground leading-relaxed mb-6">{quote}</p>
       <div className="flex items-center gap-3">
         {typeof avatar === "string" && avatar.startsWith("/") || typeof avatar === "string" && avatar.includes("assets") ? (
           <img 
             src={avatar} 
             alt={author} 
             className="w-10 h-10 rounded-full object-cover"
           />
         ) : (
           <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
             {typeof avatar === "string" ? avatar : author.charAt(0)}
           </div>
         )}
         <div>
          <p className="text-xs font-medium text-foreground">{author}</p>
          <p className="text-[10px] text-muted-foreground">{role}</p>
         </div>
       </div>
     </div>
   );
 };