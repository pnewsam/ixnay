import { Section, SplitPane } from "./index.styled";

export const Tables = () => (
  <Section>
    <h2>Tables</h2>
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
