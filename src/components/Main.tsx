import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ControlDate from './ControlDate';
import DateBox from './DateBox';
import axios from 'axios';
import { Holiday } from '../types/type';

const Container = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const requestData = {
  url: `https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?`,
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
};

const Main = () => {
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [clickedDate, setClickedDate] = useState<Date>();
  const [holiday, setHoliday] = useState<Holiday[]>([]);

  const getHoliday = async () => {
    const bodyData = {
      ...requestData,
      solYear: nowDate.getFullYear(),
      solMonth: nowDate.getMonth() + 1,
    };

    const response = await axios.get(
      `${bodyData.url}ServiceKey=${bodyData.serviceKey}&solYear=${bodyData.solYear}&solMonth=${bodyData.solMonth}`
    );
    const saveDate = [].concat(response.data.response.body.items.item);
    setHoliday(saveDate)
  };

  useEffect(() => {
    getHoliday();
  }, [nowDate]);
  
  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
      <DateBox
        nowDate={nowDate}
        setNowDate={setNowDate}
        clickedDate={clickedDate}
        setClickedDate={setClickedDate}
        holiday={holiday}
      />
    </Container>
  );
};

export default Main;
