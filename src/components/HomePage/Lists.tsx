import { Section } from "../ui/Section";
import { SplitPane } from "../ui/SplitPane";

export const Lists = () => (
  <Section>
    <h2>Lists</h2>
    <SplitPane
      els={["ul", "li"]}
      code={
        <>
          &lt;ul&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Bocadillo
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;de
          Pollo&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;de
          Carne&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Torta&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Jambon beurre&lt;/li&gt;
          <br />
          &lt;/ul&gt;
        </>
      }
    >
      <ul>
        <li>
          Bocadillo
          <ul>
            <li>de Pollo</li>
            <li>de Carne</li>
          </ul>
        </li>
        <li>Torta</li>
        <li>Jambon beurre</li>
      </ul>
    </SplitPane>

    <SplitPane
      els={["ol", "li"]}
      code={
        <>
          &lt;ol&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Banh mi&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Cubano&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Hoagie&lt;/li&gt;
          <br />
          &lt;/ol&gt;
        </>
      }
    >
      <ol>
        <li>Banh mi</li>
        <li>Cubano</li>
        <li>Hoagie</li>
      </ol>
    </SplitPane>

    <SplitPane
      els={["menu", "li"]}
      code={
        <>
          &lt;menu&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Lobster roll&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Cucumber sandwich&lt;/li&gt;
          <br />
          &nbsp;&nbsp;&lt;li&gt;Katsu sando&lt;/li&gt;
          <br />
          &lt;/menu&gt;
        </>
      }
    >
      <menu>
        <li>Lobster roll</li>
        <li>Cucumber sandwich</li>
        <li>Katsu sando</li>
      </menu>
    </SplitPane>

    <SplitPane
      els={["dl", "dd", "dt"]}
      code={
        <>
          &lt;dl&gt;
          <br />
          &nbsp;&nbsp;&lt;dt&gt;French dip&lt;/dt&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;A French dip sandwich, also known as a beef
          dip, is a hot sandwich consisting of thinly sliced roast beef on a
          "French roll" or baguette.
          <br />
          &lt;/dd&gt;
          <br />
          &nbsp;&nbsp;&lt;dt&gt;Grilled cheese&lt;/dt&gt;
          <br />
          &nbsp;&nbsp;&lt;dd&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;A grilled cheese (sometimes known as a toasted
          sandwich or cheese toastie) is a hot sandwich typically prepared by
          heating one or more slices of cheese.
          <br />
          &lt;/dd&gt;
          <br />
          &lt;/dl&gt;
        </>
      }
    >
      <dl>
        <dt>French dip</dt>
        <dd>
          A French dip sandwich, also known as a beef dip, is a hot sandwich
          consisting of thinly sliced roast beef on a "French roll" or baguette.
        </dd>

        <dt>Grilled cheese</dt>
        <dd>
          A grilled cheese (sometimes known as a toasted sandwich or cheese
          toastie) is a hot sandwich typically prepared by heating one or more
          slices of cheese between slices of bread.
        </dd>
      </dl>
    </SplitPane>

    <SplitPane
      els={["details", "summary"]}
      code={
        <>
          &lt;details&gt;
          <br />
          &nbsp;&nbsp;&lt;summary&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;em&gt;Today's Special&lt;/em&gt;: Philly
          Cheesesteak
          <br />
          &nbsp;&nbsp;&lt;/summary&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;A sandwich made from thinly sliced pieces of
          beefsteak and melted cheese in a long hoagie roll. A popular regional
          fast food, it has its roots in the U.S. city of Philadelphia,
          Pennsylvania.
          <br />
          &nbsp;&nbsp;&lt;/p&gt;
          <br />
          &lt;/details&gt;
        </>
      }
    >
      <details>
        <summary>
          <em>Today's Special</em>: Philly Cheesesteak
        </summary>
        <p>
          A sandwich made from thinly sliced pieces of beefsteak and melted
          cheese in a long hoagie roll. A popular regional fast food, it has its
          roots in the U.S. city of Philadelphia, Pennsylvania.
        </p>
      </details>
    </SplitPane>
  </Section>
);
