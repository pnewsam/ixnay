export const Table = () => (
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
          A sloppy joe is a sandwich consisting of ground beef, onions, and
          other seasonings, served on a hamburger bun.
        </td>
        <td>Good</td>
        <td>It's a sandwich</td>
      </tr>
      <tr>
        <td>Peanut butter jelly</td>
        <td>
          A peanut butter and jelly sandwich (PB&J) consists of peanut butter
          and fruit preserves—jelly—spread on bread.
        </td>
        <td>Good</td>
        <td>Also a sandwich</td>
      </tr>
      <tr>
        <td>Croque-monsieur sandwich</td>
        <td>A croque monsieur is a hot sandwich made with ham and cheese.</td>
        <td>Good</td>
        <td>Sandwiches are good</td>
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
);
