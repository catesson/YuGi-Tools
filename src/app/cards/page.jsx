"use Client";
import { CardResult } from "../component/Search/CardResult";
import { SearchForm } from "../component/Search/SearchForm";
import { SearchContextProvider } from "../component/Search/SearchContext";

export default function PageCards() {
  return (
    <div className="flex flex-col">
      <SearchContextProvider>
        <div>
          <SearchForm></SearchForm>
        </div>
        <CardResult />
      </SearchContextProvider>
    </div>
  );
}
