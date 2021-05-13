import Header from "../../components/common/Header";
import { useUI } from "../../contexts/uiContext";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";

export default function StuccoRepair() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Interior Painting" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620868037/Dan%20Sharkey%20Painting/stuccorepair.jpg"
        alt=""
      />
      <p className="my-8">
        Our premier cement stucco is a modification of a traditional three coat
        cement stucco over wire lath. The stucco industry has improved on the
        original Portland cement base coat by adding chopped-fiberglass and
        plasticizers to the mix. This has enabled the stucco siding to be
        stronger, more flexible, and more crack resistant. Innovations in the
        finish coats have enabled us to install pre-bagged cement stucco
        products such as Penn-Crete Stucco and flexible acrylic finish coats.
        The options for color and textures are limited only by the imagination
        of the designer and skill of the craftsman. The flexible acrylic finish
        coats have virtually eliminated cracking while maintaining the integrity
        of the Portland cement stucco system. Stucco is perfect for
        homeowners/businesses who need an affordable, long lasting and
        aesthetically pleasing exterior finish.
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
