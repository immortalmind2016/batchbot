import React, { Component } from "react";
import HistoryCard from "../layout/cards/HistoryCard";
class HistoryTab extends Component {
  state = {};
  render() {
    return (
      <div
        className="history-card-cont tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    );
  }
}

export default HistoryTab;
