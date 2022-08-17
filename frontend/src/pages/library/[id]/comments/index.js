import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AppLayout from "../../../../components/Layout";
import data from "../../../../../public/data.json";
import styles from "../../../../styles/SinglePageComment.module.css";

const SingleSampleCommentsPage = () => {
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

  return (
    <AppLayout>
      <div className={`container ${styles.singlepagecomment_wrapper}`}>
        This is the place where you can talk about the project in detail by
        sharing your thoughts and commenting
      </div>
    </AppLayout>
  );
};

export default SingleSampleCommentsPage;
