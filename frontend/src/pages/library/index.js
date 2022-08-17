import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "../../../public/data.json";

import styles from "../../styles/Library.module.css";
import SampleDisplay from "../../components/SampleDisplay";
import AppLayout from "../../components/Layouts/AppLayout";

const Library = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const samples = data.samples;
  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  let isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/account/auth");
    }
  }, [isLoggedIn, router]);

  return (
    <AppLayout>
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
              <FaSearch />
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
              samples.map((sample) => (
                <div key={sample.id}>
                  <SampleDisplay sample={sample} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Library;

// // fetch library sample code data
export async function getStaticProps() {
  try {
    const BASE_URL =
      process.env.NODE_ENV === "production"
        ? "https://auth-wiki-team-1-project-iota.vercel.app"
        : "http://localhost:3000";
    const res = await fetch(`${BASE_URL}/data.json`);
    const data = await res.json();
    return {
      props: {
        samples: data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
