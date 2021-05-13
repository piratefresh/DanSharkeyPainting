import Header from "../components/common/Header";
import OurServices from "../components/OurServices";
import WizardForm from "../components/common/WizardForm";
import Modal from "../components/common/Modal";
import React from "react";

export default function Services() {
  const [displayModal, setDisplayModal] = React.useState<boolean>(false);

  const openModal = () => {
    setDisplayModal(true);
  };
  const closeModal = () => {
    setDisplayModal(false);
  };
  return (
    <>
      <div className="h-screen">
        <Header title="Services" subtitle="Our Services" />
        <OurServices noTitle />
      </div>
      {/* <div onClick={() => openModal()}>Free Estimate</div>
      <Modal open={displayModal} onClose={closeModal}>
        <WizardForm />
      </Modal> */}
    </>
  );
}
