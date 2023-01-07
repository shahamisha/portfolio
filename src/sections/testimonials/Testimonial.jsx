import Card from "../../components/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <p>{testimonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avtar">
          <img src={testimonial.avtar} alt="Testimonial Avtar" />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
