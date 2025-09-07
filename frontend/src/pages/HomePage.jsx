import { Container, Row, Col } from "react-bootstrap";
import ListingCard from "../components/listings/ListingCard";

let listings = [
  { id: 1, title: "Cozy Apartment in City Center", image: "public/images/house.jpg" },
  { id: 2, title: "Spacious Villa with Garden", image: "public/images/house.jpg" },
  { id: 3, title: "Modern Studio near Metro", image: "public/images/house.jpg" },
  { id: 4, title: "Luxury Penthouse with Pool", image: "public/images/house.jpg" },
  { id: 5, title: "Family Home in Suburbs", image: "public/images/house.jpg" },
];

export default function HomePage() {
  return (
    <Container className="my-4">
      <h2 className="mb-4">Home Listings</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {listings.map((listing) => (
          <Col key={listing.id}>
            <ListingCard
              listing={listing}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
