import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews, MainPost, TutorialPost, Footer, Author } from "@/components";

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
      <TutorialPost />
      <Author />
      <Footer />
    </>
  )
}

export default page
