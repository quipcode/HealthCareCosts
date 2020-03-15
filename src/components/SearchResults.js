import React, { Component } from "react";
import { List, AutoSizer, Table, Column, MultiGrid} from "react-virtualized";
import styles from './MultiGrid.example.css';

// const mydata = this.props.data

class SearchResults extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            mydatas: this.props.data,
            bilbo: "g"
        }
    }
    
  renderRow = ({ index, isScrolling, key, style}) => {
    return (
      <div key={key} style={style}>
        <div>{this.props.data[index].name}</div>
        <div>{this.props.data[index].email}</div>
      </div>
    )
  }
  
   txt(n){
    return this.state.bar[this.state.foo][n];
}

 txt = (n) => {
    return this.state.bar[this.state.foo][n];
}
cellRenderer = ({columnIndex, key, rowIndex, style}) => {
    return (
      <div className={styles.Cell} key={key} style={style}>
        {columnIndex}, {rowIndex}
        {/* <p>Hi</p> */}
        <p>{this. state.mydatas[rowIndex].name}</p>
        <p> {this. state.mydatas[rowIndex].email}</p>
      </div>
    );
  }
  
//   cellRenderer({columnIndex, key, rowIndex, style}) {
//     return (
//       <div className={styles.Cell} key={key} style={style}>
//         {columnIndex}, {rowIndex}, {this. state.bilbo}
//       </div>
//     );
//   }
  render() {
      console.log(this.props.data)
    return (
        <React.Fragment>
        {/* <div style={{height:"100vh"}}>
            <AutoSizer>
            {
                ({ width, height }) => {
                return <List
                    rowCount={this.props.data.length}
                    width={width}
                    height={height}
                    rowHeight={50}
                    rowRenderer={this.renderRow}
                />
                }
            }
            </AutoSizer>
         </div> */}

        {/* <div style={{height:"100vh"}}>
            <h2>Details</h2>
            <Table
            width={1000}
            height={500}
            headerHeight={20}
            rowHeight={70}
            rowCount={this.props.data.length}
            rowGetter={({ index }) => this.props.data[index]}
            >
            <Column
            label='name'
            dataKey='name'
            width={100}
            />
            
            <Column
            width={200}
            label='Email'
            dataKey='email'
            />
            </Table>
        </div> */}

        <div style={{height:"1vh"}}>
            
            <p>He there</p>
            <MultiGrid
                // cellRenderer={this.cellRenderer(this.props.data)}
                // cellRenderer={({ index }) => this.props.data[index]}
                cellRenderer={this.cellRenderer}
                columnWidth={300}
                columnCount={500}
                fixedColumnCount={2}
                fixedRowCount={1}
                height={300}
                rowHeight={110}
                rowCount={100}
                width={1800}
                />
        </div>
        </React.Fragment>

    );
  }
}

// export default App;

export default SearchResults