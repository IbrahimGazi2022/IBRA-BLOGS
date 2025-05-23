import { Navbar, Hero } from "@/components";
import MainLayout from "@/layout/mainLayout";

const page = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  )
}

export default page
