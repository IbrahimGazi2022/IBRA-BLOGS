import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews, MainPost, Footer, Author, Travel } from "@/components";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <BlogPost />
        <TopNews />
        <MainPost />
        <Travel />
      </MainLayout>
      <Author />
      <Footer />
    </>
  )
}

export default page
