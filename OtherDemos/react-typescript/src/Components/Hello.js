"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }
    ;
    render() {
        if (this.props.roleid == 0) {
            throw new Error('临时工');
        }
        return (React.createElement("div", { className: "class" },
            "Hello ",
            this.props.id + this.props.name + this.props.roleid));
    }
}
exports.default = Hello;
