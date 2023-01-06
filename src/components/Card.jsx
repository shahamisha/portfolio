import "./card.css";

const Card = ({ children, className, onClick }) => {
  return (
    <article className={`card ${className}`} onclick={onClick}>
      {children}
    </article>
  );
};

export default Card;
