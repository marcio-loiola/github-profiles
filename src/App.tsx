import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Search } from "./components/Search";
import Profiles from "./components/Profiles";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Profiles />
        </div>
      </div>
    </>
  );
}
