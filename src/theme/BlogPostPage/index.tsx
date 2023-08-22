import React from "react"
import Layout from "@theme/Layout"
import { Section } from "../../components/Section"
import Link from "@docusaurus/Link"
import { usePluralForm } from "@docusaurus/theme-common"
import { translate } from "@docusaurus/Translate"
import { MDXProvider } from "@mdx-js/react"
import type { Props, Metadata, FrontMatter } from "@theme/BlogPostPage"
import MDXComponents from "@theme/MDXComponents"
import Seo from "@theme/Seo"
import { ensureTrailingSlash } from "../../utils"
import { StructuredData } from "../../components/StructuredData"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./styles.module.css"
import { BlogCTA } from "../../components/BlogCTA"
import EditThisPage from "@theme/EditThisPage"
import customFields from "../../config/customFields"

function useReadingTimePlural() {
  const { selectMessage } = usePluralForm()
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat)
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          message: "One min read|{readingTime} min read",
        },
        { readingTime },
      ),
    )
  }
}

type MetadataWithSource = Metadata & { source: string }
type FrontMatterWithButtonText = FrontMatter & { buttonText: string }

function BlogPostPage(props: Props): JSX.Element {
  const { content: BlogPostContents } = props
  const { frontMatter, metadata } = BlogPostContents
  const { title, description } = metadata

  const readingTimePlural = useReadingTimePlural()
  const { siteConfig } = useDocusaurusContext()
  const {
    date,
    formattedDate,
    permalink,
    tags,
    source,
    editUrl,
    readingTime,
  } = metadata as MetadataWithSource
  const {
    author,
    image,
    keywords,
    buttonText,
  } = frontMatter as FrontMatterWithButtonText
  const authorURL = frontMatter.author_url ?? frontMatter.authorURL
  const authorTitle = frontMatter.author_title ?? frontMatter.authorTitle
  const authorImageURL =
    frontMatter.author_image_url ?? frontMatter.authorImageURL

  const contributeUrl =
    editUrl ??
    `${customFields.websiteGithubUrl}/edit/master/${source.replace(
      "@site",
      "",
    )}`

  return (
    <>
      <Seo {...{ keywords, image }} />
      <StructuredData>
        {{
          "@graph": [
            {
              "@type": "BreadcrumbList",
              name: "Blog post",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteConfig.url,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${siteConfig.url}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: title,
                },
              ],
            },
            {
              "@type": "BlogPosting",
              headline: title,
              url: permalink,
              datePublished: metadata.formattedDate,
              image,
              author: {
                "@type": "Person",
                name: author,
                url: authorURL,
                image: authorImageURL,
              },
            },
          ],
        }}
      </StructuredData>

      <Layout title={title} description={description} image={image}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>

          <time dateTime={date} className={styles.date}>
            {formattedDate}
            {typeof readingTime === "number" && (
              <>
                {" · "}
                {readingTimePlural(readingTime)}
              </>
            )}
          </time>

          <div className={styles.avatar}>
            {typeof authorImageURL === "string" && (
              <Link className={styles.avatarPhoto} href={authorURL}>
                <img src={authorImageURL} alt={author} width="45" height="45" />
              </Link>
            )}

            {typeof author === "string" && (
              <>
                <h3 className={styles.avatarName}>
                  <Link href={authorURL}>{author}</Link>
                </h3>
                <small className={styles.avatarTitle}>{authorTitle}</small>
              </>
            )}
          </div>
          {tags.length > 0 && (
            <div className={styles.tags}>
              Tags:
              <ul className={styles.tagsList}>
                {tags
                  .filter(({ label }) => label !== "pinned")
                  .map(({ label, permalink: tagPermalink }) => (
                    <li key={tagPermalink}>
                      <Link
                        key={tagPermalink}
                        to={ensureTrailingSlash(tagPermalink)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </header>

        <article className={styles.markdown}>
          <MDXProvider components={MDXComponents}>
            <BlogPostContents />
          </MDXProvider>
          <EditThisPage editUrl={contributeUrl} />
          <Section>
            <BlogCTA buttonText={buttonText ?? customFields.defaultCta} />
          </Section>
        </article>
      </Layout>
    </>
  )
}

export default BlogPostPage
