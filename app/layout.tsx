import Context from "./context/context";
import "./globals.css";
import Query from "./hook/Query";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Context>
          <Query>{children}</Query>
        </Context>
      </body>
    </html>
  );
}
