import { Container, Button } from "reactstrap";
import HeroImage from "src/assets/hero-image.webp";

export default function HeroSection() {
  return (
    <Container className="hero-section">
      <div className="hero-text-section">
        <div className="hero-title">
          <h1>Diagnosis Penyakit Cepat dari Keluhan Anda</h1>
        </div>
        <div className="hero-text">
          Ingin mendapatkan diagnosis penyakit secara cepat dari keluhan Anda?
          Kami siap membantu dengan teknologi AI terbaru!
        </div>
        <Button className="hero-button" color="primary">
          Mulai diagnosis
        </Button>
      </div>
      <div className="hero-image-section">
        <img className="hero-image" src={HeroImage} alt="hero_image" />
      </div>
    </Container>
  );
}
