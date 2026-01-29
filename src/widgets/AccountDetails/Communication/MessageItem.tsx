import { type Message } from "@/shared/types/message";
import { useState } from "react";
import { ReplyForm } from "./ReplyForm";

interface Props {
  message: Message;
  onReply: (messageId: string, text: string) => void;
}

export function MessageItem({ message, onReply }: Props) {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <div className="rounded-lg border border-gray-100 p-3 sm:p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="font-medium text-gray-900">{message.author}</span>
        <span className="text-xs text-gray-500">
          {new Date(message.createdAt).toLocaleDateString()}
        </span>
      </div>

      <p className="mb-3 text-sm text-gray-700">{message.text}</p>

      <button
        onClick={() => setIsReplying((v) => !v)}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        Reply
      </button>

      {isReplying && (
        <ReplyForm
          onSubmit={(text) => {
            onReply(message.id, text);
            setIsReplying(false);
          }}
        />
      )}

      {message.replies.length > 0 && (
        <div className="mt-4 space-y-2 border-l-2 border-gray-100 pl-4">
          {message.replies.map((reply) => (
            <div key={reply.id}>
              <div className="text-xs text-gray-500">
                {reply.author} •{" "}
                {new Date(reply.createdAt).toLocaleDateString()}
              </div>
              <p className="text-sm text-gray-700">{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
