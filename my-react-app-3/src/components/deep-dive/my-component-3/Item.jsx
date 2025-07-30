function Item({ name, isPacked }) {
  return isPacked ? (
    <li className="item">{name + "\u2705"}</li>
  ) : (
    <del>
      <li className="item">{name}</li>
    </del>
  );
}

export default Item;
