const GradientSVG = (props) => {
  let { startColor, endColor, idCSS } = props;
  let gradientTransform = `rotate(${90})`;

  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="0%" stopColor={startColor} />
          <stop offset="100%" stopColor={endColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientSVG;
