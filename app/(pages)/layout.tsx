import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <Header></Header>
      {children}
      <Footer></Footer>
    </html>
  );
}
