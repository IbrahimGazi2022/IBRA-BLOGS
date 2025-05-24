import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, TopNews } from "@/components";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <BlogPost />
        <TopNews />
      </MainLayout>
    </>
  )
}

export default page
