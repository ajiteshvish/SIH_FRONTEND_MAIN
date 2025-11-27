import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import ReactMarkdown from "react-markdown";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export const Chat = () => {
  const location = useLocation();
  const initialMessage = location.state?.initialMessage || "";
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the **IndiTwin AI Assistant**. Describe your traffic scenario, and I'll help you create a simulation.\n\n## What I can help with:\n\n1. Peak hour congestion analysis\n2. Road closures simulation\n3. Signal timing optimization\n\nYou can also use `markdown formatting` in your messages!\n\n---\n\nTry asking me something like:\n- *Simulate rush hour traffic*\n- **Test new signal timing**",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [threadId] = useState(
    () => (crypto as any).randomUUID?.() ?? String(Date.now())
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasAutoSent = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-send initial message from scene config
  useEffect(() => {
    if (initialMessage && !hasAutoSent.current) {
      hasAutoSent.current = true;
      setMessage(initialMessage);
      // Small delay to ensure UI is ready
      setTimeout(() => {
        handleSendMessage(initialMessage);
      }, 500);
    }
  }, [initialMessage]);

  const handleSendMessage = async (messageToSend: string) => {
    if (!messageToSend.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: messageToSend };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageToSend,
          thread_id: threadId,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data: { reply: string } = await res.json();

      const botMessage: ChatMessage = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops, I had trouble contacting the IndiTwin server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    handleSendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab="Chat" onTabChange={() => {}} showChatTab={true} />
      
      <section className="min-h-screen flex flex-col pt-16">
        <div className="flex-1 overflow-hidden flex flex-col max-w-4xl mx-auto w-full">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-8 space-y-6">
            {messages.length === 1 && !initialMessage && (
              <div className="text-center space-y-8 py-12 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow-primary">
                  <Bot className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                    IndiTwin AI Assistant
                  </h2>
                  <p className="text-muted-foreground">
                    Your intelligent companion for traffic simulation and analysis
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-4 animate-slide-up ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <div className={`text-[15px] leading-relaxed ${msg.role === "assistant" ? "prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:my-2 prose-p:text-foreground prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-li:text-foreground prose-code:bg-primary/20 prose-code:text-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-primary/10 prose-pre:p-3 prose-pre:rounded-lg prose-strong:font-bold prose-strong:text-foreground prose-em:italic prose-em:text-foreground prose-a:text-primary prose-a:underline prose-hr:border-border" : "prose prose-sm prose-invert max-w-none prose-headings:text-primary-foreground prose-headings:font-bold prose-p:my-1 prose-p:text-primary-foreground prose-strong:font-bold prose-strong:text-primary-foreground prose-em:italic prose-em:text-primary-foreground prose-code:bg-primary-foreground/20 prose-code:text-primary-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-li:text-primary-foreground"}`}>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">Y</span>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start gap-4 animate-slide-up">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow-primary">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="max-w-[80%] rounded-2xl px-5 py-3 bg-muted text-foreground">
                  <p className="text-[15px] leading-relaxed">Thinking…</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-6">
              <div className="relative max-w-3xl mx-auto">
                <Textarea
                  placeholder="Describe your traffic scenario..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="min-h-[60px] max-h-[200px] pr-12 resize-none rounded-2xl border-border bg-muted focus:border-primary focus:ring-1 focus:ring-primary text-[15px] leading-relaxed"
                  rows={1}
                />
                <Button
                  onClick={handleSend}
                  disabled={!message.trim() || loading}
                  size="icon"
                  className="absolute right-2 bottom-2 h-9 w-9 rounded-xl bg-gradient-primary hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-3">
                IndiTwin can make mistakes. Verify critical information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
