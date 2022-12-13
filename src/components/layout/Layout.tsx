import ErrorBoundary from "../errors/ErrorBoundary";

const Layout = ({ children }: any) => {
  return (
    <div>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};

export default Layout;
