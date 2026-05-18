"use client";

import { useState } from "react";
import { AeronCacheClient } from "@bhf/aeron-cache-embedded-client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CacheExample() {
  const [host, setHost] = useState("localhost");
  const [httpPort, setHttpPort] = useState("41917");
  const [wsPort, setWsPort] = useState("40699");
  const [cacheName, setCacheName] = useState("my-starter-cache");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Initialize client dynamically based on state
  const getClient = () => {
    return new AeronCacheClient(`http://${host}:${httpPort}`, `ws://${host}:${wsPort}`);
  };

  const handleCreateCache = async () => {
    setLoading(true);
    setStatus("Creating cache...");
    try {
      const client = getClient();
      const response = await client.createCache(cacheName);
      setStatus(`Cache created: ${JSON.stringify(response)}`);
    } catch (err: any) {
      setStatus(`Error: ${err.message || "Failed to create cache"}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePutItem = async () => {
    setLoading(true);
    setStatus("Putting item...");
    try {
      const client = getClient();
      const response = await client.putItem(cacheName, key, value);
      setStatus(`Item put: ${JSON.stringify(response)}`);
    } catch (err: any) {
      setStatus(`Error: ${err.message || "Failed to put item"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl tracking-tight font-semibold">Aeron Cache Operations</CardTitle>
        <CardDescription className="text-muted-foreground/80">Interact with your embedded cache instance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
          <div className="space-y-2">
            <Label htmlFor="host" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Host</Label>
            <Input 
              id="host" 
              className="h-8 text-xs bg-background/50"
              value={host} 
              onChange={(e) => setHost(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="httpPort" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">HTTP Port</Label>
            <Input 
              id="httpPort" 
              className="h-8 text-xs bg-background/50"
              value={httpPort} 
              onChange={(e) => setHttpPort(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wsPort" className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">WS Port</Label>
            <Input 
              id="wsPort" 
              className="h-8 text-xs bg-background/50"
              value={wsPort} 
              onChange={(e) => setWsPort(e.target.value)} 
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="cacheName" className="text-sm font-medium text-muted-foreground">Cache Name</Label>
          <div className="flex gap-3">
            <Input 
              id="cacheName" 
              className="bg-background/50 border-border/50 focus:border-primary/50 transition-all"
              value={cacheName} 
              onChange={(e) => setCacheName(e.target.value)} 
            />
            <Button onClick={handleCreateCache} disabled={loading} className="px-6 font-medium">
              Create
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="key" className="text-sm font-medium text-muted-foreground">Key</Label>
            <Input 
              id="key" 
              className="bg-background/50 border-border/50 focus:border-primary/50 transition-all"
              placeholder="e.g. user:1" 
              value={key} 
              onChange={(e) => setKey(e.target.value)} 
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="value" className="text-sm font-medium text-muted-foreground">Value</Label>
            <Input 
              id="value" 
              className="bg-background/50 border-border/50 focus:border-primary/50 transition-all"
              placeholder="e.g. John Doe" 
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
            />
          </div>
        </div>
        
        <Button className="w-full font-semibold shadow-lg shadow-primary/10 transition-transform active:scale-[0.98]" onClick={handlePutItem} disabled={loading || !key}>
          Put Item
        </Button>

        {status && (
          <div className="mt-6 p-4 bg-background/50 border border-border/50 rounded-lg text-[11px] font-mono leading-relaxed break-all text-muted-foreground whitespace-pre-wrap">
            <span className="text-primary/70 mr-2">➜</span>{status}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
