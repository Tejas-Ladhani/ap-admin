
import {DownTrend, UpTrend} from '..';
import {Col,Typography} from 'antd'
import LineChart from '../../helpers/charts/LineChart';
import './style.css';

export default function DashboardCard(value) {
  const { data } = value.value;
  const isDown = data[data.length - 1] < data[data.length - 2];
  return (
      <Col md={8} lg={8} sm={24}>
      <div className="Main__Top__card shadow ">
        <div className="DashboardCard__TitleChart_Container">
          <div className="DashboardCard__Title">
            <Typography.Title level={5} className="dashboard-card-title">{value.value.title}</Typography.Title>
            <h4
              className="DashboardCard__Title_h4"
              style={{ color: isDown ? '#fe5461' : '#29cc97', fontFamily: 'PoppinsMedium, sans-serif' }}
            >
              {isDown
                ? <DownTrend style={{ color: '#fe5461', fontSize: '24px' }} className="DashboardCard_graph_icon me-2" />
                : <UpTrend style={{ color: '#29cc97', fontSize: '24px' }} className="DashboardCard_graph_icon me-2" />}
              {value.value.value}
            </h4>
          </div>
          <div><LineChart data={data} labels={['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7']} axesDisplay={false} tension={0.3} /></div>
        </div>
        <div className="DashboardCard__Number_Container">
          <div className="DashboardCard__Number_Container_inside">
            {isDown
              ? <DownTrend style={{ color: '#fe5461', fontSize: '24px' }} className="DashboardCard_graph_icon" />
              : <UpTrend style={{ color: '#29cc97', fontSize: '24px' }} className="DashboardCard_graph_icon" />}
            <h4 style={{ color: isDown ? '#fe5461' : '#29cc97', fontFamily: 'PoppinsMedium, sans-serif' }}>{value.value.value}</h4>
          </div>
        </div>
      </div>
    </Col>
  );
}