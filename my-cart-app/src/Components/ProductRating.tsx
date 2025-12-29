type Rating = {
  rate: number;
  count: number;
};

type RatingProps = Rating;

const ProductRating = (props: RatingProps) => {
  const stars = Math.round(props.rate);

  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < stars ? "text-warning" : "text-success"}>
          ☆
        </span>
      ))}
      <small className="ms-2 text-muted">({props.count})</small>
    </div>
  );
};

export default ProductRating;