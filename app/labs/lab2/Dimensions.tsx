export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sentence is much longer than the box is wide, so it wraps and
          overflows to show that the declared 120px by 60px size stays fixed.
        </div>
        <div className="wd-display-big-block wd-bg-color-green wd-fg-color-white">
          Big block
        </div>
      </div>
    </div>
  );
}