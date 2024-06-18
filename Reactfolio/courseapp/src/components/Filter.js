function Filter({ filterData, cetegory, setCetegory }) {
  function cetegoryHandler(title) {
    setCetegory(title);
  }
  return (
    <div>
      {filterData.map((types) => (
        <button onClick={() => cetegoryHandler(types.title)}>
          {types.title}
        </button>
      ))}
    </div>
  );
}
export default Filter;
