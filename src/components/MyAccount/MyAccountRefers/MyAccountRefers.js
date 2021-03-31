import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

import NavSections from '../../MyAccount/NavSections/NavSections';

import './MyAccountRefers.scss';

const MyAccountRefers = () => {

  const My = () => {
    return (
      <div className="row justify-content-center">
        <div className="col-7">
          <img src="https://picsum.photos/100" alt="" />
        </div>
        <div className="col-12 mt-4">
          <p className="app-frame d-inline-block px-5 input-title">Username</p>
        </div>
      </div>
    );
  }

  const Refer = () => {
    return (
      <img src="https://picsum.photos/80" className="img-fluid rounded-circle" alt="" />
    );
  }

  return (
    <div className="MyAccountRefers container">
      <NavSections />
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 events-intro">
          <p className="app-bg p-1 text-center mb-5">Eventos</p>
        </div>
      </div>
      <Tree lineWidth={'2px'} lineColor={'green'} lineBorderRadius={'10px'} label={<My />}>
        <TreeNode label={<Refer />}>
          <TreeNode label={<Refer />}>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<Refer />}>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<Refer />}>
          <TreeNode label={<Refer />}>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<Refer />}>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
            <TreeNode label={<Refer />}>
              <TreeNode label={<Refer />} />
              <TreeNode label={<Refer />} />
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>

  )

}

export default MyAccountRefers;