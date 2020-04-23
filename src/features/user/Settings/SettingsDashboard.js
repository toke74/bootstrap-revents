import React from 'react';
import SettingsNav from './SettingsNav';
import { Route, Redirect } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';

const SettingsDashboard = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-3 order-md-12">
        <SettingsNav />
      </div>
      <div className="col-md-8 col-lg-9 order-md-1">
        <Redirect exact from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photo" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </div>
    </div>
  );
};

export default SettingsDashboard;
