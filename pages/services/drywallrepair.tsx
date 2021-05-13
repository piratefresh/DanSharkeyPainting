import Header from "../../components/common/Header";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";
import { useUI } from "../../contexts/uiContext";

export default function DryWallRepair() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Drywall Repair" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620867938/Dan%20Sharkey%20Painting/Drywall-Repair-Services-scaled.jpg"
        alt=""
      />
      <p className="my-8">
        We will patch and fix any holes or defects on your dry wall. Our fix
        will be perfectly blended and painted accordingly.
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
