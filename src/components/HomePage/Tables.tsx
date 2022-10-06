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
          <caption>Types of Sandwiches</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Good or Bad</th>
              <th>Reasoning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sloppy Joe</td>
              <td>
                A sloppy joe is a sandwich consisting of ground beef, onions,
                tomato sauce or ketchup, Worcestershire sauce, and other
                seasonings, served on a hamburger bun.
              </td>
              <td>Good</td>
              <td>It's a sandwich</td>
            </tr>
            <tr>
              <td>Peanut butter jelly</td>
              <td>
                A peanut butter and jelly sandwich (PB&J) consists of peanut
                butter and fruit preserves—jelly—spread on bread.
              </td>
              <td>Good</td>
              <td>Also a sandwich</td>
            </tr>
            <tr>
              <td>Croque-monsieur sandwich</td>
              <td>
                A croque monsieur is a hot sandwich made with ham and cheese.
              </td>
              <td>Good</td>
              <td>Sandwiches are good</td>
            </tr>
            <tr>
              <td>Reuben</td>
              <td>
                The Reuben sandwich is a North American grilled sandwich
                composed of corned beef, Swiss cheese, sauerkraut, and Thousand
                Island dressing or Russian dressing, grilled between slices of
                rye bread.
              </td>
              <td>Good</td>
              <td>Is it a sandwich? So, yup</td>
            </tr>
          </tbody>
          <tfoot>
            {/* <tr>
              <td>Croque-monsieur sandwich</td>
              <td>
                A croque monsieur is a hot sandwich made with ham and cheese.
                The dish originated in French cafés and bars as a quick snack.
                The name comes from the French words croque and monsieur.
              </td>
              <td>Good</td>
              <td>Sandwiches are good</td>
            </tr> */}
          </tfoot>
        </table>
      </div>
      <div>
        <code className="block"></code>
      </div>
    </SplitPane>
  </Section>
);
