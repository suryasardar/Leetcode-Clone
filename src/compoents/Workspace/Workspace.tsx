import React from 'react';
import Split from 'react-split'
import ProblemDescription from './ProblemDescription/ProblemDescription';

type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split className='split'>
        <ProblemDescription />
        <div>code ediotoer</div>
    </Split>
}
export default Workspace;