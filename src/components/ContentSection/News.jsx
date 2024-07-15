import { useEffect, useState } from "react";
import { Flex, Spin, Alert } from "antd";

const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };
const content = <div style={contentStyle} />

export default function News({ valueSearch }) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchNews() {
            setLoading(true);
            const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c1ea1f327acb4dd7968ff7d9b97f1daf');
            const data = await response.json();
            console.log(data.articles)
            setNews(data.articles);
            setLoading(false);
        }

        fetchNews()
    }, [])

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
        <ul className="news">
            {news
            .filter(article => String(article.content).toLowerCase().includes(String(valueSearch).toLowerCase().trim()) || valueSearch === undefined)
            .map(article => (
                <li key={article.content.slice(0, 20)}>{article.content + ' '}<a href={article.url}>read all...</a></li>
            ))}
        </ul>
    )
}