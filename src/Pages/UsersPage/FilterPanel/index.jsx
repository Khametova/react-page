function FilterPanel({ gender, setGender, isPhoneVisible, setIsPhoneVisible }) {
  const changeGender = ({ target: { value } }) => setGender(value);
  const changeIsPhoneVisible = (e) => {
    setIsPhoneVisible(e.target.checked);
  };
  return (
    <>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          name="gender"
          onChange={changeGender}
        />
        MALE
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          name="gender"
          onChange={changeGender}
        />
        FEMALE
      </label>
      <label>
        <input
          type="checkbox"
          checked={isPhoneVisible}
          name="isPhoneViseble"
          onChange={changeIsPhoneVisible}
        />
        <span>Phone</span>
      </label>
    </>
  );
}
export default FilterPanel;
