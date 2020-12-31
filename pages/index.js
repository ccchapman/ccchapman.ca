import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <body>
      <header>
        <h1>
          Chris <br /> Chapman
        </h1>
      </header>

      <main>
        <p>
          A web developer in Vancouver, BC building beautiful, pleasant digital
          experiences for all.
        </p>

        <h2>Technologies</h2>

        <ul>
          <li>Craft CMS</li>
          <li>Laravel</li>
          <li>PostCSS</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>

        <h2>Working With</h2>

        <p>
          Brands such as: Toyota North America, Nestlé Canada, The Washington
          Football Team, and many more.
        </p>

        <h2>Network</h2>

        <address>
          <p>GitHub: ccchapman</p>

          <p>Email Address: My first name @ this website.</p>
        </address>
      </main>
    </body>
  );
}
