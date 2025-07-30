import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterProductTable;
