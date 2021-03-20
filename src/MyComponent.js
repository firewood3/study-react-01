import React from "react";

const MyComponent = (props) => {
	return (
		<div>
			<div>{props.name}나의 새롭고 멋진 컴포넌트</div>
			<div>{props.children}</div>
		</div>
	);
};

MyComponent.defaultProps = {
	name: "기본이름",
	children: "없음",
};

export default MyComponent;
