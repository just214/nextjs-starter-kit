import { FaUser } from "react-icons/fa";

export type LayoutProps = {
  /**
   * Optionally render children
   */
  children?: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const headerFooterClassNames = "text2 surface2 p-4";
  return (
    <div className="flex flex-col min-h-screen">
      <header className={headerFooterClassNames}>
        <div className="flex items-center justify-between">
          <h1 className="font-thin text-2xl">Next.js Starter</h1>
          <div className="rounded-full surface1 items-center justify-center p-2">
            <FaUser />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto p-4">{children || "My New Page"}</div>
      </main>
      <footer
        className={`flex items-center justify-center ${headerFooterClassNames}`}>
        Next.js Starter | {new Date().getFullYear()}
      </footer>
    </div>
  );
};
