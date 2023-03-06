export const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/search/",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key":
        "7bffe11464mshc1dcc0c98f5e7abp1ad4afjsn87b2e66ee018",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };