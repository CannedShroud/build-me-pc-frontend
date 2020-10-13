import {
  Checkbox,
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  FormControl,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import "../Styles/Form.css";
import Brain from "../Logic/Brain";

function Form(props) {
  const brain = Brain("games", "games");
  const games = brain.all;
  const [step, setStep] = useState(1);
  const [inputField, setInputField] = useState({
    budget: 0,
    games: [],
    extras: {
      streaming: true,
      videoEditing: true,
      coding: true,
    },
  });
  return (
    <Container>
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
            <TextField
              required="true"
              label="Budget"
              type="number"
              defaultValue="1000"
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
            id="combo-box-demo"
            options={games}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            required="true"
            renderInput={(params) => (
              <TextField {...params} label="Game" variant="outlined" />
            )}
          />
          <Button className="form__btn" onClick={() => setStep(3)}>
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
          <Button className="form__btn">NEXT</Button>
        </div>
      </div>
    </Container>
  );
}

export default Form;
