import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews, MainPost, Footer, Author } from "@/components";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <BlogPost />
        <TopNews />
        <MainPost />
      </MainLayout>
      <Author />
      <Footer />
    </>
  )
}

export default page
