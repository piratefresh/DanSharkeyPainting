import Header from "../../components/common/Header";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";
import { useUI } from "../../contexts/uiContext";

export default function PowerWashing() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Power Washing" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620867546/Dan%20Sharkey%20Painting/4-Benefits-to-Pressure-Washing-Your-Deck.jpg"
        alt=""
      />
      <div className="my-8">
        <p>
          Say no to your mold, dirt and old paint. Utilise our power wash
          service.
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
