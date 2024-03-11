function Color({ color }) {
  return (
    <>
      <ul className="colors ps-0">
        {color?.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item, border: "1px solid" }}
          ></li>
        ))}
      </ul>
    </>
  );
}

export default Color;
