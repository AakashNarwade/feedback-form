import "./App.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
function App() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submit, setSubmit] = useState(true);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHovered(value);
  };

  const handleMouseLeave = () => {
    setHovered(undefined);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmit(false);
  };
  return (
    <>
      {submit ? (
        <div style={styles.container}>
          <h1>Hotel Feedback Form</h1>
          <div style={styles.star}>
            <h3
              style={{
                display: "inline-block",
                padding: "4px",
                marginRight: 4,
                marginBottom: 3,
                color: "orange",
              }}
            >
              poor
            </h3>

            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  style={{ marginRight: 10, cursor: "pointer" }}
                  color={
                    (hovered || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
            <h3
              style={{
                display: "inline-block",

                color: "orange",
              }}
            >
              excellent
            </h3>
          </div>
          <div>
            <form onSubmit={onSubmitHandler}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  display: "block",
                  width: 300,
                  height: 25,
                  borderRadius: 5,
                }}
              />
              <label>Number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                style={{
                  display: "block",
                  width: 300,
                  height: 25,
                  borderRadius: 5,
                }}
              />
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  display: "block",
                  width: 300,
                  height: 25,
                  borderRadius: 5,
                }}
              />
              <div style={styles.container}>
                <textarea
                  placeholder="What's your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  style={styles.textArea}
                />
                <button
                  type="submit"
                  disabled={!name || !email || !number || !feedback}
                  style={styles.button}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <h3 style={styles.container}>form submitted</h3>
          <button
            style={styles.button}
            onClick={() => {
              setSubmit(true);
              setEmail("");
              setFeedback("");
              setCurrentValue(0);
              setName("");
              setNumber("");
            }}
          >
            Go back
          </button>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    border: "2px solid black",
    borderRadius: 5,
    width: 300,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 150,
    padding: 5,
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
  },
};

export default App;
