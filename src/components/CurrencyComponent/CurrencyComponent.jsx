import React, { useEffect, useState } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Layout, List, Typography } from 'antd';
import { fetchCryptoAssets, fetchCryptoData } from '../../api';
import { Alert, Flex, Spin, Space } from 'antd';
import differenceInPercent from '../../percentCount';

const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />

const currencyComponent = {
    border: '1px solid black',
    borderRadius: '9px',
    marginBottom: '20px'
}

const data = [
    'Elon Musk buys bitcoin',
    'Telegram lose money',
    'Ruble is raising'
]


const CurrencyComponent = ({valueSearch, layout = false}) => {
    const [loading, setLoading] = useState(false);
    const [crypto, setCrypto] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
      async function preload() {
        setLoading(true);
        const { result } = await fetchCryptoData();
        const assets = await fetchCryptoAssets();
        setAssets(assets.map(asset => {
          const coin = result.find(c => c.id === asset.id);
          return {
            grow: asset.price < coin.price,
            growPercent: differenceInPercent(coin.price, asset.price),
            totalAmount: asset.amount * coin.price,
            priceForCoin: coin.price,
            totalProfit: asset.amount * coin.price - asset.amount * asset.price,
            ...asset
          }
        }));
        setCrypto(result);
        setLoading(false)
      }
      preload()
    }, []) 
      
    if (loading) {
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
    <Layout width='130%' className={layout ? 'yourCurrencyWithRegister': '.yourCurrencyWithoutRegister'}>
        {assets
        .filter(el => (String(el.id).toLowerCase().includes(String(valueSearch).toLowerCase().trim())) || (valueSearch === undefined))
        .map(asset => {
        return (
        <Card key={asset.id} style={currencyComponent}>
            <Statistic
            title={asset.id}
            value={asset.priceForCoin}
            precision={2}
            valueStyle={{
              color: asset.grow ? '#3f8600': '#cf1322'
            }}
            prefix={asset.grow ? <ArrowUpOutlined />: <ArrowDownOutlined />}
            suffix="$"
            />
            <List
                dataSource={[Object.entries(asset)[0][0]]}
                renderItem={() =>
                <>
                <List.Item>
                    <Typography.Text mark>[В вашем портфеле]</Typography.Text> {asset.totalAmount.toFixed(2) + '$'}
                </List.Item>

                <List.Item>
                  <Typography.Text mark>[Заработано]</Typography.Text> {asset.totalProfit.toFixed(2) + '$'}
                </List.Item>

                <List.Item>
                  <Typography.Text mark>[Процент заработка]</Typography.Text> {asset.growPercent.toFixed(2) + '%'}
                </List.Item>
                </>
                }
            />
       </Card>)})}
         
  </Layout>
  </>
)
}
export default CurrencyComponent;
