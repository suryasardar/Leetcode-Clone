import Topbar from '@/compoents/Topbar/Topbar';
import Workspace from '@/compoents/Workspace/Workspace';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar ProblemPage />
        <Workspace/>
    </div>
}
export default ProblemPage;