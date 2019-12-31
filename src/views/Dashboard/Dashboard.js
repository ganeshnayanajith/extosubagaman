import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { MDBContainer } from "mdbreact";
import {Link} from 'react-router-dom';
//import TextInput from 'react-autocomplete-input';

import  guesStatData from '../Data/statistic';
import carStatData from '../Data/carRentalStatistics';
import guideStatData from '../Data/guideStatistics'

import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

const GuestHouseName  = props =>(
  <option value = {props.guestHouseName.name}> </option>
)

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      main : 'Guest House',
      mainStatus : "All",
      dropdownOpen: false,
      radioSelected: 2,
      guestHouseStats : [],
      carRentalStats : [],
      guideStats : []
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSelectGuestHouse = this.onSelectGuestHouse.bind(this);
    this.onSelectGuide = this.onSelectGuide.bind(this);
    this.onSelectCarRental = this.onSelectCarRental.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentWillMount() {

  }

  componentDidMount() {

    //sessionStorage.setItem('loggedIn', 'true');
    let logged = sessionStorage.getItem('loggedIn');
    if (logged !== 'true') {

      this.props.history.push("/login");

    }

    console.log( guesStatData );

    this.setState({
      guestHouseStats: guesStatData
    })
  }


  onSelectGuestHouse(){
    this.setState({
      main : 'Guest House',
      mainStatus : "All",
      guestHouseStats : guesStatData
    })
  }

  onSelectCarRental(){
    this.setState({
      main : 'Car Rental',
      mainStatus : "All",
      guestHouseStats  : carStatData
    })
  }

  onSelectGuide(){
    this.setState({
      main : 'Guide',
      mainStatus : "All",
      guestHouseStats : guideStatData
    })
  }

  onChangeStatus(e){
    this.setState({
      mainStatus : e.target.value
    })
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info" style = {{backgroundImage : "url(/images/main-stat.png)",
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat'
            }}>
              <CardBody className="pb-0" >
                <ButtonGroup className="float-right">

                </ButtonGroup>
                <div className="text-value">Wow Trip</div>
                <div>Statistics</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>

                <Line data={cardChartData2} options={cardChartOpts2} height={70} />

              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Link style = {{textDecoration : "none"}} onClick={this.onSelectGuestHouse}>
              <Card className="text-white bg-info" style = {{backgroundImage : "url(/images/guest-house.png)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="fa fa-home"></i>
                    </DropdownToggle>

                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">Guest Houses</div>
                <div>Statistics</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
            </Link>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Link style = {{textDecoration : "none"}} onClick={this.onSelectCarRental}>
              <Card className="text-white bg-info" style = {{backgroundImage : "url(/images/car-rent.png)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="fa fa-car"></i>
                    </DropdownToggle>

                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">Car Rental</div>
                <div>Statistics</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
            </Link>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Link style = {{textDecoration : "none"}} onClick={this.onSelectGuide}>
              <Card className="text-white bg-info" style = {{backgroundImage : "url(/images/guide-stats.png)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="fa fa-flag"></i>
                    </DropdownToggle>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">Guides</div>
                <div>Statistics</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
            </Link>
          </Col>
        </Row>
        <Row>

        </Row>
        {this.guestHouseRender()}
      </div>
    );
  }


  guestHouseRender(){
    return(
      <>
        <MDBContainer className = "p-3 mb-5 bg-white rounded-lg">
          <CardTitle className="mb-0">  <i className="fa fa-search" > </i> Filter {this.state.main} By : </CardTitle>
          <form className='form-group' >
            <select className='form-control' onChange={this.onChangeStatus}>

              {this.state.guestHouseStats.map((guestHouse,index)=>(
                <option  value = {guestHouse.name} > {guestHouse.name}</option>
              ))}
            </select>
          </form>
        </MDBContainer>
        <MDBContainer className = "p-3 mb-5 bg-white rounded-lg">
          <CardTitle className="mb-0"> {this.state.main}  Income Statistics - {this.state.mainStatus}</CardTitle>
          <div className="small text-muted">2019</div>

          {/*}
          <i className="icon-cloud-download"></i>
          {*/}

          {this.state.guestHouseStats.map((guestHouse,index)=>(
            <>
              {guestHouse.name === this.state.mainStatus ?
                <>
                  <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                    <ButtonGroup className="mr-3" aria-label="First group">

                    </ButtonGroup>
                  </ButtonToolbar>

                  <Bar data={guestHouse.dataBar} options={guestHouse.barChartOptions} />

                </>

                :
                <></>
              }

            </>
          ))}


        </MDBContainer>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                {this.state.main} App Usage Statistics
              </CardHeader>
              <CardBody>

                <br />

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="fa fa-home"></i></th>
                    <th>Guest House</th>
                    <th className="text-center">Location</th>
                    <th>Usage</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody>

                  {this.state.guestHouseStats.map((guestHouse,index)=>(
                    <>
                      {guestHouse.name === "All" ?
                        <> </>
                        :
                        <tr>
                          <td className="text-center">
                            <div className="avatar">
                              <img src={guestHouse.image} className="img-avatar" alt="admin@bootstrapmaster.com" />
                              <span className="avatar-status badge-success"></span>
                            </div>
                          </td>
                          <td>
                            <div>{guestHouse.name}</div>
                            <div className="small text-muted">
                              Registered: {guestHouse.registry}
                            </div>
                          </td>
                          <td className="text-center">
                            <div>{guestHouse.district}</div>
                          </td>
                          <td>
                            <div className="clearfix">
                              <div className="float-left">
                                <strong>{guestHouse.usage}%</strong>
                              </div>
                              <div className="float-right">
                                <small className="text-muted">Jan 01, 2019 - Oct 10, 2019</small>
                              </div>
                            </div>
                            <Progress className="progress-xs" color="success" value= {guestHouse.usage} />
                          </td>
                          <td>
                            <div className="small text-muted">Last login</div>
                            <strong>{guestHouse.activity}</strong>
                          </td>
                        </tr>
                      }
                    </>
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default Dashboard;
