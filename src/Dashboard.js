import { useEffect, useState } from 'react';
// import OverviewTable from './OverviewTable';
import './Dashboard.css';
import { BASE_URL } from './apis';

const Dashboard = () => {
    const [overviewData, setOverviewData] = useState(null);

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/overview-data`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseData = await response.json();
                setOverviewData(responseData.data);
            } catch (error) {
                console.error('Error fetching overview data:', error);
            }
        };

        fetchOverviewData();
    }, []);

    return (
        <>
            <div className="col main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <p className="lead">Full Employee Details and Records</p>
                <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>Data and Records</strong> Learn more about employee
                </div>
                {overviewData && (
                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Sub Admin</h6>
                                    <h1 className="display-4">{overviewData.fullData.subAdmin}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">All Entry</h6>
                                    <h1 className="display-4">{overviewData.fullData.allLeads}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fab fa-list fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Total Earning</h6>
                                    <h1 className="display-4">{overviewData.fullData.toalEarning}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Shares</h6>
                                    <h1 className="display-4">13</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                
            <p className="lead ">Current Day Employee Details and Records</p>
            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Sub Admin</h6>
                            <h1 className="display-4">{overviewData && overviewData.oneDayData.subAdmin}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">All Entry</h6>
                            <h1 className="display-4">{overviewData && overviewData.oneDayData.allLeads}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fab fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Total Earning</h6>
                            <h1 className="display-4">{overviewData && overviewData.oneDayData.totalEarning}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Shares</h6>
                            <h1 className="display-4">04</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row ">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <h5 className="mt-3 mb-3 text-secondary">
               Check More Records of Sub-Admin
              </h5>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th>No</th>
                                <th>Label</th>
                                <th>Header</th>
                                <th>Column</th>
                                <th>Record Data</th>
                            </tr>
                        </thead>
                        <tbody>
                         {record.slice(0, 5).map((output)=>
                            <tr>
                                <td>{output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td>{output.website}</td>
                                <td></td>
                            </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                 </div>
        </div> */}
            {/* <a id="more"></a> */}
            {/* <hr /> */}

        </div>
        </>
    )
}
export default Dashboard
