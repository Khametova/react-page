import FilterPanel from "./FilterPanel";
import UsersList from "./UsersList";
import styles from "./UsersPage.module.sass";
import { useState } from "react";

function UsersPage() {
  const [gender, setGender] = useState("male");
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  return (
    <section>
      <h1>UsersList </h1>
      <div className={styles.contentWrapper}>
        <div className={styles.listContainer}>
          <UsersList gender={gender} isPhoneVisible={isPhoneVisible} />
        </div>
        <div className={styles.filterContainer}>
          <FilterPanel
            gender={gender}
            setGender={setGender}
            isPhoneVisible={isPhoneVisible}
            setIsPhoneVisible={setIsPhoneVisible}
          />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
