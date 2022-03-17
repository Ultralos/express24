import { useContext, useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useSelector, useDispatch } from "react-redux";
import { setExchangeRates } from "./exchangeRateSlice";


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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



function ExchangeRatePage() {
  const [currency, setCurrency] = useState("USD");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };



  const exchangeData = useSelector((state) => state.exchange.data);
  const dispatch = useDispatch();

  const rows = [
    createData('RUB', exchangeData.RUB),
    createData('USD', exchangeData.USD),
    createData('EUR', exchangeData.EUR),
    createData('GBP', exchangeData.GBP),
  ];

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/8733308ef9d4fe704902791d/latest/${currency}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        dispatch(setExchangeRates(data.conversion_rates))

      });
  }, [currency]);

  return (
    <div style={{display: 'flex', width: '800px', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto'}}>
             <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Currency</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={currency}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={'USD'}>USD</MenuItem>
            <MenuItem value={'EUR'}>EUR</MenuItem>
            <MenuItem value={'RUB'}>RUB</MenuItem>
            <MenuItem value={'GBP'}>GBP</MenuItem>
          </Select>
        </FormControl>
        <br/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Сurrency</TableCell>
            <TableCell align="right">Price</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
   
   

export default ExchangeRatePage;