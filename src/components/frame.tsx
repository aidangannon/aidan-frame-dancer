import React, {Fragment} from 'react';
import FrameDto from "../dtos/frameDto";
import {FrameStatusEnum} from "../enums/frameStatusEnum";
import frameStatusToNameParser from './services/frameStatusToNameParser';
import ReactTooltip from "react-tooltip";
import FramesProvider from "../state/framesContext";
import styled from "styled-components";
import frameStatusToColorMapper from "./services/frameStatusToColorMapper";

const StyledFrame = styled.div`
  background-color: ${({frameStatus}: {frameStatus: FrameStatusEnum}) => frameStatusToColorMapper(frameStatus)};
  margin: 10px;
  width: 12.5px;
  height: 12.5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.15);
`;

// component that represents a single frame
const Frame = ({frame}: {frame: FrameDto}): JSX.Element =>{
    console.log()
    return(
        <Fragment>
            <StyledFrame frameStatus={frame.status} data-tip data-for={frame.number.toString()}/>

            <ReactTooltip id={frame.number.toString()} place="top" effect="solid">
                {"frame "+frame.number}
                <br/>
                {frameStatusToNameParser(frame.status)}
            </ReactTooltip>
        </Fragment>
    );
}

export default Frame;