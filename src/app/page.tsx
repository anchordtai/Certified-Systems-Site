import Carousel from "@/components/Carousel";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <section className="-mt-20">
        <Carousel />
      </section>
      <ServicesGrid />
      <Testimonials />
      {/* <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Our Gallery</h2>
          <ImageGallery />
        </div>
      </section> */}
    </>
  );
}
