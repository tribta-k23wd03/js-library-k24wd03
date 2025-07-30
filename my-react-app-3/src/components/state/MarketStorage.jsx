import FilterProductTable from "./components/FilterProductTable";

function MarketStorage() {
  const PRODUCTS = [
    { category: "Hoa Quả", price: "$1", stocked: true, name: "Táo" },
    { category: "Hoa Quả", price: "$2", stocked: true, name: "Lê" },
    { category: "Hoa Quả", price: "$3", stocked: false, name: "Bom Mỹ" },
    { category: "Rau Củ", price: "$4", stocked: true, name: "Xà Lách" },
    { category: "Rau Củ", price: "$5", stocked: true, name: "Xà Lách Xoong" },
    { category: "Rau Củ", price: "$6", stocked: false, name: "Xà Lách Đà Lạt" },
  ];
  return (
    <div>
      <FilterProductTable products={PRODUCTS} />
    </div>
  );
}

export default MarketStorage;
