import { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export function ReplyForm({ onSubmit }: Props) {
  const [text, setText] = useState("");

  return (
    <div className="mt-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a reply..."
        className="w-full resize-none rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        rows={3}
      />

      <div className="mt-2 flex justify-end">
        <button
          onClick={() => {
            if (text.trim()) {
              onSubmit(text);
              setText("");
            }
          }}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
