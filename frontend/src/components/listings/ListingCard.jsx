import { Card, Button } from "react-bootstrap";
import ListingImageModal from "./ListingImageModal";
import { useState } from "react";

export default function ListingCard({ listing }) {
  const linkText = 'know more...'
  // State variable to track the modal's visibility.
  const [showModal, setShowModal] = useState(false);
  // Event handlers to show and hide the modal.
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={listing.image}
        alt={listing.title}
        style={{ height: "200px", objectFit: "cover", cursor: "pointer"  }}
        // Attach the event handler to the image.
        onClick={handleShow}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{listing.title}</Card.Title>
                <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          {linkText}
        </a>
      </Card.Body> 
    </Card>
      <ListingImageModal
        listing={listing}
        showModal = {showModal}
        handleClose = {handleClose}
      />
      </>
  );
}