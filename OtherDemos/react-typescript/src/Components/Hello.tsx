import * as React from 'react'

export interface helloProps{
    id: string;
    name: string;
    roleid?: number
}
export interface helloState{
    title: string
}

class Hello extends React.Component<helloProps, helloState>{
    public state: helloState;
    constructor(props: helloProps){
        super(props);
        this.state = {
            title: ''
        }

    };
    render() {

        if(this.props.roleid == 0){
            throw new Error('临时工');
        }

        return (
            <div className="class">
                Hello {this.props.id + this.props.name + this.props.roleid}
            </div>
        );
    }
}
export default Hello;