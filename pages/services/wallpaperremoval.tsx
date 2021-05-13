import Header from "../../components/common/Header";
import Modal from "../../components/common/Modal";
import ContactUs from "../../components/ContactUs";
import Button from "../../components/common/Button";
import { useUI } from "../../contexts/uiContext";

export default function WallpaperRemoval() {
  const { displayModal, closeModal, openModal } = useUI();
  return (
    <div>
      <Header title="Wallpaper Removal" subtitle="" />
      <img
        className="w-full object-cover"
        style={{ height: "500px" }}
        src="https://res.cloudinary.com/film-it/image/upload/v1620867209/Dan%20Sharkey%20Painting/wall-paper-removal.jpg"
        alt=""
      />
      <div className="my-8">
        <p>
          Don't destroy your own walls. Let us take care of your wallpaper
          problem. We will carefully remove wallpaper from your wall without
          damaging it.
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
