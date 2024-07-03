import * as React from 'react';

export default class SearchJobs extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <div className="card" style={{ width: "21em"}}>
                        <div className="card-body">
                            <div className="card-title">
                                <form>
                                    <div className="d-flex align-items-center">
                                    <input placeholder="search" type="text"></input>
                                    <button>Search Jobs</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}