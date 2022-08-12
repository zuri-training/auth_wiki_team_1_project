import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "../../styles/Library.module.css";
import SampleDisplay from "../../components/SampleDisplay";

const Library = ({ samples }) => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  let isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/account/login");
    }
  }, [isLoggedIn, router]);

  return (
    <section className={`container ${styles.library_wrapper}`}>
      <h2>
        <span>Free</span> Library of Authentication Codes
      </h2>
      <div className={styles.library_header}>
        <div className={styles.library_search_wrapper}>
          <input
            type="text"
            name="search"
            placeholder="Search for codes"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className={styles.library_search_wrapper_icon}>
            <Image
              src="/assets/search_white.svg"
              alt="library search"
              width={24}
              height={24}
            />
          </span>
        </div>

        <div className={styles.library_header_sort}>
          <span>Sort by | </span>
          <select name="sort">
            <option value="lastupdated">Last updated</option>
            <option value="lastthreedays">3 days ago</option>
            <option value="lasttweek">Last week</option>
          </select>
        </div>
      </div>

      {/* code sample dispaly */}
      <div className={styles.library_samples_wrapper}>
        <div className={styles.library_samples}>
          {samples &&
            samples.samples.map((sample) => (
              <div key={sample.id}>
                <SampleDisplay sample={sample} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Library;

// fetch library sample code data
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  return {
    props: {
      samples: data,
    },
  };
}
