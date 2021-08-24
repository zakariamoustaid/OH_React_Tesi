# react-row-select-table

[![npm version](https://badge.fury.io/js/react-row-select-table.svg)](https://badge.fury.io/js/react-row-select-table)

simple data table react Component

![image](./doc/image.png)



## Installation
```js
npm i react-row-select-table
```

## Usage

### src
```js
import React from "react"
import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table"

const Custom = () =>  (
  <Table onCheck={value => console.log(value)} defaultCheckeds={[1,3]}>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>name</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>tarou</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>zirou</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>subrou</Td>
      </Tr>
    </Tbody>
  </Table>
)
```

### Props

#### Table
```js
import Table from "react-row-select-table"

render ( <Table onCheck={() => {}} defaultCheckeds={[]} >...)
```

|name|Type|default|Description|
|:---|:---|:---|:---|
|onCheck|func||Callback checked indexs <br><br>Signature:<br> function(values: Array<number>) => void|
|defaultCheckeds|Array<number>|[]|default checked indexs|

#### Tr
```js
import { Tr } from "react-row-select-table"

render ( <Tr isCheckRow>...)
```

|name|Type|default|Description|
|:---|:---|:---|:---|
|isCheckRow|boolean|true|Set the check box check box to Row|



## Design Customize

```js
import React from "react"
import {BaseTable ,Thead, Tbody, Tr, Th, Td} from "react-row-select-table"
import styled from "styled-components"

const Table = styled(BaseTable)`
  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #ddd;
    }

    tr.tr-body:hover {
      background-color: #f5f5f5;
    }

    tr.tr-checked {
      background-color: #f5f5f5;
    }

    th {
      padding: 0.5rem;
      text-align: left;
    }

    td {
      padding: 0.5rem;
      text-align: left;
    }
  }
`


const Custom = () =>  (
  <Table onCheck={value => console.log(value)} defaultCheckeds={[1,3]}>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>name</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>tarou</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>zirou</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>subrou</Td>
      </Tr>
    </Tbody>
  </Table>
)
```



## DEMOS
* examples
  * https://wheatandcat.github.io/examples-pages/react-row-select-table/index.html?v1

* storybook
  * https://wheatandcat.github.io/react-row-select-table/
