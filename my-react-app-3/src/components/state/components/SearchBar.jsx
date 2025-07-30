function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Tìm kiếm..." />
      <label>
        <input type="checkbox" /> Lọc sản phẩm còn trong kho
      </label>
    </form>
  );
}

export default SearchBar;
