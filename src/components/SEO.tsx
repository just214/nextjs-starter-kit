import Head from "next/head";

export type SEOProps = {
  title: string;
  description: string;
  url?: string;
  icon?: string;
};

export const SEO = (props: SEOProps) => {
  const { title, description, url, icon } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={icon} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={icon} />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/apple-touch-icon-152x152.png"
      />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <link rel="icon" type="image/png" href="/icon.svg" sizes="32x32" />
      <link rel="icon" type="image/png" href="/icon.svg" sizes="16x16" />
      <meta name="application-name" content={props.title} />
      <meta name="msapplication-TileColor" content="#f5f5f5" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={props.title} />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};
