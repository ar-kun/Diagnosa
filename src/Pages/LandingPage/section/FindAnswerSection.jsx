import { Container, Button } from "reactstrap";
import FindAnswer from "src/assets/landingPageImage.webp";
import DotImage from "src/assets/DotImage.webp";

export default function FindAnswerSection() {
  return (
    <Container>
      <div className="find-answer-section">
        <div className="find-answer-text">
          <div className="wrap-content">
            <h1 className="findAnswerTitle">
              Temukan Jawaban
              <br />
              Atas Keluhan
              <br />
              Anda!
            </h1>
            <Button className="aboutUs-button" color="primary">
              Mulai diagnosis
            </Button>
          </div>
        </div>
        <div className="find-answer-image">
          <img
            className="findAnswerImage"
            src={FindAnswer}
            alt="Find answer image"
          />
        </div>
      </div>
      <img className="dot-image-landing-page" src={DotImage} alt="dot icon" />
    </Container>
  );
}
