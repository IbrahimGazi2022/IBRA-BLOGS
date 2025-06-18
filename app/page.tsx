import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews, MainPost, Footer, Travel } from "@/components";

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
      <Footer />
    </>
  )
}

export default page
