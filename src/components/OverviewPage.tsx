import styled from "styled-components";

export const Article = styled.article``;

const Section = styled.section`
  padding: 20px 0;
`;

const SplitPane = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

export const HomePage = () => (
  <Article>
    <h1>Ixnay</h1>
    <p>
      Ixnay is a sensible CSS boilerplate, with a set of CSS classes to extend.
    </p>
    <p>Design-wise, this project takes cues from:</p>
    <ul>
      <li>
        <a href="https://apple.com">Apple</a>
      </li>
      <li>
        <a href="https://vercel.com">Vercel</a>
      </li>
    </ul>
    <p>Dev-wise, it's heavily inspired by:</p>
    <ul>
      <li>
        <a href="http://getskeleton.com">Skeleton</a>
      </li>
    </ul>
    <hr />

    <Section>
      <h2>Typography</h2>
      <SplitPane>
        <div>
          <p>The typeface is the standard fontstack</p>
        </div>
        <div>
          <code className="block">
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", "Helvetica Neue", "Ubuntu", sans-serif;
          </code>
        </div>
      </SplitPane>

      <br />
      <SplitPane>
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h5>Heading 6</h5>
        </div>

        <div>
          <code className="block">
            &lt;h1&gt;Heading 1&lt;/h1&gt;
            <br />
            &lt;h2&gt;Heading 2&lt;/h2&gt;
            <br />
            &lt;h3&gt;Heading 3&lt;/h3&gt;
            <br />
            &lt;h4&gt;Heading 4&lt;/h4&gt;
            <br />
            &lt;h5&gt;Heading 5&lt;/h5&gt;
            <br />
            &lt;h5&gt;Heading 6&lt;/h5&gt;
          </code>
        </div>
      </SplitPane>

      <SplitPane>
        <div>
          <p>The base type is 16px over 1.6 line height (24px)</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at
            accusamus laborum, quis eveniet doloribus incidunt iure omnis nam
            mollitia et optio similique velit tempore itaque sit in illo cum!
          </p>
          <br />

          <strong>Bolded</strong>
          <br />
          <br />
          <em>Emphasized</em>
          <br />
          <br />
          <i>Italicized</i>
          <br />
          <br />
          <a href="/">Link</a>
          <br />
          <br />
          <u>Underlined</u>
        </div>
        <div>
          <code className="block">
            &lt;p&gt;The base type is 16px over 1.6 line height (24px)&lt;/p&gt;
            <br />
            &lt;p&gt; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nobis at accusamus laborum, quis eveniet doloribus incidunt iure
            omnis nam mollitia et optio similique velit tempore itaque sit in
            illo cum! &lt;/p&gt;
            <br />
            &lt;strong&gt;Bolded&lt;/strong&gt;
            <br />
            &lt;em&gt;Emphasized&lt;/em&gt;
            <br />
            &lt;i&gt;Italicized&lt;/i&gt;
            <br />
            &lt;a&gt;Link&lt;/a&gt;
            <br />
            &lt;u&gt;Underlined&lt;/u&gt;
            <br />
          </code>
        </div>
      </SplitPane>
    </Section>
    <hr />

    <Section>
      <h2>Buttons</h2>
      <SplitPane>
        <div className="nix">
          <button>Primary</button>
          <br />
          <button className="secondary">Secondary</button>
          <br />
          <button disabled>Disabled</button>
        </div>
        <div>
          <code className="block">
            &lt;button&gt;Primary Button&lt;/button&gt;
            <br />
            &lt;button className="secondary"&gt;Secondary Button&lt;/button&gt;
          </code>
        </div>
      </SplitPane>
    </Section>
    <hr />

    <Section>
      <h2>Forms</h2>
      <SplitPane>
        <form action="">
          <label htmlFor="">First Name</label>
          <input type="text" />
          <label htmlFor="">Last Name</label>
          <input type="text" />
          <br />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Check this box?</label>
          <br />
          <label htmlFor="option-1">Option 1</label>
          <input type="radio" name="radio" id="option-1" />
          <label htmlFor="option-2">Option 2</label>
          <input type="radio" name="radio" id="option-2" />
          <label htmlFor="option-3">Option 3</label>
          <input type="radio" name="radio" id="option-3" />
          <button type="submit">Submit</button>
        </form>
        <div>
          <code className="block"></code>
        </div>
      </SplitPane>
    </Section>
    <hr />

    <Section>
      <h2>Lists</h2>
      <SplitPane>
        <div>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
        <div>
          <code className="block"></code>
        </div>
      </SplitPane>
    </Section>
    <hr />

    <Section>
      <h2>Code</h2>
      <SplitPane>
        <div>
          If you want some inline code, it will look like <code>this</code>.
          <code className="block">This is a block of code</code>
        </div>
        <div>
          <code className="block">This is a block of code</code>
        </div>
      </SplitPane>
    </Section>
    <hr />

    <Section>
      <h2>Tables</h2>
      <SplitPane>
        <div>
          <table>
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
    <hr />
  </Article>
);
