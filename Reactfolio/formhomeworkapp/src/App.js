import "./App.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    pincode: "",
    comments: false,
    candidates: false,
    offers: false,
    notifications: "",
  });
  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        type="text"
        placeholder="Hitesh"
        name="firstName"
        value={data.firstName}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        type="text"
        placeholder="natha"
        name="lastName"
        value={data.lastName}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <br />
      <input
        type="email"
        placeholder="hiteshnatha15@gmail.com"
        name="email"
        value={data.email}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="country">Select Your Country</label>
      <br />
      <select name="country" value={data.country} onChange={changeHandler}>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
      </select>
      <br />
      <label htmlFor="street">Street Address</label>
      <br />
      <input
        type="textarea"
        name="street"
        placeholder="1234 Main St"
        value={data.street}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="city">City</label>
      <br />
      <input
        type="text"
        placeholder="Asansol"
        name="city"
        value={data.city}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="state">State/Province</label>
      <br />
      <input
        type="text"
        placeholder="West Bengal"
        name="firstName"
        value={DataTransfer.firstName}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="pincode">ZIP/Postal Code</label>
      <br />
      <input
        type="text"
        placeholder="713301"
        name="pincode"
        value={data.pincode}
        onChange={changeHandler}
      />
      <br />
      <label>By email</label>
      <br />
      <input
        type="checkbox"
        name="comments"
        id="comments"
        checked={data.checkbox1}
        onChange={changeHandler}
      />
      <label htmlFor="checkbox1">
        Commments
        <br />
        Get notified when someones posts a comment on a posting.
      </label>
      <br />
      <input
        type="checkbox"
        name="candidates"
        id="candidates"
        checked={data.checkbox2}
        onChange={changeHandler}
      />
      <label htmlFor="checkbox2">
        Candidates
        <br />
        Get notified when a candidate applies for a job.
      </label>
      <br />
      <input
        type="checkbox"
        name="offers"
        id="offers"
        checked={data.checkbox3}
        onChange={changeHandler}
      />
      <label htmlFor="checkboxe3">
        Offers
        <br />
        Get notified when a candidate accepts or rejects an offer.
      </label>
      <br />
      <label>
        Push Notifications
        <br />
        These are delivered via SMS to your mobile phone.
      </label>
      <br />
      <input
        type="radio"
        name="notifications"
        id="Everything"
        value="Everything"
        onChange={changeHandler}
      />
      <label htmlFor="Everything">Everything</label>
      <br />
      <input
        type="radio"
        name="notifications"
        id="Same as email"
        value="Same as email"
        onChange={changeHandler}
      />
      <label htmlFor="Same as Email">Same as Email</label>
      <br />
      <input
        type="radio"
        name="notifications"
        id="No push notifications"
        value="No push notifications"
        onChange={changeHandler}
      />
      <label htmlFor="No push notifications">No push notifications</label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
