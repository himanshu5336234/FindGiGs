import React from "react";
import { LegendText, Title,BidActivitie} from "./Stylesheet";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
const data = [
    {
        name: "#2345",
        offers_sent: 40,
        bids_received: 24,
        bids_reviewed: 24,
    },
    {
        name: "#2344",
        offers_sent: 30,
        bids_received: 13,
        bids_reviewed: 22,
    },
    {
        name: "#2245",
        offers_sent: 20,
        bids_received: 98,
        bids_reviewed: 22,
    },
    {
        name: "#2322",
        offers_sent: 27,
        bids_received: 39,
        bids_reviewed: 20,
    },
    {
        name: "#2389",
        offers_sent: 18,
        bids_received: 48,
        bids_reviewed: 21,
    },
    {
        name: "#2325",
        offers_sent: 23,
        bids_received: 38,
        bids_reviewed: 25,
    },
    {
        name: "#2333",
        offers_sent: 34,
        bids_received: 43,
        bids_reviewed: 21,
    },
];
const renderLegend = (props) => {
    const { payload } = props;
    return (
        <ul className="bidActivities__legend">
            {payload.map((entry, index) => (
                <LegendText key={`item-${index}`} color={entry.color}>
                    <span className="legend__bullet"></span>
                    {entry.value}
                </LegendText>
            ))}
        </ul>
    );
};
function BidActivities() {
    const gigGraphData = useSelector(
        (state) => state.gigsEnterprise.gigGraphData
    );
    // if (gigGraphData === null) {
    //     return <div className="bidActivities">Loading</div>;
    // }
    return (
        <div  >
            <Title  >
                Bid Activities
            </Title>

            <BidActivitie>
                <div
                    style={{
                        position:"relative"
                    }}
                >
                    <div
                        style={{
                            height: "80px",
                            width: "80px",
                            backgroundColor: "#FF862D",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "80px",
                            left: "-20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1rem",
                                display: "block",
                                fontWeight: "bold",
                            }}
                        >
                            2
                        </span>
                    </div>
                    <div
                        style={{
                            height: "150px",
                            width: "150px",
                            backgroundColor: "#9C3CE7",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.5rem",
                                display: "block",
                                fontWeight: "bold",
                            }}
                        >
                            6
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        marginTop:"20px",
                        display: "flex",
                        justifyContent: "space-between",
                       
                    }}
                >
                    <div
                      className="circle-wrapper"
                    >
                        <div
                        className="circles"
                            style={{
                          
                             
                                border: "3px solid #FF862D",
                               
                            }}
                        ></div>
                        <p >Invites Received</p>
                    </div>
                    <div 
                    className="circle-wrapper"
                    
                    >
                        <div className="circles"
                         
                        >

                        </div>
                        <p>Bids Sent</p>
                    </div>
                </div>
            </BidActivitie>
        </div>
    );
}
export default BidActivities;
