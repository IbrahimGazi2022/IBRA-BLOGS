import MainLayout from "@/layout/mainLayout";
import { Navbar, Hero, BlogPost } from "@/components";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
        <BlogPost />
      </MainLayout>
    </>
  )
}

export default page
