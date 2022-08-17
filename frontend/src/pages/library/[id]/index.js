import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../../../styles/SingleSamplePage.module.css";
import AppLayout from "../../../components/Layouts/AppLayout";
import data from "../../../../public/data.json";

const SingleSample = () => {
  const [sample, setSample] = useState(null);
  const [oldSamples, setOldSamples] = useState(data.samples);
  const router = useRouter();

  useEffect(() => {
    const filterSample = oldSamples.filter(
      (sample) => sample.id === parseInt(router.query.id)
    );

    if (!filterSample) {
      toast.error("Sorry the requested resource does not exist");
    } else {
      setSample(filterSample[0]);
    }
  }, [router.query.id, oldSamples]);

  // navigator.clipboard.write('Text that should be copied, or in this case, the code').then(()=>{
  //   console.log('copied to clipboard, or you can run your toaster heare')
  // })

  return (
    <AppLayout>
      <div className="container">
        <div className={styles.singlesample_wrapper}>
          <div className={styles.singlesample_top}>
            <h2>Code Sample</h2>
            <div className={styles.singlesample_top_img}>
              <Image
                src="/assets/sample_pattern.svg"
                alt="single sample page pattern"
                width={1131}
                height={1721}
              />
            </div>
          </div>
          <div className={styles.sample_line}></div>
          <div>
            <div className={styles.codeWrapper}>
              <div className={styles.description}>
                <p>{sample && sample.description}</p>
              </div>
              <div className={styles.code_box}>
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(sample.code).then(() => {
                      toast.success("Text copied to clipboard");
                    });
                  }}
                  className={styles.copy}
                >
                  <Image
                    src="/assets/copy.svg"
                    alt="copy icon"
                    width={24}
                    height={24}
                  />
                </span>
                <pre>{sample && sample.code?.join("\n")}</pre>
              </div>
            </div>
            <button className={styles.singlesample_bottom_btn}>Download</button>
          </div>{" "}
        </div>
      </div>
    </AppLayout>
  );
};

export default SingleSample;
