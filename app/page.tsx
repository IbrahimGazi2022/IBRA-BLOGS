import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost, Science, LatestPost, Footer, Travel } from "@/components";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <BlogPost />
        <Science />
        <LatestPost />
        <Travel />
      </MainLayout>
      <Footer />
    </>
  )
}

export default page
