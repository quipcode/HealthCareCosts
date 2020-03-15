import React, { Component } from "react";
import {Table, List, AutoSizer, Column, MultiGrid, ScrollSync, } from "react-virtualized";
import styles from './MultiGrid.example.css';
import {Box} from 'rebass'
import styled from 'styled-components'
import SortDirection from './SortDirection';
import SortIndicator from './SortIndicator';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import {generateRandomList} from './randomlist'

// const mydata = this.props.data

const BigBox = styled(Box)`
  min-height: 20rem;
  max-width: 100vw;
`;

// const {
//     Column,
//     Table,
//     defaultTableHeaderRowRenderer
//   } = ReactVirtualized;
  
    const list = Immutable.List(generateRandomList());
//   const list = new Array(200).fill(0).map((_, index) => ({
//     index,
//     label: `Row ${index}`
//   }));
  
  const rowGetter = ({ index }) => list[index];
  
  // This is a custom header row rendered
  // You should used all of the specified params,
  // But you can also add your own decorated behavior.
  const headerRowRenderer = ({
    className,
    columns,
    style
  }) => (
    <div
      className={className}
      role='row'
      style={style}
    >
      {columns}
    </div>
  )
  
  // This is a custom header example for a single cell
  // You have access to all of the named params,
  // But you don't necessarily need to use them all.
  const headerRenderer = ({
    columnData,
    dataKey,
    disableSort,
    label,
    sortBy,
    sortDirection
  }) => (
    <div>Numbers</div>
  )
  
class SearchResults extends  React.PureComponent {
    static contextTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
      };
    constructor(props, context){
        super(props, context);
        
        // this.state = {
        //     mydatas: this.props.data.healthcarecosts,
        //     bilbo: "g",
        //     colCount: (Object.keys(this.props.data.healthcarecosts[0])).length,
        //     headers: Object.keys(this.props.data.healthcarecosts[0]),
        //     counter: 0
        // }

        const sortBy = 'index';
        const sortDirection = SortDirection.ASC;
        const sortedList = this._sortList({sortBy, sortDirection});

        this.state = {
            mydatas: this.props.data.healthcarecosts,
            bilbo: "g",
            colCount: (Object.keys(this.props.data.healthcarecosts[0])).length,
            headers: Object.keys(this.props.data.healthcarecosts[0]),
            counter: 0,
            disableHeader: false,
            headerHeight: 30,
            height: 270,
            hideIndexRow: false,
            overscanRowCount: 10,
            rowHeight: 40,
            rowCount: 1000,
            scrollToIndex: undefined,
            sortBy,
            sortDirection,
            sortedList,
            useDynamicRowHeight: false,
          };
          this._getRowHeight = this._getRowHeight.bind(this);
          this._headerRenderer = this._headerRenderer.bind(this);
          this._noRowsRenderer = this._noRowsRenderer.bind(this);
          this._onRowCountChange = this._onRowCountChange.bind(this);
          this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
          this._rowClassName = this._rowClassName.bind(this);
          this._sort = this._sort.bind(this);
    }
    
  renderRow = ({ index, isScrolling, key, style}) => {
    return (
      <div key={key} style={style}>
        <div>{this.props.data.healthcarecosts[index]["Provider State"]}</div>
        <div>{this.props.data.healthcarecosts[index]["HCPCS Description"]}</div>
      </div>
    )
  }
  formatCheckboxHeader = () => {
    return (
        <p>Custom Header</p>
    )
}



