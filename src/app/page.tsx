import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AeronCacheClient } from "@bhf/aeron-cache-embedded-client";
import { CacheExample } from "@/components/cache-example";
import { ModeToggle } from "@/components/mode-toggle";
import { BrewInstall } from "@/components/brew-install";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-background text-foreground transition-colors duration-300">
      <div className="fixed top-8 right-8 z-50 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild title="View on GitHub">
          <a href="https://github.com/bhf/aeron-cache-embedded" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">View on GitHub</span>
          </a>
        </Button>
        <ModeToggle />
      </div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(var(--primary-rgb),0.05),transparent)] pointer-events-none" />
      <main className="max-w-2xl w-full space-y-8 relative">
        <Card className="border-border/50 bg-card/50 backdrop-blur-md shadow-xl transition-all hover:shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Aeron Cache Starter</CardTitle>
            <CardDescription className="text-lg">
              Aeron Cache Embedded + Next.js + shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400">
              Welcome to the Aeron Cache starter! This project is pre-configured with the `@bhf/aeron-cache-embedded-client` library.
            </p>
            <BrewInstall />
          </CardContent>
        </Card>

        <CacheExample />
      </main>
    </div>
  );
}
