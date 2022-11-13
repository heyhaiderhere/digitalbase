const Icon = ({ size = 20, src = "", margin = "" }) => {
  return (
    <img
      src={src}
      style={{
        width: size,
        height: size,
        margin: margin,
      }}
      alt="Icon"
    />
  );
};

export default Icon;
