import newsData from "@/data/marketNews.json";
import { type MarketNews } from "@/shared/types/marketNews";
import { NewsItem } from "./NewsItem";

export const MarketIntelligence = () => {
  const news = newsData as MarketNews[];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Market Intelligence</h2>

      <div>
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};
