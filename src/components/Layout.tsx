export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const headerFooterClassNames =
    "text-alt surface-alt p-4 flex items-center justify-center";
  return (
    <div className="flex flex-col min-h-screen">
      <header className={`${headerFooterClassNames} justify-between`}>
        <h1 className="font-thin text-2xl">Next.js Starter</h1>
      </header>
      <main className="flex-1">
        <div className="container mx-auto p-4">{children}</div>
      </main>
      <footer className={`${headerFooterClassNames} justify-center`}>
        Next.js Starter | {new Date().getFullYear()}
      </footer>
    </div>
  );
};
