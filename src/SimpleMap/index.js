import React, { useEffect } from 'react';
import './SimpleMap.css';
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, TitleComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import canadaMapData from './georef-canada-province.json';
import populationsData from './populations.json';
import Box from '@mui/material/Box';

const SimpleMap = ({ setTopic }) => {
  useEffect(() => {
    setTopic('SimpleMap');
  }, [setTopic]);

  function getGeoData() {
    echarts.use([MapChart, TooltipComponent, TitleComponent, VisualMapComponent, CanvasRenderer]);

    let myChart = echarts.getInstanceByDom(document.querySelector('.geo'));

    if (!myChart) { myChart = echarts.init(document.querySelector('.geo')); }
    myChart.showLoading();
    echarts.registerMap('canada', canadaMapData);
    myChart.setOption({
      title: {
        text: 'Canada Population by Province',
        subtext: 'Source: Statistics Canada',
      },
      tooltip: {
        formatter: function(params) {
          return `The population of ${params.name} Province in 2021 was : ${params.value.toLocaleString()}`;
        }
      },
      visualMap: {
        left: 'left',
        top: 'center',
        min: 0,
        max: 10000000,
        text: ['High', 'Low'],
        calculable: true,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
      },
      series: [{
        type: 'map',
        width: '60%',
        map: 'canada',
        roam: true,
        scaleLimit: {
          min: 1,
          max: 10,
        },
        data: populationsData
      }],
    });
    myChart.hideLoading();
  }

  useEffect(() => {
    getGeoData();
  }, []);

  return (
    <Box sx={
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        marginBottom: '100px',
      }}>
      <Box className="geo">
      </Box>
    </Box>
  );
};

export default SimpleMap;
