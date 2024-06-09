import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
type keyword = { word: HTMLFormElement };
function searchTours(limit?: number) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState<string[]>([]);
  const [word, setWord] = useState(searchParams.get("word") || "");
  const params = new URLSearchParams(searchParams);
  if (sort !== "") {
    params.set("sort", sort);
  } else if (sort === "") {
    params.delete("sort");
  }
  if (word) {
    params.set("keyword", word);
  } else if (sort === "") {
    params.delete("keyword");
  }
  if (search.length > 0) {
    search.forEach((e) => {
      const index = e.indexOf("=");
      const key = e.slice(0, index);
      const value = e.slice(index + 1);
      if (value === "0") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
  } else if (sort === "") {
    params.delete("keyword");
  }
  replace(`${pathname}?${params}`);
  return { setSort, word, setWord, search, setSearch };
}

export default searchTours;
