import { Container, Button } from "reactstrap";
import aboutUsImage from "src/assets/aboutUsImage.png";

export default function AboutUsSection() {
  return (
    <Container>
      <p className="aboutUs-transition-text">Ketahui lebih lanjut</p>
      <h1 className="aboutUs-title">Tentang Kami</h1>
      <div className="aboutUs-description">
        <div className="description-image">
          <img
            className="aboutUsImage"
            src={aboutUsImage}
            alt="about us image"
          />
        </div>
        <div className="description-text">
          <p className="description">
            Jangan menunggu lebih lama untuk mendapatkan jawaban. Segera lakukan
            diagnosa keluhan Anda dan temukan hasil diagnosa penyakit serta
            rekomendasi perawatan utamanya. Mudah dan cepat!
          </p>
          <p className="caution">
            <strong style={{ color: "black" }}>PERHATIAN</strong>: Aplikasi kami
            mengandalkan kecerdasan buatan untuk memberikan respons cepat
            terhadap keluhan penyakit Anda. Meskipun kami berusaha memberikan
            informasi yang akurat, sangat disarankan untuk berkonsultasi dengan
            seorang dokter dan melakukan tes tambahan untuk diagnosis yang lebih
            akurat.
          </p>
          <Button className="aboutUs-button" color="primary">
            Mulai diagnosis
          </Button>
        </div>
      </div>
    </Container>
  );
}
