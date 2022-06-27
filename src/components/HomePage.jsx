import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const { Title } = Typography;

const HomePage = () => {
  const { data, isLoading } = useGetCryptosQuery();
  const globalData=data?.data?.stats;

  if (isLoading) return <Loader/>;

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalData.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="56" /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value="56" /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="56"/></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value="56"/></Col>
        <Col span={12}><Statistic title="Total Markets" value="56" /></Col>
      </Row>

    </>
  );
};

export default HomePage;