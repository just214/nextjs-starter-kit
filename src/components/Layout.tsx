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
      <header className={headerFooterClassNames}>Header</header>
      <main className="flex-1">
        <div className="container mx-auto p-4">{children || "My New Page"}</div>
      </main>
      <footer className={headerFooterClassNames}>Footer</footer>
    </div>
  );
};
