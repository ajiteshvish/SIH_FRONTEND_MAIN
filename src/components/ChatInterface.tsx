import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the IndiTwin AI Assistant. Describe your traffic scenario, and I'll help you create a simulation. For example, you can tell me about peak hour congestion, road closures, or new signal timing you'd like to test.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // 🧠 Ek hi session ke liye stable threadId – isse LangGraph memory handle karega
  const [threadId] = useState(
    () => (crypto as any).randomUUID?.() ?? String(Date.now())
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: message };

    // Show user message immediately
    setMessages((prev) => [...prev, userMessage]);
    const toSend = message; // local copy
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // 👇 Ab thread_id bhi bhej rahe hain
        body: JSON.stringify({
          message: toSend,
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 overflow-hidden flex flex-col max-w-4xl mx-auto w-full">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-8 space-y-6">
          {messages.length === 1 && (
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
                {msg.role === "assistant" ? (
                  <div className="text-[15px] leading-relaxed prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                )}
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
  );
};
