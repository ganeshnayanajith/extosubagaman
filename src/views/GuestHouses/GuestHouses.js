import React, {Component, lazy, Suspense} from 'react';
import {Bar, Line} from 'react-chartjs-2';
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
  DropdownToggle, Pagination, PaginationItem, PaginationLink,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'

import app from '../../firebase/Firebase';
import {AuthContext} from '../../firebase/Auth';
import Swal from 'sweetalert';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdbreact";
import Select from 'react-select'
// import gh1 from './images/gyllyngvase-house-guesthouse-falmouth-1920x1080.jpg';
// import gh2 from './images/Oakvilla-38-1920x1080.jpg';
// import gh3 from './images/2017_Front_Outside-1920x1080_c.jpg';
// import gh4 from './images/villa_kiveli_5.jpg';
// import gh5 from './images/657530589.jpg';
// import gh6 from './images/puerto-rico-commercial-guesthouse-simpliphi-power-access-main-view-1920-1080.jpg';


const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

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
  {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
  {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
  {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
  {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'},
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
      labelColor: function (tooltipItem, chart) {
        return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor}
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


const ServiceProvider = props => (
  <tr>
    <td>{props.Email}</td>
    <td>{props.Name}</td>
    <td>{props.Status}</td>
    <td><Button block color="primary">Verify</Button></td>
  </tr>
);

class GuestHouses extends Component {
  constructor(props) {
    super(props);

    this.guestHousesRef = "";

    this.state = {
      district: 'All',
      guestHouses: []
    };

    this.handleChange = this.handleChange.bind(this);


  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


  componentDidMount() {
    let logged = sessionStorage.getItem('loggedIn');
    if (logged !== 'true') {
      this.props.history.push("/login");
    } else {
      document.title = "Guest Houses";
      this.guestHousesRef = app.database().ref('GuestHouses');
      this.guestHousesRef.on('value', (snapshot) => {
        console.log(snapshot.val());
        var guestHouses = snapshot.val();
        var newGuestHouses = [];
        for (let guestHouse in guestHouses) {

          newGuestHouses.push({
            Id: guestHouse,
            Image: guestHouses[guestHouse].Image,
            Name: guestHouses[guestHouse].Name,
            Text: guestHouses[guestHouse].Text,
            Address:guestHouses[guestHouse].Address,
            BOI:guestHouses[guestHouse].BOI,
            District:guestHouses[guestHouse].District,
          });


        }

          this.setState({
            guestHouses: newGuestHouses,
          });

        });

    }
  }


  handleChange(event) {
    console.log(event.target.value);
    this.setState({district: event.target.value});


    this.guestHousesRef = app.database().ref('GuestHouses');
    this.guestHousesRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      var guestHouses = snapshot.val();
      var newGuestHouses = [];
      for (let guestHouse in guestHouses) {

        if (event.target.value !== 'All') {
          if (guestHouses[guestHouse].District === event.target.value) {
            newGuestHouses.push({
              Id: guestHouse,
              Image: guestHouses[guestHouse].Image,
              Name: guestHouses[guestHouse].Name,
              Text: guestHouses[guestHouse].Text,
              Address:guestHouses[guestHouse].Address,
              BOI:guestHouses[guestHouse].BOI,
              District:guestHouses[guestHouse].District,
            });
          }
        } else {


          newGuestHouses.push({
            Id: guestHouse,
            Image: guestHouses[guestHouse].Image,
            Name: guestHouses[guestHouse].Name,
            Text: guestHouses[guestHouse].Text,
            Address:guestHouses[guestHouse].Address,
            BOI:guestHouses[guestHouse].BOI,
            District:guestHouses[guestHouse].District,
          });
        }


      }
      this.setState({
        guestHouses: newGuestHouses,
      });

    });


  }

  viewMore(event) {
    console.log(event.target.id);
  }

  render() {

    return (
      <div className="animated fadeIn">


        <Row>
          <MDBCol lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Dropdowns</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/dropdowns/" rel="noreferrer noopener" target="_blank"
                     className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>


                <select value={this.state.district} onChange={this.handleChange} className="form-control">
                  <option value="All">All</option>
                  <option value="Ampara">Ampara</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Badulla">Badulla</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Galle">Galle</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Kegalle">Kegalle</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Kurunegala">Kurunegala</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Matale">Matale</option>
                  <option value="Matara">Matara</option>
                  <option value="Moneragala">Moneragala</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="NuwaraEliya">Nuwara Eliya</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Puttalam">Puttalam</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Vavuniya">Vavuniya</option>

                </select>


              </CardBody>
            </Card>


          </MDBCol>

        </Row>


        {this.state.district === "All" ?


          this.state.guestHouses.map((guestHouse, index) => {
            return (
              <>
                <Row>
                  <MDBCol lg="12">
                  <MDBCard>
                    <MDBCardBody>
                    <Row>
                  <MDBCol lg="6">
                    <MDBCard key={index}>
                      <MDBCardImage className="img-fluid" src={guestHouse.Image} waves/>
                    </MDBCard>

                  </MDBCol>

                  <MDBCol lg="6">
                    <MDBCard key={index}>
                      <MDBCardBody>
                        <MDBCardTitle>{guestHouse.Name}</MDBCardTitle>
                        <MDBCardText>{guestHouse.Text}</MDBCardText>
                        <MDBCardText>{guestHouse.Address}</MDBCardText>
                        <MDBCardText>{guestHouse.BOI}</MDBCardText>
                        <MDBCardText>{guestHouse.District}</MDBCardText>
                        <MDBBtn color="primary" id={guestHouse.Id} onClick={this.viewMore}>View More</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>

                  </MDBCol>
                    </Row>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>

                </Row>


              </>
            )
          })


          :


          this.state.guestHouses.map((guestHouse, index) => {
            return (
              <>


                <Row>
                  <MDBCol lg="12">
                  <MDBCard>
                    <MDBCardBody>
                      <Row>
                        <MDBCol lg="6">
                          <MDBCard key={index}>
                            <MDBCardImage className="img-fluid" src={guestHouse.Image} waves/>
                          </MDBCard>

                        </MDBCol>

                        <MDBCol lg="6">
                          <MDBCard key={index}>
                            <MDBCardBody>
                              <MDBCardTitle>{guestHouse.Name}</MDBCardTitle>
                              <MDBCardText>{guestHouse.Text}</MDBCardText>
                              <MDBCardText>{guestHouse.Address}</MDBCardText>
                              <MDBCardText>{guestHouse.BOI}</MDBCardText>
                              <MDBCardText>{guestHouse.District}</MDBCardText>
                              <MDBBtn color="primary" id={guestHouse.Id} onClick={this.viewMore}>View More</MDBBtn>
                            </MDBCardBody>
                          </MDBCard>

                        </MDBCol>
                      </Row>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBCol>
                </Row>


              </>
            )
          })


        }


      </div>
    );
  }
}

export default GuestHouses;
