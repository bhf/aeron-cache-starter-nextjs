"use client";

import { Terminal, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function BrewInstall() {
  const [copied, setCopied] = useState(false);
  const command = "brew tap bhf/aeroncache && brew install aeron-cache";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground ml-1">
        <Terminal className="size-4" />
        <span>Install Backend Cache</span>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative flex items-center justify-between bg-card border border-border/50 rounded-lg px-4 py-3 font-mono text-sm shadow-sm backdrop-blur-sm">
          <code className="text-foreground flex flex-col sm:flex-row sm:gap-2">
            <span className="text-primary/70">brew tap bhf/aeroncache</span>
            <span className="hidden sm:inline text-muted-foreground/50">&&</span>
            <span className="text-primary/70">brew install aeron-cache</span>
          </code>
          <Button 
            variant="ghost" 
            size="icon" 
            className="size-8 text-muted-foreground hover:text-foreground shrink-0"
            onClick={copyToClipboard}
          >
            <Copy className={`size-4 transition-transform ${copied ? "scale-0" : "scale-100"}`} />
            {copied && <span className="absolute text-[10px] font-bold text-primary animate-in fade-in zoom-in">Done</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}
