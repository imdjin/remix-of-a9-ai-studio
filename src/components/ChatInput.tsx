import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSubmit: (url: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSubmit, isLoading }: ChatInputProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="relative flex items-center gap-2">
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your website URL to generate a product demo video..."
          className="flex-1 h-14 px-6 text-base bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="lg"
          disabled={isLoading || !url.trim()}
          className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};
