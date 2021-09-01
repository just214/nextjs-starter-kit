import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Emoji } from "components/Emoji";
import { Box } from "components/Box";

const App = () => {
  return (
    <Layout>
      <SEO
        title="Next.js Starter"
        description="A Next.js starter with TypeScript, TailwindCSS, and more."
      />
      <Box as="span" className="flex gap-2">
        <Emoji symbol="👋" label="Hello" /> <Emoji symbol="🌎" label="World" />
      </Box>
    </Layout>
  );
};

export default App;
