export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        The text in this paragraph is blue but{" "}
        <span className="wd-fg-color-black">this text is black</span>
      </p>
      <p>This <span className="wd-fg-color-blue">paragraph</span> has mixed up <span className="wd-fg-color-red">colors</span>, pretty cool!</p>
    </div>
  );
}