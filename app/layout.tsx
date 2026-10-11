import Header from "./components/layout/header";
import "./globals.css";
import Query from "./hook/Query";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Query>{children}</Query>
      </body>
    </html>
  );
}
