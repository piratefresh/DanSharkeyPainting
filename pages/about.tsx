import PrimaryLayout from "../components/common/layout/PrimaryLayout";
import Header from "../components/common/Header";

export default function About() {
  return (
    <PrimaryLayout>
      <div className="bg-white p-4 rounded-lg mt-8" style={{ height: "100vh" }}>
        <Header title="About" subtitle="Our vision and story" />
        <div className="my-8 text-2xl font-bold">
          We wanna help paint your projects
        </div>
        <img
          className="h-full w-full object-cover"
          style={{ height: "450px" }}
          src="/abouthome.jpg"
          alt=""
        />

        <div className="mt-4 rounded-xl">
          <p className="my-2">
            Anderson Painting and Power Washing is a family-owned and operated
            professional painting business serving the North Carolina Triangle
            and surrounding areas. We are committed to providing our customers
            with expert painting, flooring, and repair services. We pride
            ourselves on getting the job done with integrity and efficiency
            every time.
          </p>
          <p className="my-2">
            We provide award-winning, professional-grade painting and flooring
            solutions for your home or business. Our services include interior
            and exterior painting, power washing, concrete floor coating,
            carpentry, deck maintenance, and siding installation. We meet the
            highest industry standards for health and safety, and will never
            compromise quality or cut corners.
          </p>

          <p className="my-2">
            Our customers trust us. We are a fully licensed and insured Summit
            Safety Certified painting company. As winners of the North Carolina
            Better Business Bureau Torch Award and the Angie’s List Super
            Service Award, we believe our work speaks for itself. Choosing
            Anderson Painting means working with some of the best painting and
            maintenance contractors in the business.
          </p>

          <p className="my-2">
            AndersonPainting proudly offers professional painting services to
            residents and businesses in the greater Triangle area, including
            Raleigh, Durham, Chapel Hill, Cary, Apex, Garner, Morrisville, Wake
            Forest, Holly Springs, Fuquay-Varina, Rolesville, Pittsboro,
            Knightdale, Wendell, and Zebulon. We offer free estimates to
            determine if your project and our expertise are a good match. Have
            questions about painting your home or office? Contact us today for
            more information, or to receive a quote on any of our services:
            919-610-1855.
          </p>
        </div>
      </div>
    </PrimaryLayout>
  );
}
