const checkFilters = (
  query: Partial<{ [key: string]: string | string[] }>
): string => {
  let category = "&with_genres=";
  if (query["category"]) {
    if (Array.isArray(query["category"])) {
      category += query["category"].join(",");
    } else {
      category += query["category"];
    }
  } else {
    category = "";
  }

  let stars = "&vote_count.gte=";
  if (query["starts"]) {
    stars += query["stars"];
  } else {
    stars = "";
  }

  let sort = "&sort_by=";
  if (query["sort"]) {
    if (query["sort"] == "a-z") {
      sort += "title.asc";
    } else if (query["sort"]) {
      sort += "title.desc";
    } else {
      sort = "";
    }
  } else {
    sort = "";
  }

  return `${category}${stars}${sort}`;
};

export default checkFilters;
