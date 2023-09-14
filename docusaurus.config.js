const ssrTemplate = require("./src/internals/ssr.template")
const customFields = require("./src/config/customFields")
const markdownPlugins = require("./plugins/markdown-plugins")

const config = {
  title: "QuestDB",
  tagline: "QuestDB is the fastest open source time series database",
  url: `https://${customFields.domain}`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.png",
  organizationName: "QuestDB",
  projectName: "questdb",
  customFields,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  plugins: [
    require.resolve("./plugins/fetch-latest-release/index"),
    require.resolve("./plugins/fetch-repo/index"),
    require.resolve("./plugins/remote-repo-example/index"),
    require.resolve("./plugins/fetch-contributors-count/index"),
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    require.resolve("./plugins/delay-code-block-appearance"),
    require.resolve("./plugins/glossary"),
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#21222c",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
    [
      require.resolve("./plugins/blog"),
      {
        ...markdownPlugins,
        feedOptions: {
          type: "all",
          copyright: customFields.copyright,
        },
        showReadingTime: true,
        postsPerPage: 1000,
        blogPostComponent: require.resolve(
          "./src/theme/BlogPostPage/index.tsx",
        ),
        blogTagsPostsComponent: require.resolve(
          "./src/theme/BlogListPage/index.tsx",
        ),
      },
    ],
    ...[
      process.env.NODE_ENV === "development"
        ? require.resolve("./plugins/click-through-debug-iframe")
        : null,
    ],
  ].filter(Boolean),

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "/img/og.gif",

    ...(typeof process.env.GOOGLE_ANALYTICS_ID === "string"
      ? {
          gtag: {
            trackingID: process.env.GOOGLE_ANALYTICS_ID,
            anonymizeIP: true,
          },
        }
      : {}),

    prism: {
      defaultLanguage: "questdb-sql",
      additionalLanguages: [
        "rust",
        "csharp",
        "julia",
        "cpp",
        "java",
        "ebnf",
        "ini",
        "toml",
        "ruby",
        "php",
      ],
      theme: require("./src/internals/prism-github"),
      darkTheme: require("./src/internals/prism-dracula"),
    },

    ...(typeof process.env.ALGOLIA_API_KEY === "string" &&
    typeof process.env.ALGOLIA_APP_ID === "string"
      ? {
          algolia: {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: "questdb",
            // Disable /search page
            searchPagePath: false,
          },
        }
      : {}),

    navbar: {
      title: " ",
      logo: {
        alt: "QuestDB",
        src: "/img/navbar/questdb.svg",
      },
      items: [
        {
          label: "Product",
          href: "#",
          items: [
            {
              label: "QuestDB Cloud",
              to: "/cloud/",
            },
            {
              label: "QuestDB Open Source",
              to: "/download/",
            },
            {
              label: "QuestDB Enterprise",
              to: "/enterprise/",
            },
            {
              label: "Use Cases",
              to: "/use-cases/",
            },
            {
              label: "Customers",
              to: "/customers/",
            },
            {
              label: "Roadmap",
              href: `https://github.com/orgs/questdb/projects/1/views/5`,
            },
          ],
        },
        {
          label: "Learn",
          href: "#",
          items: [
            {
              label: "Blog",
              to: "/blog/",
              activeBaseRegex: "/blog/?$",
            },
            {
              label: "Tutorials",
              to: "/blog/tags/tutorial/",
              activeBaseRegex: "/blog/tags/tutorial/?$",
            },
            {
              label: "Glossary",
              to: "/glossary/",
            },
            {
              label: "QuestDB Swag",
              to: "/community/",
            },
            {
              label: "Slack Community",
              to: customFields.slackUrl,
            },
          ],
        },
        {
          label: "Docs",
          to: "/docs/",
        },
        {
          label: "Pricing",
          to: "/pricing/",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Product",
          items: [
            {
              label: "Cloud",
              to: "/cloud/",
            },
            {
              label: "Open Source",
              to: "/download/",
            },
            {
              label: "Enterprise",
              to: "/enterprise/",
            },
            {
              label: "Use Cases",
              to: "/use-cases/",
            },
            {
              label: "Customers",
              to: "/customers/",
            },
            {
              label: "Roadmap",
              href: "https://github.com/orgs/questdb/projects/1/views/5",
            },
            {
              label: "Pricing",
              to: "/pricing/",
            },
          ],
        },
        {
          title: "Learn",
          items: [
            {
              label: "Docs",
              to: "/docs/",
            },
            {
              label: "Blog",
              to: "/blog/",
            },
            {
              label: "Tutorials",
              to: "/blog/tags/tutorial/",
            },
            {
              label: "QuestDB Swag",
              to: "/community/",
            },
            {
              label: "Slack Community",
              to: customFields.slackUrl,
            },
            {
              label: "Glossary",
              to: "/glossary/",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: customFields.twitterUrl,
            },
            {
              label: "GitHub",
              href: customFields.githubUrl,
            },
            {
              label: "StackOverflow",
              to: customFields.stackoverflowUrl,
            },
            {
              label: "Linkedin",
              href: customFields.linkedInUrl,
            },
            {
              label: "YouTube",
              to: customFields.videosUrl,
            },
            {
              label: "Reddit",
              href: customFields.redditUrl,
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About us",
              to: "/about-us/",
            },
            {
              label: "Careers",
              to: "/careers/",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // blog is enabled through a custom plugin, so we disable it from preset
        // ./plugins/blog/index.js
        blog: false,
        docs: {
          ...markdownPlugins,
          sidebarPath: require.resolve("./sidebars.js"),
        },

        sitemap: {
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: true,
        },
        theme: {
          customCss: [require.resolve("./src/css/_global.css")],
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
