import Header from "../../components/common/Header";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";
import { useUI } from "../../contexts/uiContext";

export default function InteriorPainting() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Interior Painting" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620864448/Dan%20Sharkey%20Painting/one-painting-residential-interior-1.jpg"
        alt=""
      />
      <div className="my-8">
        <p>
          Doing an interior painting project takes planning, especially if its
          occupied. Depending on the scope of the job, sometimes it's best to
          work in sections, starting and completing portions one at a time. This
          way your entire house isn't a complete "job site" for the duration. A
          little client client/contractor collaboration makes for a seamless
          job, with less inconvenience to the occupants.
        </p>
        <p>
          We make sure to cover all furniture and fixtures with plastic and lay
          heavy drop cloths over the floors. We follow all standard preparation
          and application procedures while executing your project, such as
          sanding, spackling, caulking and priming.
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
    </div>
  );
}
