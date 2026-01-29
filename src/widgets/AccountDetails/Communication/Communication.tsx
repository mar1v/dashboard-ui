import { type Message } from "@/shared/types/message";
import { useState } from "react";
import { MessageItem } from "./MessageItem";

interface Props {
  messages: Message[];
}

export function Communication({ messages }: Props) {
  const [items, setItems] = useState<Message[]>(messages);

  const handleReply = (messageId: string, text: string) => {
    setItems((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              replies: [
                ...msg.replies,
                {
                  id: crypto.randomUUID(),
                  author: "You",
                  text,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : msg,
      ),
    );
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-3 sm:p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Communication
      </h3>

      <div className="space-y-4">
        {items.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            onReply={handleReply}
          />
        ))}
      </div>
    </section>
  );
}
