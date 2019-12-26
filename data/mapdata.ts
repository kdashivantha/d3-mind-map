export default {
  title: "learn anything - programming - programming languages - python",
  nodes: [
    {
      id: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd",
      text: "python",
      url: "http://www.wikiwand.com/en/Python_(programming_language)",
      fx: -13.916222252976013,
      fy: -659.1641376795345,
      nodes: [
        {
          id: "61be2afd-816a-4b50-9c46-bee46adf68cc",
          text: "",
          url: "https://www.reddit.com/r/Python/",
          fx: 176.083777747024,
          fy: -665.1641376795345,
          nodes: [],
          category: "reddit",
          color: "rgba(255, 189, 10, 1.0)"
        },
        {
          id:"a3814ce9-ee78-431a-b44e-8fcf5d66ef79",
          text: "source",
          note:
            "original python implementation in c, compiles python code into byte code and interprets the byte code in a evaluation loop",
          url: "https://github.com/python/cpython",
          fx: 176.083777747024,
          fy: -625.1641376795345,
          nodes: [],
          category: "github",
          color: "rgba(36, 170, 255, 1.0)"
        }
      ],
      category: "wiki"
    },
    {
      id: "df788f47-b1d8-41a7-b529-6c24899f4c9f",
      text: "help",
      url: "",
      fx: 154.3247731601375,
      fy: -429.73700786748157,
      nodes: [
        {
          id:"fe72536e-b6b2-4b88-a9f9-31af5ae78fad",
          text: "awesome python",
          url: "https://github.com/vinta/awesome-python",
          fx: 291.3247731601375,
          fy: -546.2370078674815,
          nodes: [],
          category: "github",
          color: "rgba(175, 54, 242, 1.0)"
        }
      ]
    },
    {
      id: "9066b5e5-5021-4e65-bb8e-9a1ff702956c",
      text: "articles",
      url: "",
      fx: 455.7839253819375,
      fy: -183.5539283546699,
      nodes: [
        {
          id: "5389f2e0-26eb-41ea-83e1-4131531fe081",
          text:
            "16: the history behind the decision to move python to github  ️",
          url:
            "https://snarky.ca/the-history-behind-the-decision-to-move-python-to-github/",
          fx: 617.7839253819375,
          fy: -245.0539283546699,
          nodes: [],
          category: "article",
          color: "rgba(175, 54, 242, 1.0)"
        }
      ]
    },
    {
      id: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
      text: "basics",
      note: "",
      url: "",
      fx: -98.5231997717085,
      fy: -60.07462866512333,
      nodes: [
      ]
    },
    {
      id: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957",
      text: "package manager",
      url: "http://www.wikiwand.com/en/Package_manager",
      //fx: -346.2056231217888,
      //fy: 39.035120728630204,
      nodes: [],
      category: "wiki"
    },
    {
      id: "16bb6b97-ab93-4536-ad68-50b95c7d4661",
      text: "python libraries",
      //fx: -78.69331502906573,
      //fy: 100.14771605920942,
      nodes: [],
      category: "mindmap"
    },
    {
      id: "e5ab6e94-42e6-498c-b8c0-da34b4cc690b",
      text: "pip",
      url: "https://pypi.python.org/pypi/pip",
      //fx: -317.77054724755226,
      //fy: 153.56934975958518,
      nodes: []
    }
  ],
  connections: [
    {
      source: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd",
      target: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1"
    },
    {
      source: "df788f47-b1d8-41a7-b529-6c24899f4c9f",
      target: "ab60a5d0-611e-49aa-9278-5b9b1a862cdd"
    },
    {
      source: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
      target: "16bb6b97-ab93-4536-ad68-50b95c7d4661"
    },
    {
      source: "4b6bd0db-f2e9-4ab8-a966-aed4413d3da1",
      target: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957"
    },
    {
      source: "9b53fa57-dbcd-4ac3-bca5-637ee9eae957",
      target: "e5ab6e94-42e6-498c-b8c0-da34b4cc690b"
    },
    {
      source: "9066b5e5-5021-4e65-bb8e-9a1ff702956c",
      target: "df788f47-b1d8-41a7-b529-6c24899f4c9f"
    }
  ]
};
