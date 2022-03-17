import { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import arrow from "./arrow.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { setAmount } from "./convertSlice";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function ConverterPage() {
  
  const [currency, setCurrency] = useState("USD");
  const [needCurrency, setNeedCurrency] = useState ("EUR")
  const [sum, setSum] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeNeedCurrency = (event) => {
    setNeedCurrency(event.target.value)
  }

  const convertValue = useSelector((state) => state.convert.value);
  const dispatch = useDispatch();

  function convert() {
    setResult( Number(convertValue)*Number(sum))
  }


  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/1788cbebf5eb987953affc47/pair/${currency}/${needCurrency}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setAmount(data.conversion_rate));
      });
  }, [currency, needCurrency]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3">Currency Converter</Typography>
      </ThemeProvider>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox">Sum</InputLabel>
          <BootstrapInput
            type="number"
            id="demo-customized-textbox"
            value={sum}
            onChange={(e) => setSum(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Currency</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={currency}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'RUB'}>RUB</MenuItem>
          </Select>
        </FormControl>
        <img style={{ marginTop: "20px" }} alt=" " src={arrow} />
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-textbox">Sum</InputLabel>
          <BootstrapInput
            type="number"
            id="demo-customized-textbox"
            value={result}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label"></InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={ needCurrency}
            onChange={handleChangeNeedCurrency}
            input={<BootstrapInput />}
        >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'RUB'}>RUB</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p>Convert Rate : {convertValue}</p>
      <Button variant="contained" type="submit" onClick={convert}>
        Convert
      </Button>
    </div>
  );
}

export default ConverterPage;
