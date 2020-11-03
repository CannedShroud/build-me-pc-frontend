import {
  Checkbox,
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  FormControl,
  withStyles,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import "../Styles/Form.css";
import axios from "../Logic/axios";

const CustomTextField = withStyles({
  root: {
    "& label.MuiInputLabel-root": {
      color: "var(--secondary)",
      "&.Mui-focused": {
        color: "white",
      },
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#3B3B53",
      color: "white",
      "& fieldset": {
        borderColor: "white",
        border: "2px solid",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--secondary)",
      },
    },
  },
})(TextField);

function Form() {
  const [step, setStep] = useState(1);
  const [inputField, setInputField] = useState({
    budget: 0,
    games: [],
    extras: {
      streaming: false,
      videoEditing: false,
      coding: false,
    },
  });
  const dummyGames = [
    { title: "Warzone", id: "warzone" },
    { title: "Fortnite", id: "fortnite" },
  ];

  // const brain = Brain("games", "games");
  // const [games, setGames] = useState(dummyGames);
  // useEffect(() => {
  //   if (brain.all !== undefined) {
  //     setGames(brain.all);
  //   }
  // }, [brain]);
  const games = [];
  const [value, setValue] = useState(games[0]);

  const handleSubmit = (e, from) => {
    e.preventDefault();

    const { budget, games, extras } = inputField;

    const buildParams = {
      budget,
      games,
      extras,
    };

    if (from === "submit") {
      axios
        .post("/estimateServer", buildParams)
        .then(() => console.log("Build data has been sent to server!"))
        .catch((err) => console.log("Error Occoured :( ->", err));
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e, "form")}>
        <div className="form">
          <div className="form__budget form__step">
            <div className="form__info">
              <h2>Step ONE!</h2>
              <h3>
                PC Building is a place where we can get carried away because of
                the amazing RGB accents and lights products come with. <br />
                So let's mark our boundaries.
              </h3>
              <h4>Enter your budget</h4>
            </div>
            <FormControl>
              <CustomTextField
                label="Budget"
                type="number"
                style={{ width: 300 }}
                onChange={(event) => {
                  inputField.budget = event.target.value;
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                type="submit"
                className="form__btn"
                onClick={() => setStep(2)}
              >
                NEXT
              </Button>
            </FormControl>
          </div>
          <div
            className="form__games form__step"
            style={step >= 2 ? null : { display: "none" }}
          >
            <div className="form__info">
              <h2>Step TWO!</h2>
              <h3>
                A Gaming PC is not even remotely a "Gaming PC" if you don't GAME
                on it. <br />
                So let's fill out cart
              </h3>
              <h4>Pick your favourite Game</h4>
            </div>
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              options={games}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <CustomTextField {...params} label="Game" variant="outlined" />
              )}
            />
            <Button
              className="form__btn"
              onClick={() => {
                inputField.games.push(value);
                setStep(3);
              }}
            >
              NEXT
            </Button>
          </div>
          <div
            className="form__extras form__step"
            style={step >= 3 ? null : { display: "none" }}
          >
            <div className="form__info">
              <h2>Step THREE!</h2>
              <h3>
                Billioniare by Day, Superhero by night? BatMan? <br />
                What is your SuperPower?
              </h3>
              <h4>Pick your candy</h4>
            </div>
            <FormControlLabel
              control={<Checkbox name="code" />}
              label="I Code"
              onChange={(event) => {
                inputField.extras.coding = event.target.checked;
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="streamer" />}
                label="I Stream"
                onChange={(event) => {
                  inputField.extras.streaming = event.target.checked;
                }}
              />
              <FormControlLabel
                control={<Checkbox name="edit" />}
                label="I Edit Videos"
                onChange={(event) => {
                  inputField.extras.videoEditing = event.target.checked;
                }}
              />
            </FormGroup>
            <Button
              className="form__btn"
              onClick={(e) => handleSubmit(e, "submit")}
              type="submit"
            >
              SUBMIT!
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Form;
