import React, { useEffect, useState } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Layout, List, Typography } from 'antd';
import { fetchCryptoAssets, fetchCryptoData } from '../../api';
import { Alert, Flex, Spin, Space} from 'antd';
import differenceInPercent from '../../percentCount';
import fakeFetchData from '../../api2';

const currencyComponent = {
    border: '1px solid black',
    borderRadius: '9px',
    marginBottom: '20px'
}

const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />

export default function AllCurrency({valueSearch}) {
    const [cryptoData, setCryptoData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function preloading() {
            setLoading(true)
            const { result } = await fakeFetchData();
            const newResult = result.map(el => {
              return ({
                ...el
              })
            })
            setCryptoData(newResult);
            setLoading(false)
        }

        preloading()
    }, []);

    if(loading) {
        return (
            <Flex gap="small" vertical>
            <Flex gap="small">
              <Spin tip="Loading" size="small">
                {content}
              </Spin>
              <Spin tip="Loading">{content}</Spin>
              <Spin tip="Loading" size="large">
                {content}
              </Spin>
            </Flex>
            <Spin tip="Loading...">
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
            </Spin>
          </Flex>
        )
    }

    return (
      <>
        <Layout width='130%' className='allCurrency'>
            {cryptoData
            .filter(el => (String(el.id).toLowerCase().includes(String(valueSearch).toLowerCase().trim())) || (valueSearch === undefined))
            .map(obj => (
            
                <Card key={obj.id} bordered={false} style={currencyComponent}> 
                <Statistic
                title={obj.id}
                value={obj.price}
                precision={2}
                valueStyle={{
                    color: obj.priceChange1w > 0 ? '#3f8600': '#cf1322',
                }}
                prefix={obj.priceChange1w > 0 ? <ArrowUpOutlined />: <ArrowDownOutlined />}
                suffix="$"
                />
                <List
                dataSource={Object.entries(obj).filter(el => (
                    el[0] === "priceChange1h" || el[0] === 'priceChange1d' || el[0] === 'priceChange1w'
                ))}
                renderItem={(item) => 
                <List.Item>
                    <Typography.Text mark>[ИЗМЕНЕНИЕ]</Typography.Text> {`${
                      item[0].slice(-2) === '1w' ? '1неделя': item[0].slice(-2) === '1d' ? '1день': '1час'
                    }: ${item[1].toFixed(2)}%`}
                </List.Item>}
                />
                 </Card>
          
            ))}
    </Layout>
  </>
    )
}