import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews, MainPost, TutorialPost } from "@/components";

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
    </>
  )
}

export default page
