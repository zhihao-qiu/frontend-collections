import React, { useState, useEffect } from 'react';
import '../App.css';
import './SmileRatings.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import LoopIcon from '@mui/icons-material/Loop';
import Slider from '@mui/material/Slider';

const SmileRatings = ({ setTopic }) => {
  useEffect(() => {
    setTopic('SmileRatings');
  }, [setTopic]);

  const [rangeValue, setRangeValue] = useState(0.5);

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    setRangeValue(value);
  };

  const handleKeyDown = (e) => {
    const currentKey = e.key;
    const value = parseFloat(e.target.value);
    // if key is Enter, then setRangeValue to (current value / 100)
    if (currentKey === 'Enter') {
      if (isNaN(value)) {
        alert('Please enter a valid number between 0 and 99');
        return;
      }
      if (value < 0 || value > 99) {
        alert('Please enter a valid number between 0 and 99');
        return;
      }
      setRangeValue(value / 100);
    }
  };


  useEffect(() => {
    const slider = document.querySelector('input[type="range"]');
    slider.value = rangeValue;
    const face = document.querySelector('.face');
    const lefteye = document.querySelector('.lefteye');
    const righteye = document.querySelector('.righteye');
    const mouth = document.querySelector('.mouth');
    const digitValue = document.querySelector('input[type="text"]');
    digitValue.value = Math.floor(rangeValue * 100);

    face.style.setProperty('--delay', `${-rangeValue}s`);
    lefteye.style.setProperty('--delay', `${-rangeValue}s`);
    righteye.style.setProperty('--delay', `${-rangeValue}s`);
    mouth.style.setProperty('--delay', `${-rangeValue}s`);
  }, [rangeValue]);

  return (
    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Paper sx={
        {
          maxWidth: 936,
          margin: 'auto',
          overflow: 'hidden',
        }
      }>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <Typography sx={{ my: 5, mx: 2, fontSize: 40 }} color="text.secondary" align="center">
                  How do you like our service?
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Container sx={{ my: 5, mx: 2, display: 'flex', flexDirection: 'Column', justifyContent: 'center', alignItems: 'center' }} color="text.secondary" align="center">
          <Container component="div" sx={{ position: 'relative'}}>
            <div className='face'></div>
            <div className='lefteye'></div>
            <div className='righteye'></div>
            <div className='mouth'></div>
          </Container>
          <Slider
            defaultValue={0.5}
            step={0.01}
            min={0.00}
            max={0.99}
            sx={{ width: 500 }}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => Math.floor(value * 100)}
            value={rangeValue}
            onChange={(e) => { handleChange(e); }}
          />
          <Container sx={{ width: '100%', display: 'flex', flexDirection: 'Row', justifyContent: 'center', alignItems: 'end' }}>
            <TextField
              id="standard-basic"
              label="Enter your rating"
              variant="standard"
              onKeyDown={(e) => { handleKeyDown(e); }}
            />
            <Button variant="contained" color="primary" sx={{ width: 150 }} startIcon={<LoopIcon />} onClick={() => {
              setRangeValue(0.5);
            }}>Reset</Button>

          </Container>
        </Container>
      </Paper>
    </Box>
  );
};

export default SmileRatings;
