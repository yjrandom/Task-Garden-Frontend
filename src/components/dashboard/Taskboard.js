import React from 'react';
import SubBoard from "./SubBoard";
import {Col, Row} from "react-bootstrap";

function Taskboard({tasks}) {

    const colorMatrix = {
        color: [
            {backgroundColor: "rgba(231, 85, 85,1)"},
            {backgroundColor: "rgba(224, 159, 159)"},
            {backgroundColor: "rgba(241, 181, 121,1)"},
            {backgroundColor: "rgba(54, 150, 148,1)"}
        ]
    }

    const importantUrgentMatrix = {
        isImportant: [true,true,false,false],
        isUrgent: [true,false,true,false]
    }

    return (
        <div>
            <Row>
                <Col md={6} className={`px-0`}>
                    <SubBoard tasks={tasks}
                              isImportant={importantUrgentMatrix.isImportant[0]}
                              isUrgent={importantUrgentMatrix.isUrgent[0]}
                              color={colorMatrix.color[0]}/>
                </Col>
                <Col md={6} className={`px-0`}>
                    <SubBoard tasks={tasks}
                              isImportant={importantUrgentMatrix.isImportant[1]}
                              isUrgent={importantUrgentMatrix.isUrgent[1]}
                              color={colorMatrix.color[1]}/>
                </Col>

            </Row>
            <Row>
                <Col md={6} className={`px-0`}>
                    <SubBoard tasks={tasks}
                              isImportant={importantUrgentMatrix.isImportant[2]}
                              isUrgent={importantUrgentMatrix.isUrgent[2]}
                              color={colorMatrix.color[2]}/>
                </Col>
                <Col md={6} className={`px-0`}>
                    <SubBoard tasks={tasks}
                              isImportant={importantUrgentMatrix.isImportant[3]}
                              isUrgent={importantUrgentMatrix.isUrgent[3]}
                              color={colorMatrix.color[3]}/>
                </Col>

            </Row>

            {/*{*/}
            {/*    [{},{},{},{}].map((el, i)=>(*/}
            {/*        <Row>*/}
            {/*            <SubBoard tasks={tasks}*/}
            {/*                      isImportant={importantUrgentMatrix.isImportant[i]}*/}
            {/*                      isUrgent={importantUrgentMatrix.isUrgent[i]}*/}
            {/*                      color={colorMatrix.color[i]}/>    */}
            {/*        </Row>*/}
            {/*        */}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}

export default Taskboard;