import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.umbradesign.ie'
const DEFAULT_OG_IMAGE = 'https://www.umbradesign.ie/og-image.jpg'
const SITE_NAME = 'Umbra Design'

/**
 * Per-page SEO component.
 * Renders title, description, canonical, Open Graph, Twitter, and
 * optional JSON-LD structured data.
 *
 * @param {string} title - Full <title> and og:title
 * @param {string} description - Meta description, og:description
 * @param {string} path - Path (e.g. "/about"). Combined with SITE_URL for og:url + canonical.
 * @param {string} [ogType] - og:type, defaults to "website"
 * @param {string} [image] - absolute og:image URL. Defaults to site-wide og-image.jpg
 * @param {object|object[]} [jsonLd] - Optional JSON-LD object(s) to inject
 */
const SEO = ({
  title,
  description,
  path = '/',
  ogType = 'website',
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}) => {
  const url = `${SITE_URL}${path}`
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
