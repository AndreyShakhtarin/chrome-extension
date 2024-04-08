import CarGurusAdapter from "@/ParsersSitesUrls/Adapter/CarGurusAdapter.js";
import AutoTradeAdapter from "@/ParsersSitesUrls/Adapter/AutoTradeAdapter.js";
import G3MarketingAdapter from "@/ParsersSitesUrls/Adapter/G3MarketingAdapter.js";
import AstonBarclayAdapter from "@/ParsersSitesUrls/Adapter/AstonBarclayAdapter.js";

export default function RegisterAdapters ()  {
    return [
        new CarGurusAdapter(),
        new AutoTradeAdapter(),
        new G3MarketingAdapter(),
        new AstonBarclayAdapter(),
    ]
}