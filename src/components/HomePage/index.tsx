import { Article } from "../ui/Article";
import { Section } from "../ui/Section";

export const HomePage = () => (
  <Article>
    <h1>Ixnay</h1>
    <Section>
      <h2>Layout</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>Global Nav</td>
          <td>
            <code>&lt;header&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Card</td>
          <td>
            <code>&lt;x-card&gt;</code>
          </td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Side Nav</td>
          <td>
            <code>&lt;nav&gt;</code>
          </td>
          <td>No</td>
        </tr>
      </table>

      {/* Form */}
      <h2>Form</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>Input</td>
          <td>
            <code>&lt;input [type="text"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Checkbox</td>
          <td>
            <code>&lt;input [type="checkbox"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Button</td>
          <td>
            <code>&lt;button&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Select</td>
          <td>
            <code>&lt;select&gt;</code> and <code>&lt;optgroup&gt;</code> and{" "}
            <code>&lt;option&gt;</code>
          </td>
          <td>No</td>
        </tr>
      </table>

      <h2>Text</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>Completed</th>
        </tr>

        <tr>
          <td>Paragraph</td>
          <td>
            <code>&lt;p&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Span</td>
          <td>
            <code>&lt;span&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Bold</td>
          <td>
            <code>&lt;strong&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Italic</td>
          <td>
            <code>&lt;em&gt;</code> and <code>&lt;i&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Underline</td>
          <td>
            <code>&lt;u&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Link</td>
          <td>
            <code>&lt;a&gt;</code>
          </td>
          <td>No</td>
        </tr>
      </table>

      <h2>Images</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>Image</td>
          <td>
            <code>&lt;img&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Figure</td>
          <td>
            <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>
          </td>
          <td>No</td>
        </tr>
      </table>

      <h2>Components</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>Combobox</td>
          <td>
            <code>&lt;[role="combobox"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Listbox</td>
          <td>
            <code>&lt;[role="listbox"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Dialog</td>
          <td>
            <code>&lt;[role="dialog"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
        <tr>
          <td>Menu</td>
          <td>
            <code>&lt;[role="menu"]&gt;</code> and{" "}
            <code>&lt;[role="menuitem"]&gt;</code> and{" "}
            <code>&lt;[role="menuitemcheckbox"]&gt;</code> and{" "}
            <code>&lt;[role="menuitemradio"]&gt;</code>
          </td>
          <td>No</td>
        </tr>
      </table>
    </Section>
  </Article>
);
