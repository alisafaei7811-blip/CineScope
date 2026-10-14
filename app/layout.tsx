import "./globals.css";
import Query from "./hook/Query";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Query>{children}</Query>
      </body>
    </html>
  );
}
