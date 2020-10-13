import {
  Checkbox,
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import "../Styles/Form.css";
import Brain from "../Logic/Brain";

function Form(props) {
  const brain = Brain("games", "games");
  const games = brain.all;
  const [step, setStep] = useState(1);
  const [inputFields, setInputFields] = useState([
    {
      budget: 0,
      games: [],
      extras: {
        streaming: true,
        videoEditing: true,
      },
    },
  ]);
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
          <TextField
            required="true"
            label="Budget"
            type="number"
            defaultValue="1000"
            onChange={(event) => console.log(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <Button className="form__btn" onClick={() => setStep(2)}>
            NEXT
          </Button>
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
          <FormControlLabel control={<Checkbox name="code" />} label="I Code" />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="streamer" />}
              label="I Stream"
            />
            <FormControlLabel
              control={<Checkbox name="edit" />}
              label="I Edit Videos"
            />
          </FormGroup>
          <Button className="form__btn">NEXT</Button>
        </div>
      </div>
    </Container>
  );
}

export default Form;
