import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Sparkles } from "lucide-react";

export const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm the IndiTwin AI Assistant. Describe your traffic scenario, and I'll help you create a simulation. For example, you can tell me about peak hour congestion, road closures, or new signal timing you'd like to test.",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { role: "user", content: message }]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I understand your scenario. Let me create a simulation based on that. What specific metrics would you like to track? (e.g., average wait time, congestion levels, throughput)",
        },
      ]);
    }, 1000);
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

              {/* Suggestion Pills */}
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl mx-auto pt-8">
                {[
                  "Simulate rush hour traffic on Main Street",
                  "Test new signal timing at intersection 5",
                  "Analyze impact of lane closure on Route 66",
                  "Predict congestion for upcoming event",
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(suggestion)}
                    className="p-4 text-left rounded-xl border border-border bg-card hover:bg-muted hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-foreground">{suggestion}</span>
                    </div>
                  </button>
                ))}
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
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>

              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">You</span>
                </div>
              )}
            </div>
          ))}
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
                onKeyPress={handleKeyPress}
                className="min-h-[60px] max-h-[200px] pr-12 resize-none rounded-2xl border-border bg-muted focus:border-primary focus:ring-1 focus:ring-primary text-[15px] leading-relaxed"
                rows={1}
              />
              <Button
                onClick={handleSend}
                disabled={!message.trim()}
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
