import * as React  from 'react'

export interface Props{
    id: string;
    name: string;
    roleid?: number
}

class Hello extends React.Component<Props, object>{
    render() {
        const { id, name, roleid = 0 } = this.props;

        if(roleid < 0){
            throw new Error('临时工');
        }

        return (
            <div className="class">
                Hello {id + name + roleid}
            </div>
        );
    }
}
export default Hello;