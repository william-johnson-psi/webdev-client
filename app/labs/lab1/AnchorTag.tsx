export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/william-johnson-psi" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://nookazon.com/">Website I personally visit</a>
      <br />
      <a href="https://www.linkedin.com/in/wjohnson-cs/" target="_blank" rel="noreferrer">My LinkedIn</a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}