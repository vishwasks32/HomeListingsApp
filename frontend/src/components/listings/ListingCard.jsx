import { Card, Button } from "react-bootstrap";

export default function ListingCard({ listing }) {
  const linkText = 'know more...'
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={listing.image}
        alt={listing.title}
        style={{ height: "200px", objectFit: "cover" }}
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
  );
}