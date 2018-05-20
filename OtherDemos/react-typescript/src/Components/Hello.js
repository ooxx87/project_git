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
    render() {
        const { id, name, roleid = 0 } = this.props;
        if (roleid < 0) {
            throw new Error('临时工');
        }
        return (React.createElement("div", { className: "class" },
            "Hello ",
            id + name + roleid));
    }
}
exports.default = Hello;
