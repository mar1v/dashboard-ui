import { type MarketNews } from "@/shared/types/marketNews";
import { useState } from "react";

interface NewsItemProps {
  news: MarketNews;
}

export const NewsItem = ({ news }: NewsItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b py-3">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-sm font-medium">{news.title}</h3>
          <p className="text-xs text-gray-500">{news.summary}</p>
        </div>

        <button
          className="text-blue-600 text-xs whitespace-nowrap"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Hide" : "Read more"}
        </button>
      </div>

      {expanded && (
        <div className="mt-2 text-xs text-gray-600">
          <p>{news.details}</p>
          <p className="mt-1 text-gray-400">
            {new Date(news.date).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};
