import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import Summary from "./Summary.js";
import TopNews from "./TopNews";
import Charts from "./Charts.js";
import Insights from "./Insights";

const TickerInfo = ({ ticker }) => {
	const [key, setKey] = useState("summary");
	return (
		<Tabs
			id="controlled-tab-example"
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className="mb-3"
		>
			<Tab eventKey="summary" title="Summary">
				<Summary ticker={ticker} />
			</Tab>
			<Tab eventKey="top-news" title="Top News">
				<TopNews ticker={ticker} />
			</Tab>
			<Tab eventKey="charts" title="Charts">
				<Charts ticker={ticker} />
			</Tab>
			<Tab eventKey="insights" title="Insights">
				<Insights ticker={ticker} />
			</Tab>
		</Tabs>
	);
};

export default TickerInfo;
