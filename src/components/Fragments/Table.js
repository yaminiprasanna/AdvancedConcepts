import React,{Component} from 'react'
import Columns from './Columns'
function Table(){
    return(
        <table border='1'>
            <tbody>
                <tr>
                    <Columns/>
                    </tr>
                    <tr>
                        <td>yamini</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>satya</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>harini</td>
                        <td>24</td>
                    </tr>
                </tbody>
            </table>
    )
}
export default Table
