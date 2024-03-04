const FeaturedItem = (props) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="ft-product">
      <img
        className="productImage"
        width={154}
        src="store/ft-item.png"
        alt={props?.product?.image}
      />
      <div className="ps-3">
        <h5>Blue Swade Nike Sneakers</h5>
        <div className="rating">
          {rating.map((rate) => {
            return (
              <>
                <img
                  src={
                    rate > Math.round(props?.product?.rating?.rate)
                      ? "store/star_empty.png"
                      : "store/star.png"
                  }
                  alt="star"
                />
              </>
            );
          })}
        </div>
        <div className="pt-4 d-flex">
          {props?.discounted && (
            <p className="poppins-semibold discount me-2">
              ${props?.product?.price}
            </p>
          )}
          <p className={`price ${props.discounted ? "cut" : ""}`}>
            ${props?.product?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
