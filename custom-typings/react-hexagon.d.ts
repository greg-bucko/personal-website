declare module 'react-hexagon' {
	import {ComponentClass} from "react";

	export interface HexagonProps {
		diagonal?: number;
		className?: string;
		onClick?: _propTypes.func;
		href?: string;
		target?: string;
		flatTop?: boolean;
		backgroundImage?: string;
		backgroundWidth?: number;
		backgroundHeight?: number;
		backgroundScale?: number;
		backgroundSize?: number;
		hexProps?: object;
		style?: object;
		children?: node
	}

	type Hexagon = ComponentClass<HexagonProps>;

	declare const Hexagon: Hexagon;
	export default Hexagon;
}
