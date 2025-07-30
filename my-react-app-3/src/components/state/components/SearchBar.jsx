function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Tìm kiếm..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onStockOnlyChange(e.target.checked)}
        />{" "}
        Lọc sản phẩm còn trong kho
      </label>
    </form>
  );
}

export default SearchBar;
