import React, { Component } from "react"
import { List, AutoSizer, Table, Column } from "react-virtualized";

//  function HealthCareCosts(props){
//     console.log(props)
//     return(<p>Heelloo there mother</p>)
//  }

 class HealthCareCosts extends Component {
    renderRow = ({ index, isScrolling, key, style}) => {
      return (
        <div key={key} style={style}>
          <div>{this.props.healthcarecosts.healthcarecosts[index]["HCPCS Description"]}</div>
          <div>{this.props.healthcarecosts.healthcarecosts[index]["Provider State"]}</div>
        </div>
      )
    }
    render() {
        if(this.props.healthcarecosts.healthcarecosts[0]){
            console.log(this.props.healthcarecosts.healthcarecosts[0]["Provider State"])
        }
      return (
        
          <React.Fragment>
              <div className="container">
                  <div className="row">
                    <div className="col">
                        <p>what up {this.props.healthcarecosts.healthcarecosts[0]["Provider State"] }</p>
                    </div>
                  </div>
              </div>
              
            <div style={{height:"100vh"}}>
                <AutoSizer>
                {
                ({ width, height }) => {
                    return <List
                    rowCount={this.props.healthcarecosts.healthcarecosts.length}
                    width={width}
                    height={height}
                    rowHeight={50}
                    rowRenderer={this.renderRow}
                    />
                }
                }
                </AutoSizer>
            </div>

            {/* <div>
            <h2>Details</h2>
                    <Table
                    width={500}
                    height={300}
                    headerHeight={20}
                    rowHeight={40}
                    rowCount={this.props.healthcarecosts.healthcarecosts.length}
                    rowGetter={({ index }) => this.props.healthcarecosts.healthcarecosts[index]}
                    >
                    <Column
                        label='Username'
                        dataKey='username'
                        width={100}
                    />
                        
                    <Column
                        width={200}
                        label='Email'
                        dataKey='email'
                    />
                    </Table>
            </div> */}
            </React.Fragment>
        
      );
    }
  }

 export default HealthCareCosts