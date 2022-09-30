import { Section, SplitPane } from "./index.styled";

export const Lists = () => (
  <Section>
    <h2>Lists</h2>
    <SplitPane>
      <div>
        <ul>
          Test
          <li>
            Nested List
            <ul>
              Nested List Description
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>

        <ol>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>

        <dl>
          <dt>Coffee</dt>
          <dd>Black hot drink</dd>
          <dd>Black hot drink</dd>

          <dt>Milk</dt>
          <dd>White cold drink</dd>
          <dd>Black hot drink</dd>
        </dl>

        <details>
          <summary>Epcot Center</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      </div>

      <div>
        <code className="block">
          &lt;ul&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 1&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 2&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 3&lt;/li&gt;
          <br />
          &lt;/ul&gt;
          <br />
          <br />
          &lt;ol&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 1&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 2&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;List item 3&lt;/li&gt;
          <br />
          &lt;/ol&gt;
          <br />
          <br />
          &lt;dl&gt;
          <br />
          &nbsp;&nbsp;&lt;dt&gt;Coffee&lt;/dt&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;Black hot drink&lt;/dd&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;Black hot drink&lt;/dd&gt;
          <br />
          &nbsp;&nbsp;&lt;dt&gt;Milk&lt;/dt&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;White cold drink&lt;/dd&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;Black hot drink&lt;/dd&gt;
          <br />
          &lt;/dl&gt;
          <br />
          <br />
          &lt;details&gt;
          <br />
          &nbsp;&nbsp;&lt;summary&gt;Epcot Center&lt;/summary&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Epcot is a theme park at Walt Disney World
          Resort featuring exciting attractions, international pavilions,
          award-winning fireworks and seasonal special events.
          <br />
          &nbsp;&nbsp;&lt;/p&gt;
          <br />
          &lt;/details&gt;
          <br />
        </code>
      </div>
    </SplitPane>
  </Section>
);
