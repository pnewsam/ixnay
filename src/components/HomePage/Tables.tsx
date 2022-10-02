import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Tables = () => (
  <Section>
    <hgroup>
      <h2>Tables</h2>
      <p>
        <code>table</code>, <code>caption</code>, <code>thead</code>,{" "}
        <code>tbody</code>, <code>tfoot</code>, <code>tr</code>, <code>th</code>
        , and <code>td</code>.
      </p>
    </hgroup>
    <SplitPane>
      <div>
        <table>
          <caption>My Table Caption</caption>
          <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
              <th>Three</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One</td>
              <td>Two</td>
              <td>Three</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>One</td>
              <td>Two</td>
              <td>Three</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div></div>
    </SplitPane>
  </Section>
);
