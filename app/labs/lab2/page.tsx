import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding"
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners"
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float"
import GridLayout from "./GridLayout"
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <p><a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a></p>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although its very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr"
         style={{ backgroundColor: "purple", color: "white" }}>
        Here is another example of the style attribute, this time setting a
        purple background with white text directly on the element.
      </p>
      <p style={{backgroundColor: "green", color: "yellow"}}>
        This is another paragraph with a different set of colors.
      </p>

    <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
            Instead of changing the look and feel of all the
            elements of the same name, e.g., P, we can refer to a
            specific element by its ID
        </p>
        <p id="wd-id-selector-2">
            Heres another paragraph using a different ID and a
            different look and feel
        </p>
        <p id="wd-ai-id-selector">
            This paragraph has its own ID and its own look and feel
        </p>
        <p id="wd-id-selector-3">
            And the paragraph made by the student is here!
        </p>
    </div>
        <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
            Instead of using IDs to refer to elements, you can use an
            elements CLASS attribute
        </p>
        <h4 className="wd-class-selector">
            This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
            This paragraph uses its own class with a distinct look
        </p>
        <h4 className="wd-ai-class-selector">
            This heading shares the same class as the paragraph above
        </h4>
        <h4 className="wd-your-class">This is my class I made heading</h4>
        <p className="wd-your-class">And here is the text I made for it.</p>
        </div>
        <div id="wd-css-document-structure">
        <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
                This paragraphs red background is referenced as
                <br />
                .selector-2 .selector3
                <br />
                meaning the descendant of some ancestor.
                <br />
                <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                </span>
                <br />
                <span className="wd-ai-selector-5">
                This span is nested in the same paragraph and styled by a descendant rule
                </span>
                <br />
                You can combine these relationships to create specific
                styles depending on the document structure<span className="wd-selector-5"> I also want to include that I changed this color!</span>
                <br />
            </p>
            </div>
        </div>
        </div>
        <div className="wd-ai-cascade-demo">
        <h3>Cascade and specificity</h3>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
            This paragraph matches a tag, a class and an ID rule
        </p>
        </div>
        <ForegroundColors />
        <BackgroundColors />
        <Borders />
        <Padding />
        <Margins />
        <BoxModel />
        <Corners />
        <Dimensions />
        <Display />
        <Positions />
        <Zindex />
        <Float />
        <GridLayout />
        <Flex />
        <MediaQueriesDemo />
        <ReactIconsSampler />
    </div>
  );
}