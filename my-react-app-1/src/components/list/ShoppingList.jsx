const products = [
  { title: "Cabbage", id: 1, isFruit: false }, // [0]
  { title: "Garlic", id: 2, isFruit: false }, // [1]
  { title: "Apple", id: 3, isFruit: true }, // [2]
];

// Pseudocode:
// 1. isFruit = true => id: 3 => "purple"
// 2. isFruit = false => id: 1,2 => "green"
// 3. isFruit ? style.color = "purple" : style.color = "green"

export default function ShoppingList() {
  const listItems = products.map((product) => {
    return (
      <li
        key={product.id}
        style={{ color: product.isFruit ? "purple" : "green" }}>
        {product.title}
      </li>
    );
  });
  return <ol>{listItems}</ol>;
}

// IMPORTANT:
// syntax:
// function nameFunc(){
//   return ...
//}
// Arrow function:
// const func = (name) => { return name} // name
// const func = (name) => (name) // name
