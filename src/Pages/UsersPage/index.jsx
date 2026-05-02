import FilterPanel from "./FilterPanel";
import UsersList from "./UsersList";
import styles from "./UsersPage.module.sass";

function UsersPage() {
  return (
    <section>
      <h1>UsersList </h1>
      <div className={styles.contentWrapper}>
        <div className={styles.listContainer}>
          <UsersList />
        </div>
        <div className={styles.filterContainer}>
          <FilterPanel />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
