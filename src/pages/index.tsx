import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Emoji } from "components/Emoji";

const App = () => {
  return (
    <Layout>
      <SEO
        title="Next.js Starter"
        description="A Next.js starter with TypeScript, TailwindCSS, and more."
      />
      <div>
        <p className="text-3xl text2">
          Hello <Emoji symbol="👋" label="Hello" />
        </p>
      </div>
    </Layout>
  );
};

export default App;
