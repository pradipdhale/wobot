import {
  Box,
  Select,
  styled,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import React from "react";
import Solide_line from '../../assets/Solid_lines.png'

const StyledBox = styled(Box)`
  height: auto;
  width: 400px;
  border-radius: 15px;
  padding: 30px 50px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
`;
const FormWrapper = styled(Box)`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 93px;
`;
const SubBox = styled(Box)`
  align-items: center;
`;

const StyledTypo = styled(Typography)`
  width: 378px;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
`;
const StyledPara = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-align: center;
`;

const StyledButton = styled("button")`
  margin: 10px 12px;
  border: none;
  font: Inter;
  weight: 500;
  font-size: 14px;
  text-align: center;
  border-radius: 1px;
  line-height: 16px;
  '&:focus': {
    display: 'block',
    background-color: '#99f',
  },
`;
const ButtonStyle = styled(Button)`
  background-color: #3766e8;
  color: #ffffff;
`;

const ImgStyle = styled('img')`
margin: 0 auto;
`

const FormContainer = () => {
  return (
    <FormWrapper>
      <StyledBox>
      <ImgStyle src={Solide_line} />
        <StyledTypo className="newh3" variant="h3">
          It's a delight to have you onboard
        </StyledTypo>
        <StyledPara>
          Help us know you better.
          <br /> (This is how we optimize Wobot as per your business needs)
        </StyledPara>
        <SubBox>
          <label>Company Name</label>
          <TextField
            placeholder="NARC"
            variant="outlined"
            fullWidth
            style={{ marginTop: 10, marginBottom: 20 }}
          />
          <label style={{ marginTop: 10 }}>Industry</label>
          <FormControl fullWidth style={{ marginTop: 10, marginBottom: 10 }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select label="Select">
              <MenuItem value='Infosys'>Infosys</MenuItem>
              <MenuItem value='Wipro'>Wipro</MenuItem>
              <MenuItem value='TCS'>TCS</MenuItem>
            </Select>
          </FormControl>
          <label>Company Size</label>
          <Box>
            <StyledButton className="button">1-20</StyledButton>
            <StyledButton className="button">21-50</StyledButton>
            <StyledButton className="button">51-200</StyledButton>
            <StyledButton className="button">201-500</StyledButton>
            <StyledButton className="button">500+</StyledButton>
          </Box>
        </SubBox>
        <ButtonStyle fullWidth>Get Started</ButtonStyle>
      </StyledBox>
    </FormWrapper>
  );
};

export default FormContainer;