cellRenderer = ({columnIndex, key, rowIndex, style}) => {
    
        if(rowIndex === 0){
            if(this.state.counter <= this.state.headers.length){
                {this.setState({
                    counter: this.state.counter += 1
                })}
                return(
                    <div className={styles.Cell} key={key} style={style}>
                        {this.state.headers[this.state.counter - 1]}
                       
                    </div>
                )
            }
            

        }else{
            return(
                <div className={styles.Cell} key={key} style={style}>
                {columnIndex}, {rowIndex}
                {/* <p>Hi</p> */}
                <p>{this.state.mydatas[rowIndex].name}</p>
                <p> {this.state.mydatas[rowIndex].email}</p>
              </div>
            )
        }
     
    
  }
  

  render() {
    //   console.log('props',this.props.data.healthcarecosts)
      
    //   console.log("headers", this.state.headers)
    console.log(list)

      const {
        disableHeader,
        headerHeight,
        height,
        hideIndexRow,
        overscanRowCount,
        rowHeight,
        rowCount,
        scrollToIndex,
        sortBy,
        sortDirection,
        sortedList,
        useDynamicRowHeight,
      } = this.state;
      const rowGetter = ({index}) => this._getDatum(sortedList, index);
    return (
        <React.Fragment>
            {/* <div style={{height:"1vh", width:"150vh"}}>
            <Table
                headerHeight={20}
                headerRowRenderer={headerRowRenderer}
                height={200}
                rowHeight={20}
                rowGetter={rowGetter}
                rowCount={list.length}
                width={300}
            >
                <Column
                dataKey='index'
                headerRenderer={headerRenderer}
                width={100}
                />
                <Column
                dataKey='label'
                label='Label'
                width={200}
                />
                <Column
                dataKey='index'
                headerRenderer={headerRenderer}
                width={100}
                />
                <Column
                dataKey='label'
                label='Label'
                width={200}
                />
            </Table>
            </div> */}
           
            <div style={{height:"300vh", width:"300vh", }}>
                <BigBox>
            <ScrollSync>{scrolling =>(
          <AutoSizer disableHeight>
            {({width}) => (
              <Table
                ref="Table"
                disableHeader={disableHeader}
                headerClassName={styles.headerColumn}
                headerHeight={headerHeight}
                height={height}
                noRowsRenderer={this._noRowsRenderer}
                overscanRowCount={overscanRowCount}
                rowClassName={this._rowClassName}
                rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                rowGetter={rowGetter}
                rowCount={rowCount}
                scrollToIndex={scrollToIndex}
                sort={this._sort}
                sortBy={sortBy}
                sortDirection={sortDirection}
                width={width}>
                {!hideIndexRow && (
                  <Column
                    label="Index"
                    cellDataGetter={({rowData}) => rowData.index}
                    dataKey="index"
                    disableSort={!this._isSortEnabled()}
                    width={70}
                  />
                )}
                <Column
                  dataKey="name"
                  disableSort={!this._isSortEnabled()}
                  headerRenderer={this._headerRenderer}
                  width={90}
                />
                <Column
                  width={210}
                  disableSort
                  label="The description label is really long so that it will be truncated"
                  dataKey="random"
                  className={styles.exampleColumn}
                  cellRenderer={({cellData}) => cellData}
                  flexGrow={1}
                />
              </Table>
            )}
          </AutoSizer>
          )}
          </ScrollSync>
          </BigBox>
        </div>

        {/* <div style={{height:"1vh", width:"150vh"}}>
        <p>He there</p>
            <BigBox>
                    
                <ScrollSync>{scrolling =>(
                    <AutoSizer>{({width, height})=>(
                <Box position='relative'>
                    
                <MultiGrid
                 
                    cellRenderer={this.cellRenderer}
                    columnWidth={150}
                    columnCount={8}
                    fixedColumnCount={2}
                    fixedRowCount={1}
                    height={300}
                    rowHeight={110}
                    rowCount={this.state.mydatas.length}
                    width={ width }
                    />
                    </Box>
                    )}
                    </AutoSizer>
                    )}
                    </ScrollSync>
                </BigBox>
        </div> */}
        </React.Fragment>

    );
  }
  
  _getDatum(list, index) {
    return list.get(index % list.size);
  }

  _getRowHeight({index}) {
    // const {list} = this.context;

    return this._getDatum(list, index).size;
  }

  _headerRenderer({dataKey, sortBy, sortDirection}) {
    return (
      <div>
        Full Name
        {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
      </div>
    );
  }

  _isSortEnabled() {
    // const {list} = this.context;
    const {rowCount} = this.state;

    return rowCount <= list.size;
  }

  _noRowsRenderer() {
    return <div className={styles.noRows}>No rows</div>;
  }

  _onRowCountChange(event) {
    const rowCount = parseInt(event.target.value, 10) || 0;

    this.setState({rowCount});
  }

  _onScrollToRowChange(event) {
    const {rowCount} = this.state;
    let scrollToIndex = Math.min(
      rowCount - 1,
      parseInt(event.target.value, 10),
    );

    if (isNaN(scrollToIndex)) {
      scrollToIndex = undefined;
    }

    this.setState({scrollToIndex});
  }

  _rowClassName({index}) {
    if (index < 0) {
      return styles.headerRow;
    } else {
      return index % 2 === 0 ? styles.evenRow : styles.oddRow;
    }
  }

  _sort({sortBy, sortDirection}) {
    const sortedList = this._sortList({sortBy, sortDirection});

    this.setState({sortBy, sortDirection, sortedList});
  }


  _sortList({sortBy, sortDirection}) {
    // const {list} = list;

    return list
      .sortBy(item => item[sortBy])
      .update(list =>
        sortDirection === SortDirection.DESC ? list.reverse() : list,
      );
  }

  _isSortEnabled() {
    // const {list} = this.context;
    const {rowCount} = this.state;

    return rowCount <= list.size;
  }
  _updateUseDynamicRowHeight(value) {
    this.setState({
      useDynamicRowHeight: value,
    });
  }
}



export default SearchResults