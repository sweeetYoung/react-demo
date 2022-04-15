import {Button, Col, DatePicker, Input, Row, Select} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import React from "react";
import state from '../../redux/state'
import actions from '../../redux/actions'
// import {SET_FILTER_PARAMS} from "../../redux/actionsType";

interface FilterConfig {
  type?: string,
  property?: any,
  index: string
}
interface paramsConfig{
  [key: string]: any
}
const filterParams: paramsConfig = state.filterParams

function FilterBar({ groupData }: { groupData: FilterConfig[] }) {
  // 处理筛选栏展示样式
  function handleFilterContainer(item: FilterConfig) {
    groupData.forEach(each => {
      if (each.property) {
        filterParams[each.property] = null
      }
    })
    console.log(filterParams)
    switch (item.type) {
      case 'select':
        return <Select style={{ width: '100%' }} />;
      case 'date':
        return <DatePicker style={{ width: '100%' }} onChange={(date, dateString) => datePicker(dateString, item.property)} />;
      case 'button':
        return (
            <Button type="primary" icon={<SearchOutlined />} onClick={search}>
              Search
            </Button>
        )
      default:
        return <Input onChange={(e) => handleInput(e.target.value, item.property)} />
    }
  }
  function handleInput(val: any, property: any) {
    filterParams[property] = val
  }
  function datePicker(date: any, property: any) {
    filterParams[property] = date
    console.log(date)
  }
  // 查询
  function search() {
    console.log(filterParams)
    actions.SET_FILTER_PARAMS(filterParams)
  }

  return (
      <Input.Group>
        <Row key='1' gutter={16}>
          {
            groupData.map(item => {
              return (
                  <Col key={item.index} span={6} style={{marginBottom: '20px'}}>
                    {
                      handleFilterContainer(item)
                    }
                  </Col>
              )
            })
          }
        </Row>
      </Input.Group>
  )
}

export default FilterBar
