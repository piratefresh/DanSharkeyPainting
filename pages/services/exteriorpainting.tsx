import React from "react";
import Header from "../../components/common/Header";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";
import { useUI } from "../../contexts/uiContext";

export default function ExteriorPainting() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Interior Painting" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620864694/Dan%20Sharkey%20Painting/IMG_1072.jpg"
        alt=""
      />
      <p className="my-8">
        When working on an exterior project, there are lots of variables. #1 is
        safety, especially in the city. We cone and caution tape our work area,
        making sure pedestrians and vehicles are aware of our crew and job site.
        As for the project, most times we wash down the building removing any
        dirt that would prevent proper paint adhesion, followed by scraping away
        flaking paint, sanding, priming, caulking, etc. Sometimes more
        preparation is needed prior to painting such as, minor carpentry,
        replacing window sills, frames and other failed wood materials. We also
        patch stucco and cement areas, prior to applying paint or waterproofing
        products, and also finish with premium Sherwin-Williams products.
      </p>

      <Button onClick={openModal}>Contact Us</Button>
      <Modal open={displayModal} onClose={closeModal}>
        <div
          className="flex mx-auto my-8 p-4 rounded-2xl"
          style={{ backgroundColor: "rgb(250, 250, 255)" }}
        >
          <ContactUs hasTitle />
        </div>
      </Modal>
    </div>
  );
}
